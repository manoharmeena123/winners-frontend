import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetApi } from "../ApIcall";
import logo from "../Images/123.jpg";

function Ticket() {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  const downloadPDF = async () => {
    const element = document.getElementById("ticket");
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("ticket.pdf");
  };

  useEffect(() => {
    downloadPDF();
  }, []);

  const Sendmail = async () => {
    try {
      const response = await GetApi(`api/admin/GetSingleJbalpurFormdata/${id}`);
      let detail = response?.data?.data;
      setUserData(detail);
    } catch (error) {
      console.error("Error updating payment status:", error);
    }
  };

  useEffect(() => {
    Sendmail();
  }, []);

  return (
    <>
      <button
        onClick={downloadPDF}
        className="btn btn-sm btn-outline-primary"
        style={{ position: "fixed", top: "5px", right: "5px" }}
      >
        Download Ticket
      </button>
      <section className="ticket-page" id="ticket">
        <div className="ticket-section">
          <div className="flex justify-center">
            <img
              src={logo}
              className="md:pt-[10px] pt-[50px] md:pb-[10px] pb-[24px]"
              alt=""
            />
          </div>
          <div className="flex flex-col md:gap-[30px] gap-[6px]">
            <p className="tik-name font-[400] md:text-[45px] text-[16px] md:leading-[60px] leading-[22px] text-[#000000]">
              Name -&nbsp;{" "}
              <span className="font-[700]">{userData?.FullName}</span>
            </p>
            <p className="tik-name font-[400] md:text-[45px] text-[16px] md:leading-[60px] leading-[22px] text-[#000000]">
              Father’s Name -&nbsp;{" "}
              <span className="font-[700]">{userData?.FatherName}</span>
            </p>
            <p className="tik-name font-[400] md:text-[45px] text-[16px] md:leading-[60px] leading-[22px] text-[#000000]">
              Registration Number - &nbsp;{" "}
              <span className="font-[700]">{userData?.RegistrationNumber}</span>
            </p>
          </div>
          <div className="border-b md:my-[60px] my-[10px] bg-[#000000] h-[1px]"></div>
          <div className="flex flex-col md:gap-[30px] gap-[12px]">
            <p className="tik-name font-[400] md:text-[45px] text-[16px] md:leading-[60px] leading-[22px] text-[#000000]">
              Seminar Date - &nbsp;{" "}
              <span className="font-[700]">29/07/2024</span>
            </p>
            <p className="tik-name font-[400] md:text-[45px] text-[16px] md:leading-[60px] leading-[22px] text-[#000000]">
              Reporting Time - &nbsp;{" "}
              <span className="font-[700]">10:30 AM</span>
            </p>
            <p className="tik-name font-[400] md:text-[45px] text-[16px] md:leading-[60px] leading-[22px] text-[#000000]">
              Address - &nbsp;{" "}
              <span className="font-[700]">
                रवींद्र भवन, सिविल लाइन, NH 86, गोपाल गंज, सागर, मध्यप्रदेश
                47001
              </span>
            </p>
          </div>
          <div className="md:pt-[100px] pt-[50px] md:gap-[60px] gap-[20px] flex flex-col items-center justify-center">
            <QRCodeCanvas value={id} style={{ width: 200, height: 200 }} />
            <div className="pt-[30px] md:pb-0 pb-[30px]">
              <p className="tik-name text-center font-[400] md:text-[45px] text-[16px] md:leading-[60px] leading-[22px] text-[#000000]">
                No Entry without Entry pass
              </p>
              <p className="tik-name text-center font-[400] md:text-[45px] text-[16px] md:leading-[60px] leading-[22px] text-[#000000]">
                One person will be allowed on one Entry Pass
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ticket;

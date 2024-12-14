import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer style={{ position: "relative" }} className="overflow-hidden">
        <div className="container m-auto ">
          <div className="footer-wrapper"></div>
          <div className="">
            <div className="footer">
              <div className="foot1">
                <Link to="/">
                  <img src="assets/footer/logo.svg" alt="" />
                </Link>
                <br />
                <p
                  style={{ marginRight: "6px" }}
                  className="text-center font-[Poppins] text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  The WiNNERS Institute, Infront Of Vishnupuri
                  <br />
                  IBus stop, A.B. Road, Indore, Madhya Pradesh 452001
                </p>
                <br />

                <div className="flex flex-row gap-[7px]">
                  <Link
                    to="https://facebook.com/thewinnersinstituteindore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/footer/icon2.svg" alt="" />
                  </Link>
                  <Link
                    to="https://instagram.com/thewinnersinstitute"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/footer/icon1.svg" alt="" />
                  </Link>
                  <Link
                    to="https://twitter.com/WinnersIndore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/footer/icon3.svg" alt="" />
                  </Link>
                  <Link
                    to="https://youtube.com/@WiNNERSInstituteIndore?si=GkvlJJfMBYDC9QVs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/footer/icon5.svg" alt="" />
                  </Link>
                  <Link to="https://t.me/WinnersInstituteIndoreAdityaSir" target="_blank" rel="noopener noreferrer">
                    <img src="assets/icon1.svg" alt="" />
                  </Link>
                  <Link
                    aria-label="Chat on WhatsApp"
                    to="https://wa.me/+919009335533"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/icon2.svg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="foot3">
                {/* <h6 className="footer-title text-left">Quick Links</h6> */}
                <div className="flex gap-[130px]">
                  <div className="foot2">
                    <ul className="footer-list">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/student-zone">Student Zone</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Photo Gallery</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="foot2">
                    <ul className="footer-list">
                      <li>
                        <Link
                          to="https://books.winnerspublication.store/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Publication
                        </Link>
                      </li>

                      <li>
                        <Link to="/franchise">Franchise</Link>
                      </li>
                      <li>
                        <Link to="/career">Career</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/refund-policy">Refund Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="foot2">
                <h6 className="footer-title">Download our app</h6>
                <ul className="footer-list">
                  <Link
                    to="https://play.google.com/store/apps/details?id=com.winners.institute"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/footer/item2.svg" alt="" />
                  </Link>
                  <Link
                    to="https://apps.apple.com/in/app/winners-institute/id1665819649"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/footer/item1.svg" alt="" />
                  </Link>
                  <Link
                    to="https://live.winnersinstitute.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/footer/item3.svg" alt="" />
                  </Link>
                </ul>
              </div>
            </div>
            {/* <div className="text-center">
            <ul
              className="footer-list"
              style={{
                gap: "20px",
                flexDirection: "unset",
                justifyContent: "center",
                position: "relative",
                zIndex: "111",
                listStyle: "none",
                paddingBottom: "20px",
              }}
            >
              <li>
                <Link style={{ fontSize: "11px" }} to="/terms-conditions">
                  Terms & Condition
                </Link>
              </li>{" "}
              -
              <li>
                <Link style={{ fontSize: "11px" }} to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              -
              <li>
                <Link style={{ fontSize: "11px" }} to="/refund-policy">
                  Refund Policy
                </Link>
              </li>
              -
              <li>
                <Link style={{ fontSize: "11px" }} to="/shipping-policy">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div> */}
          </div>
        </div>
      </footer>
      <div className="bottom-footer">
        <div className="container m-auto">
          <p className="m-0 text-center">
            © 2024 - <span>WiNNERS Online Edutech Pvt Ltd.</span> All rights
            reserved
          </p>
        </div>
      </div>
      <div className="fixed-button">
        <button className="down-arrow" onClick={scrollToTop}>
          <img src="/assets/footer/item4.svg" alt="" />
        </button>
        <div className="fixed-bg">
          <a
            href="https://wa.me/+919009335533"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <img src="/assets/footer/item5.svg" alt="" />
          </a>
          {/* <a
            href="sms:+919009335533"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat"
          >
            <img src="/assets/footer/item6.svg" alt="" />
          </a> */}
          <a href="tel:+919009335533" target="_blank" rel="noopener noreferrer">
            <img src="/assets/footer/item7.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

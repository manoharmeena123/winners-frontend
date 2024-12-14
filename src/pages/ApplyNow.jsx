// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Api_Url } from "../URL";
// import Header from "../components/nav/Header";
// import Footer from "../components/footer/Footer";

// const ApplyNow = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     Name: "",
//     Email: "",
//     Number: "",
//     City: "",
//     State: "",
//     Remark: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key]) {
//         validationErrors[key] = `${key} is required`;
//       }
//     });
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     try {
//       setIsLoading(true);
//       const response = await axios.post(
//         `${Api_Url}/api/admin/LotteryRegister`,
//         formData
//       );
//       console.log("Form submitted successfully:", response.data);
//       setIsLoading(false);
//       setSubmitted(true);
//     } catch (error) {
//       setIsLoading(false);
//       console.error("Error submitting form:", error);
//     }
//   };

//   const [AllForms, setAllForms] = useState([]);
//   const [formName, setFormName] = useState("Admit Card Form");

//   const GetAllForms = async () => {
//     try {
//       const response = await axios.get(`${Api_Url}/api/hod/GetAllForms`, {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });

//       setAllForms(response?.data?.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     GetAllForms();
//   }, []);

//   return (
//     <>
//       {/* <Header /> */}
//       <div className="bg-gray-50 py-6">
//         <h1 className="text-center text-3xl font-bold text-red-600">Apply Now</h1>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {AllForms.map((form) => (
//             <div
//               className={`${formName === form?.FormName
//                   ? "border border-red-500 bg-red-100"
//                   : "border border-transparent"
//                 } p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg`}
//               key={form._id}
//               onClick={() => setFormName(form?.FormName)}
//             >
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800">{form.FormName}</h3>
//                 <p className="mt-2 text-sm text-gray-600">
//                   Let’s embody your beautiful ideas together and simplify the way you visualize your next big things.
//                 </p>
//                 <h4 className="mt-2 text-base font-medium text-gray-700">GDS, India Post</h4>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h2 className="mt-10 text-2xl font-semibold text-gray-800 text-center">
//           {submitted ? "Thank you for your submission!" : "Lottery Form"}
//         </h2>

//         <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
//           {submitted ? (
//             <div className="text-center">
//               <h1 className="text-2xl font-semibold text-green-600">We will get back to you soon!</h1>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Full name *</label>
//                   <input
//                     type="text"
//                     name="Name"
//                     placeholder="Full name"
//                     value={formData.Name}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                   {errors.Name && <p className="mt-1 text-sm text-red-600">{errors?.Name}</p>}
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Email *</label>
//                   <input
//                     type="email"
//                     name="Email"
//                     placeholder="Your email here"
//                     value={formData.Email}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                   {errors.Email && <p className="mt-1 text-sm text-red-600">{errors?.Email}</p>}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Number *</label>
//                   <input
//                     type="text"
//                     name="Number"
//                     placeholder="Your number here"
//                     value={formData.Number}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                   {errors.Number && <p className="mt-1 text-sm text-red-600">{errors?.Number}</p>}
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">State *</label>
//                   <input
//                     type="text"
//                     name="State"
//                     placeholder="Your state here"
//                     value={formData.State}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                   {errors.State && <p className="mt-1 text-sm text-red-600">{errors?.State}</p>}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Current City *</label>
//                   <input
//                     type="text"
//                     name="City"
//                     placeholder="Current city"
//                     value={formData.City}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                   {errors.City && <p className="mt-1 text-sm text-red-600">{errors?.City}</p>}
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Remark *</label>
//                   <input
//                     type="text"
//                     name="Remark"
//                     placeholder="Remark"
//                     value={formData.Remark}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
//                   />
//                   {errors.Remark && <p className="mt-1 text-sm text-red-600">{errors?.Remark}</p>}
//                 </div>
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="px-8 py-3 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-150"
//                 >
//                   {isLoading ? "Wait..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default ApplyNow;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api_Url } from "../URL";

const ApplyNow = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Number: "",
    City: "",
    State: "",
    Remark: "",
  });
  const [errors, setErrors] = useState({});
  const [AllForms, setAllForms] = useState([]);
  const [formName, setFormName] = useState("Admit Card Form");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormData();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${Api_Url}/api/admin/LotteryRegister`,
        {
          ...formData,
          isWinner: false, // Ensure isWinner is always false upon submission
        }
      );
      console.log("Form submitted successfully:", response.data);
      setSubmitted(true);
    } catch (error) {
      setErrorMessage("Error submitting form. Please try again later.");
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateFormData = () => {
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) { // Check all fields
        validationErrors[key] = `${key} is required`;
      }
    });
    return validationErrors;
  };

  const GetAllForms = async () => {
    try {
      const response = await axios.get(`${Api_Url}/api/hod/GetAllForms`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setAllForms(response?.data?.data);
    } catch (error) {
      setErrorMessage("Error fetching forms. Please try again later.");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    GetAllForms();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="bg-gray-50 py-6">
        <h1 className="text-center text-3xl font-bold text-red-600">Apply Now</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AllForms.map((form) => (
            <div
              className={`${formName === form?.FormName
                ? "border border-red-500 bg-red-100"
                : "border border-transparent"
                } p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg`}
              key={form._id}
              onClick={() => setFormName(form?.FormName)}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{form.FormName}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Let’s embody your beautiful ideas together and simplify the way you visualize your next big things.
                </p>
                <h4 className="mt-2 text-base font-medium text-gray-700">GDS, India Post</h4>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-gray-800 text-center">
          {submitted ? "Thank you for your submission!" : "Lottery Form"}
        </h2>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          {submitted ? (
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-green-600">We will get back to you soon!</h1>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && <p className="text-sm text-red-600 text-center">{errorMessage}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Name", "Email", "Number", "State", "City", "Remark"].map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700">{field} *</label>
                    <input
                      type={field === "Email" ? "email" : "text"}
                      name={field}
                      placeholder={`Your ${field.toLowerCase()} here`}
                      value={formData[field]}
                      onChange={handleChange}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    />
                    {errors[field] && <p className="mt-1 text-sm text-red-600">{errors[field]}</p>}
                  </div>
                ))}
              </div>

              {/* <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-150"
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading ? "Wait..." : "Submit"}
                </button>

              </div> */}
              <div className="md:col-span-2 col-span-1 flex md:flex-row flex-col items-center justify-center gap-[16px]">
              {/* <button className="flex items-center gap-[22px] bg-transparent border border-[#D0021B] py-[17px] px-[37px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#D0021B]">
                Cancel
              </button> */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="flex items-center gap-[22px] bg-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#FFFFFF] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Please wait..." : "Submit"}
                {!isLoading && (
                  <img
                    src="assets/home/round-right.svg"
                    className="btn-arrow"
                    alt=""
                  />
                )}
              </button>
            </div>
            </form>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ApplyNow;

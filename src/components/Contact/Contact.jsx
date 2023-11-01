// import React from "react";
// import { FiMail } from "react-icons/fi";
// import "./Contact.css";
// import { useRef, useEffect, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   return (
//     <section className="paddings innerWidth contact-wrapper" id="Contact">
//       <div className="contact-container">
//         <div className="contact-title">
//           <h3>CONTACT</h3>
//         </div>
//         <div className="container-contact">
//           <div className="left">
//             <p className="  para secondaryText">
//               Feel free to reach out for
//               <strong style={{ color: "black" }}> job opportunities</strong> I am a fresher graduating in Computer Science in 2024 looking for Software Developent roles. You can ping me for any other inquiries and I am open to networking with like-minded people in the Technology Domain.

// hi harsh, congratulations on making this portfolio project. just customize it, write every logic by your own hand. getting every idea behind key stroke and finally be assured in God. Jai shree ram

//             </p>
//           </div>
//           <div className="email para ">
//             <div className="mail">
//               <FiMail stroke="blue" />
//               Mail
//             </div>
//             <div className="mailId">
//               <p>harshgarg2550@gmail.com</p>
//             </div>
//             <button className="bg-blue">
//               <a
//                 href="harshgarg2550@gmail.com"
//                 className="contact-button"
//               >
//                 {" "}
//                 Contact
//               </a>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="copyrights secondaryText">
//         &copy; Harsh Kumar
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('fDYzeBq_MjXMX_Myz');

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Your emailJS service ID and template ID
    const serviceID = 'service_y9h5hak';
    const templateID = 'template_ganh3we';

    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      message,
    })
      .then((response) => {
        console.log('Email sent:', response);
        setIsSent(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="mx-auto p-6 max-w-lg " id="Contact">
      <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>
      {isSent ? (
        <p className="text-green-500">Email Sent! Thank you.</p>
      ) : null}
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default Contact;

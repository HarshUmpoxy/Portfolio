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
    <>
    <h1 className="text-2xl font-semibold mb-4" id="Contact">Contact Me</h1>
    <div className="mx-auto p-6 md:w-full md:flex md:justify-around items-center" >
    {/* md:grid-cols-2 w-full */}
      <div>
      {isSent ? (
        <p className="text-green-500 md:text-3xl">Email Sent! Thank you.</p>
      ) : <p className='text-[#0775F0] font-semibold pt-2 pb-8 md:text-3xl'>Feel Free to React out</p>}
      <p className='pt-6 text-lg font-semibold font-montserrat pb-1'>Mail me here: <img src='../src/assets/mail.png' className='h-8 inline-flex'></img>
      <br/>
      <a href='mailto:cybercreaterharsh@gmail.com' className='text-base bg-blue-500 hover:bg-blue-600 text-white rounded-l p-1 pt-1 px-3'>harshgarg2550@gmail.com</a></p>
      </div>
      <form onSubmit={sendEmail} className="space-y-4 md:w-1/3 px-2 max-md:pt-8">
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
    </>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const form = useRef();

  // Handle input change
  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Main submit function handling both EmailJS & Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, phone, message } = userData;
    
    // Validation check
    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      // Send Email using EmailJS
      await emailjs.sendForm(
        'service_bm1wfht',
        'template_lpynu7a',
        form.current,
        { publicKey: 'NzdRDjdTgbUVrWCSx' }
      );
      console.log('Email sent successfully');

      // Store data in Firebase
      const res = await fetch(
        "https://reactcontactpage-d04aa-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, message }),
        }
      );

      if (res.ok) {
        alert("Form submitted successfully! ✅");
        setUserData({ name: "", email: "", phone: "", message: "" }); // Clear form
      } else {
        alert("Failed to store data ❌");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        
        {/* Call handleSubmit on form submission */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-5">
          <input type="text" name="name" placeholder="Your Name" value={userData.name} onChange={postUserData} required
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-600 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400" />
          
          <input type="email" name="email" placeholder="Your Email" value={userData.email} onChange={postUserData} required
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-600 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400" />
          
          <input type="tel" name="phone" placeholder="Your Phone" value={userData.phone} onChange={postUserData} required
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-600 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400" />
          
          <textarea name="message" placeholder="Your Message" value={userData.message} onChange={postUserData} required rows="4"
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-600 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"></textarea>

          <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

// import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser';
// function Contact() {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });


//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_bm1wfht', 'template_lpynu7a', form.current, {
//         publicKey: 'NzdRDjdTgbUVrWCSx',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };
//   // Function to update state when input values change
//   const postUserData = (event) => {
//     const { name, value } = event.target;
//     setUserData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const submitForm = async (e) => {
//     e.preventDefault();
  
//     const { name, email, phone, message } = userData;
  
//     // Validate required fields
//     if (!name || !email || !phone || !message) {
//       alert("Please fill in all fields before submitting.");
//       return; // Stop execution if validation fails
//     }
  
//     try {
//       const res = await fetch(
//         "https://reactcontactpage-d04aa-default-rtdb.firebaseio.com/userDataRecords.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ name, email, phone, message }),
//         }
//       );
  
//       if (res.ok) {
//         alert("Data stored successfully");
//         setUserData({ name: "", email: "", phone: "", message: "" }); // Clear form after submission
//       } else {
//         alert("Data not stored");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };
  
//   return (
//     <section className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
//     <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-gray-200">
//       <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//         Contact Us
//       </h2>
//       <form ref={form} onSubmit={sendEmail}   className="space-y-5">
//         <input
//           type="text"
//           name="name"
//           className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-600 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Your Name"
//           value={userData.name}
//           onChange={postUserData}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-600 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Your Email"
//           value={userData.email}
//           onChange={postUserData}
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-600 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Your Phone"
//           value={userData.phone}
//           onChange={postUserData}
//           required
//         />
//         <textarea
//           name="message"
//           className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-600 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Your Message"
//           value={userData.message}
//           onChange={postUserData}
//           required
//           rows="4"
//         ></textarea>
//         <button
//    onClick={submitForm}
//           className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   </section>
  
//   );
// }

// export default Contact;



{/* 
// import { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import "../styles/contact.css";
// import React from "react";
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, runTransaction, push, set } from "firebase/database";

// // Firebase configuration
// const firebaseConfig = { */}
//   apiKey: "AIzaSyDMSGsbkHALvkiS4mcBdRmx__ybdz_pA18",
//   authDomain: "chat-app-bf22d.firebaseapp.com",
//   databaseURL: "https://chat-app-bf22d-default-rtdb.firebaseio.com",
//   projectId: "chat-app-bf22d",
//   storageBucket: "chat-app-bf22d.appspot.com",
//   messagingSenderId: "961267170800",
//   appId: "1:961267170800:web:e6a72daf5d7ed80cb9b135",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contactNo: "",
//     email: "",
//     purpose: "",
//   });
//   const [darkMode, setDarkMode] = useState(false);

//   // Increment visitor count in Firebase
//   useEffect(() => {
//     const visitorRef = ref(database, "visitorCount");
//     runTransaction(visitorRef, (currentCount) => (currentCount || 0) + 1);
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Validate form data before submission
//   const validateFormData = () => {
//     const { name, contactNo, email, purpose } = formData;
//     if (!name || !contactNo || !email || !purpose) {
//       alert("All fields are required!");
//       return false;
//     }
//     return true;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateFormData()) return;

//     try {
//       // Save form data to Firebase
//       const formRef = push(ref(database, "menu"));
//       await set(formRef, formData);

//       // Send Email using EmailJS
//       await emailjs.send(
//         "service_4qs7xct",
//         "template_5ufavk6",
//         formData,
//         "RlxjAgahjJR2mPZ92" // Replace with your actual public key
//       );

//       alert("Your message is recorded. Our team will contact you soon.");
//       setFormData({ name: "", contactNo: "", email: "", purpose: "" }); // Clear form
//     } catch (error) {
//       console.error("Error:", error);
//       alert("There was an error submitting your message. Please try again.");
//     }
//   };

//   return (
//     <div className={darkMode ? "dark" : "light"}>
//       <header>
//         <nav>
//           <a href="/" className="logo">
//             The Coding Impact<i className="ri-home-2-fill"></i>
//           </a>
//           <a href="/" className="nav__link">Home</a>
//           <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
//             <i className={darkMode ? "ri-moon-fill" : "ri-sun-fill"}></i>
//           </button>
//         </nav>
//       </header>

//       <main>
//         <section className="contact-page">
//           <h1>Let's Work Together<span>.</span></h1>
//           <p>Fill this or reach us at <a href="mailto:info@thecodingimpact.com">info@thecodingimpact.com</a></p>

//           <form onSubmit={handleSubmit} className="contact__form">
//             <input type="text" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} required />
//             <input type="tel" name="contactNo" placeholder="Phone Number" value={formData.contactNo} onChange={handleChange} required />
//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//             <textarea name="purpose" placeholder="Message" value={formData.purpose} onChange={handleChange} required></textarea>
//             <button type="submit" className="btn">Submit</button>
//           </form>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Contact;


// // import { useState, useEffect } from "react";
// // import emailjs from "@emailjs/browser"; // Corrected EmailJS import
// // import "../styles/contact.css";
// // import React from "react";
// // import { initializeApp } from "firebase/app";
// // import { getDatabase, ref, runTransaction } from "firebase/database";

// // // Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDMSGsbkHALvkiS4mcBdRmx__ybdz_pA18",
// //   authDomain: "chat-app-bf22d.firebaseapp.com",
// //   databaseURL: "https://chat-app-bf22d-default-rtdb.firebaseio.com",
// //   projectId: "chat-app-bf22d",
// //   storageBucket: "chat-app-bf22d.appspot.com",
// //   messagingSenderId: "961267170800",
// //   appId: "1:961267170800:web:e6a72daf5d7ed80cb9b135"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const database = getDatabase(app);

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     contactNo: "",
// //     email: "",
// //     purpose: "",
// //   });
// //   const [darkMode, setDarkMode] = useState(false);

// //   // Increment visitor count in Firebase
// //   useEffect(() => {
// //     const visitorRef = ref(database, "visitorCount");
// //     runTransaction(visitorRef, (currentCount) => (currentCount || 0) + 1);
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     emailjs
// //       .send("service_4qs7xct", "template_5ufavk6", formData, "YOUR_USER_ID")
// //       .then(() => alert("Message Sent Successfully!"))
// //       .catch(() => alert("Failed to Send Message"));
// //   };

// //   return (
// //     <div className={darkMode ? "dark" : "light"}>
// //       <header>
// //         <nav>
// //           <a href="/" className="logo">
// //             The Coding Impact<i className="ri-home-2-fill"></i>
// //           </a>
// //           <a href="/" className="nav__link">Home</a>
// //           <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
// //             <i className={darkMode ? "ri-moon-fill" : "ri-sun-fill"}></i>
// //           </button>
// //         </nav>
// //       </header>
// //       <main>
// //         <section className="contact-page">
// //           <h1>Let's Work Together<span>.</span></h1>
// //           <p>Fill this or reach us at <a href="mailto:info@thecodingimpact.com">info@thecodingimpact.com</a></p>
// //           <form onSubmit={handleSubmit} className="contact__form">
// //             <input type="text" name="name" placeholder="First Name" onChange={handleChange} required />
// //             <input type="tel" name="contactNo" placeholder="Phone Number" onChange={handleChange} required />
// //             <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
// //             <textarea name="purpose" placeholder="Message" onChange={handleChange} required></textarea>
// //             <button type="submit" className="btn">Submit</button>
// //           </form>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Contact;

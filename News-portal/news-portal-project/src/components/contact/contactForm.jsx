"use client";

import { useState } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");


  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });


    setErrors({
      ...errors,
      [e.target.name]: "",
    });

  };



  // Form Validation
  const validateForm = () => {

    const newErrors = {};


    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }


    if (!formData.email.trim()) {

      newErrors.email = "Email is required";

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {

      newErrors.email = "Enter a valid email address";

    }


    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }


    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }


    return newErrors;

  };



  // Submit Form
  const handleSubmit = async (e) => {

    e.preventDefault();


    const validationErrors = validateForm();


    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);
      setSuccess("");

      return;

    }



    try {


      // Browser Console Output
      console.log(
        "Contact Form Data:",
        formData
      );



      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );



      const result = await response.json();



      console.log(
        "Server Response:",
        result
      );



      if (result.success) {


        setSuccess(
          "Your message has been sent successfully!"
        );


        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });


        setErrors({});


      }



    } catch (error) {


      console.log(
        "Submit Error:",
        error
      );


      setSuccess(
        "Something went wrong. Please try again."
      );


    }


  };




  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-lg bg-white p-8 shadow-md"
    >


      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full rounded border border-gray-300 p-3 text-gray-900 outline-none focus:border-red-600"
      />


      {errors.name && (
        <p className="text-sm text-red-600">
          {errors.name}
        </p>
      )}



      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full rounded border border-gray-300 p-3 text-gray-900 outline-none focus:border-red-600"
      />


      {errors.email && (
        <p className="text-sm text-red-600">
          {errors.email}
        </p>
      )}




      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full rounded border border-gray-300 p-3 text-gray-900 outline-none focus:border-red-600"
      />


      {errors.subject && (
        <p className="text-sm text-red-600">
          {errors.subject}
        </p>
      )}




      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        placeholder="Your Message"
        className="w-full rounded border border-gray-300 p-3 text-gray-900 outline-none focus:border-red-600"
      />



      {errors.message && (
        <p className="text-sm text-red-600">
          {errors.message}
        </p>
      )}




      <button
        type="submit"
        className="w-full rounded bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
      >
        Send Message
      </button>




      {success && (
        <p className="text-center text-green-600">
          {success}
        </p>
      )}


    </form>

  );

}
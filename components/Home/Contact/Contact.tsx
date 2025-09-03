"use client";
import { ContactData } from "@/constant/constant";
import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Error sending message!");
      console.error(error);
    }
  };

  return (
    <div id="contact" className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals
          </p>
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                {ContactData.phoneId}
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                {ContactData.email}
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                {ContactData.location}
              </p>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex items-center mt-8 space-x-3">
            <a
              href={ContactData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300"
            >
              <FaFacebook className="text-white w-6 h-6" />
            </a>
            <a
              href={ContactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-green-800 transition-all duration-300"
            >
              <GrGithub className="text-white w-6 h-6" />
            </a>
            <a
              href={ContactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-yellow-800 transition-all duration-300"
            >
              <LiaLinkedin className="text-white w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
        >
          {submitted ? (
            <div className="p-6 bg-green-600 text-white rounded-md text-center">
              <h2 className="text-xl font-semibold">✅ Thank you!</h2>
              <p className="mt-2">Your message has been sent successfully.</p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/mdklwvob"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
              ></textarea>
              <button className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

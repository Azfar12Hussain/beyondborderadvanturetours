"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen">
      {/* ===== Hero Section ===== */}
      <div
        className="h-[40vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('asset/favorite/k2.jpeg')",
        }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
          Contact Us
        </h1>
      </div>

      {/* ===== Map Section ===== */}
      <div className="w-full bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <iframe
            className="w-full h-[300px] md:h-[400px] rounded-lg shadow-md"
            src="https://www.google.com/maps?q=Gilgit%20Baltistan&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* ===== Contact Info + Form Section ===== */}
      <div className="w-full bg-gradient-to-r from-[#6d6b8c] to-[#c47a63] py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

          {/* ===== Left Info ===== */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Get In Touch</h2>

            <div>
              <p className="font-semibold">Islamabad Office</p>
              <p>khalifa heights 4th floor D1 Committi Chowk</p>
              <p>📞 923456564307</p>
              <p>✉️ beyondborderstoure@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold">Hunza-Nagar Office</p>
              <p>Shahrah-e-Nagar office Hotel Cherry Garden Gilgit, Pakistan.</p>
              <p>📞 923135235207</p>
              <p>✉️ beyondbordersadventuretours@gmail.com</p>
            </div>

            
          </div>

          {/* ===== Contact Form ===== */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-black">
            <form
              method="POST"
              action="https://formsubmit.co/beyondbordersadventuretours@gmail.com"
              className="space-y-4"
            >
              {/* Optional FormSubmit settings */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

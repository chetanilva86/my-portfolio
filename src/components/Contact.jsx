
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import twitterLogo from "../assets/twitter-logo3.webp";

// EmailJS Configuration
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Validate configuration
    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS configuration:", {
        serviceID: Boolean(serviceID),
        templateID: Boolean(templateID),
        publicKey: Boolean(publicKey),
      });

      setStatus("error");
      return;
    }

    try {
      console.log("Sending email...");

      const response = await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        {
          publicKey: publicKey,
        }
      );

      console.log("Email sent successfully:", response.status, response.text);

      setStatus("success");
      formRef.current.reset();

    } catch (error) {
      console.error("========== EMAILJS ERROR ==========");
      console.error("Status:", error.status);
      console.error("Message:", error.text);
      console.error("Full error:", error);
      console.error("===================================");

      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-2 py-16 sm:py-24 md:py-32 lg:py-40 px-2 flex justify-center"
    >
      <div className="glass-effect w-full max-w-6xl rounded-3xl border border-white/10 p-5 sm:p-6 md:p-10">

        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* Left Section */}
          <div className="lg:w-2/5">

            <h2 className="text-4xl font-bold mb-4">
              Let's Connect
            </h2>

            <p className="text-gray-400 leading-7 mb-10">
              Have a project in mind or just want to say hello?
              Feel free to send me a message. I'm always open
              to discussing new opportunities.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-5 flex-wrap">

              <a
                href="https://github.com/chetanilva86"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
              >
                <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/chetan-ilva-6ab801351/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" />
              </a>

              <a
                href="https://x.com/ChetanIlve76920"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:-translate-y-1 transition-all duration-300"
              >
                <img src={twitterLogo} alt="X" className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/ch_etan5419/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-pink-500 hover:-translate-y-1 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#instagramGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient
                      id="instagramGradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FFDC80" />
                      <stop offset="50%" stopColor="#E1306C" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>

                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="18"
                    cy="6"
                    r="1"
                    fill="#E1306C"
                    stroke="none"
                  />
                </svg>
              </a>

            </div>

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className="mt-10 inline-block px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
            >
              Download CV
            </a>

          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:w-3/5">

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-transparent border border-gray-600 rounded-xl px-5 py-3 outline-none focus:border-blue-500 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-transparent border border-gray-600 rounded-xl px-5 py-3 outline-none focus:border-blue-500 transition"
              />

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="w-full bg-transparent border border-gray-600 rounded-xl px-5 py-3 outline-none focus:border-blue-500 transition"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="w-full bg-transparent border border-gray-600 rounded-xl px-5 py-3 outline-none resize-none focus:border-blue-500 transition"
              />

              {status === "success" && (
                <p className="text-green-400 text-sm">
                  ✓ Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  ✗ Something went wrong. Check browser console.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

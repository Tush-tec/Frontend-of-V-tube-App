import React from "react";
import { useSpring, animated } from "@react-spring/web";

const ContactPage = () => {
  const fadeInStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });

  const slideUpStyles = useSpring({
    from: { transform: "translateY(50%)", opacity: 0 },
    to: { transform: "translateY(0%)", opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen py-10 px-5" style={{ backgroundColor: "#43565A" }}>
      {/* Header Section */}
      <animated.div style={fadeInStyles} className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We'd love to hear from you! Connect with us through the links below
          or drop us a message anytime.
        </p>
      </animated.div>

      {/* Contact Links */}
      <animated.div
        style={slideUpStyles}
        className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold mb-6" style={{ color: "#43565A" }}>
          Stay Connected
        </h2>
        <div className="flex flex-col gap-4">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/tushar-thakur-5a66a522b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg max-w-xs mx-auto"
          >
            LinkedIn Profile
          </a>
          {/* GitHub Link */}
          <a
            href="https://github.com/Tush-tec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-900 transition-all duration-300 shadow-lg max-w-xs mx-auto"
          >
            GitHub Profile
          </a>
        </div>
      </animated.div>

      {/* Animation Section */}
      <div className="mt-12 flex justify-center">
        <animated.div
          style={fadeInStyles}
          className="w-16 h-16 rounded-full bg-[#000000] shadow-lg flex items-center justify-center animate-bounce"
        >
          <p className="text-white font-bold">V-Tube</p>
        </animated.div>
      </div>
    </div>
  );
};

export default ContactPage;

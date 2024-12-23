import React from "react";
import { useSpring, animated } from "@react-spring/web";

const AboutPage = () => {
  const fadeInStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });

  const slideInStyles = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen py-10 px-5" style={{ backgroundColor: "#43565A" }}>
      {/* Header Section */}
      <animated.div style={fadeInStyles} className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">About V-Tube</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          V-Tube is your ultimate video streaming platform, built with
          cutting-edge technology and designed to deliver seamless user
          experiences for both content creators and viewers.
        </p>
      </animated.div>

      {/* Content Section */}
      <animated.div
        style={slideInStyles}
        className="shadow-lg rounded-lg p-6 max-w-4xl mx-auto"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="text-2xl font-semibold mb-4" style={{ color: "#43565A" }}>
          Our Mission
        </h2>
        <p className="text-black text-justify mb-6">
          V-Tube aims to connect people through video content. Whether you are
          an aspiring creator, a professional filmmaker, or simply someone who
          loves consuming high-quality videos, V-Tube is the place for you. Our
          mission is to empower creators with tools and opportunities to share
          their vision with the world while providing users a platform that is
          simple to use and highly engaging.
        </p>

        <h2 className="text-2xl font-semibold mb-4" style={{ color: "#43565A" }}>
          Why Choose V-Tube?
        </h2>
        <p className="text-black text-justify mb-6">
          We offer features such as high-definition streaming, seamless video
          uploading, and powerful tools for creators. With a focus on
          accessibility and innovation, we ensure that everyone, regardless of
          their technical skill level, can participate in the video revolution.
          Our platform is built using the latest technologies, ensuring smooth
          performance across all devices.
        </p>

        <h2 className="text-2xl font-semibold mb-4" style={{ color: "#43565A" }}>
          Our Story
        </h2>
        <p className="text-black text-justify mb-6">
          The idea for V-Tube started as a small project to bring together
          creators and viewers in a meaningful way. With a small team of
          dedicated developers, we built V-Tube from scratch, focusing on
          delivering high-quality features and an intuitive interface. Today,
          we are proud to have grown into a vibrant community where creativity
          knows no bounds.
        </p>

        <h2 className="text-2xl font-semibold mb-4" style={{ color: "#43565A" }}>
          Join Us
        </h2>
        <p className="text-black text-justify">
          We invite you to be part of our growing community. Whether you’re
          here to share your story, showcase your skills, or explore inspiring
          content, V-Tube is your platform. Thank you for joining us on this
          journey. Together, let’s shape the future of video streaming!
        </p>
      </animated.div>

      {/* Animation Section */}
      <div className="mt-12 flex justify-center">
        <animated.div
          style={fadeInStyles}
          className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center animate-bounce"
          style={{ backgroundColor: "#000000" }}
        >
          <p className="text-white  font-bold">V-Tube</p>
        </animated.div>
      </div>
    </div>
  );
};

export default AboutPage;

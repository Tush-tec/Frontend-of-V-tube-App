import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Animation for the header text
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  // Animation for the cards
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 800 },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <header className="text-center py-12">
        <animated.h1
          style={headerAnimation}
          className="text-5xl font-bold mb-4"
        >
          Welcome to V-Tube!
        </animated.h1>
        <animated.p style={headerAnimation} className="text-xl">
          Your ultimate video platform to explore, share, and enjoy content.
        </animated.p>
      </header>

      <main className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <animated.div
            style={cardAnimation}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">About V-Tube</h3>
              <p>
                V-Tube is a modern video streaming platform where you can
                explore and share videos effortlessly. Built with cutting-edge
                technologies for a seamless experience.
              </p>
              <Link
                to="/about"
                className="mt-4 inline-block text-blue-600 underline"
              >
                Learn More
              </Link>
            </div>
          </animated.div>

          {/* Card 2 */}
          <animated.div
            style={cardAnimation}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Features</h3>
              <p>
                 High-quality video playback
                <br /> User-friendly interface
                <br /> Advanced search and filtering
              </p>
              <Link
                to="/features"
                className="mt-4 inline-block text-blue-600 underline"
              >
                Explore Features
              </Link>
            </div>
          </animated.div>

          {/* Card 3 */}
          <animated.div
            style={cardAnimation}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Get Started</h3>
              <p>
                Join our community to upload, view, and interact with videos
                like never before. Start your journey with V-Tube now!
              </p>
              <Link
                to="/sign-up"
                className="mt-4 inline-block text-blue-600 underline"
              >
                Sign Up
              </Link>
            </div>
          </animated.div>
        </div>
      </main>

      <footer className="text-center py-6">
        <p>© {new Date().getFullYear()} V-Tube. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

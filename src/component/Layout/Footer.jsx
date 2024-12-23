import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#DEDEDE] relative z-50 bg-white px-8 pb-6 pt-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12">
              <h4 className="block tracking-normal text-2xl font-semibold leading-snug mb-2 text-gray-800">
                V-tube
              </h4>
              <p className="block text-md mb-2 mt-0 text-gray-600">
              Your ultimate destination for exciting video content. Explore, enjoy, and create amazing videos with us!
              </p>
              <div className="mt-6">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fab fa-twitter font-xl inline-block items-center justify-center rounded-full border-2 border-gray-200 p-3 text-center text-blue-500 hover:text-blue-700 transition-colors"
                ></a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fab fa-facebook-square font-xl inline-block items-center justify-center rounded-full border-2 border-gray-200 p-3 text-center text-blue-500 hover:text-blue-700 transition-colors"
                ></a>
                <a
                  href="https://www.dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fab fa-dribbble font-xl inline-block items-center justify-center rounded-full border-2 border-gray-200 p-3 text-center text-pink-500 hover:text-pink-700 transition-colors"
                ></a>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fab fa-github font-xl inline-block items-center justify-center rounded-full border-2 border-gray-200 p-3 text-center text-gray-800 hover:text-gray-600 transition-colors"
                ></a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fab fa-discord font-xl inline-block items-center justify-center rounded-full border-2 border-gray-200 p-3 text-center text-blue-600 hover:text-blue-800 transition-colors"
                ></a>
              </div>
            </div>
            <div className="ml-auto w-full px-4 md:w-7/12">
              <div className="flex flex-wrap mb-6">
                <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-primary">
                    Company
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://www.creative-tim.com"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.creative-tim.com/blog"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.creative-tim.com/templates/free"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-primary">
                    Help and Support
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://www.creative-tim.com/knowledge-center"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Knowledge Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.creative-tim.com/contact-us"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.creative-tim.com/support-terms"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Premium Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pricing"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-primary">
                    Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="/docs/installation"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.creative-tim.com/services/updivision"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Custom Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.com"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Discord
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcomponents.com"
                        target="_blank"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Tailwind Components
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <span className="text-md mb-4 block font-medium text-primary">
                    Technologies
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="/docs/react/installation"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs/html/installation"
                        className="block pb-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        HTML
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200" />
          <div className="flex flex-wrap items-center justify-center gap-2 text-center md:justify-between">
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-primary no-underline"
            >
              <span className="mr-1">Powered by</span>
              <span>Vercel</span>
            </a>
            <div className="text-md mt-2 py-1 text-gray-600">
              Copyright © 2024{" "}
              <a href="/" className="text-inherit hover:text-primary">
                V-Tube
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com"
                target="_blank"
                rel="noreferrer"
                className="text-inherit hover:text-primary"
              >
                Creative Tim. Made with ❤️ for a better Video Streming.
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

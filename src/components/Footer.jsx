import React from "react";

function Footer() {
  return (
    <footer className="bg-green text-white py-12">
      <div className="container max-w-[1320px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-medium text-xs leading-[13px] mb-4">HOW WE HELP</h3>
          <ul className="space-y-2">
            <li className="font-maisonLight text-custom-xs leading-[30px]">Drive More Awareness</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Get More Customers</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Build Your Brand</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Improve Your Reputation</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Track Results</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xs leading-[13px]">WHO WE HELP</h3>
          <ul className="space-y-2">
            <li className="font-maisonLight text-custom-xs leading-[30px]">Digital Advertising</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Search Engine Ranking</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Content Marketing</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Programmatic Advertising</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Email Marketing</li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-4 text-xs leading-[13px]">WHY VENVEO</h3>
          <ul className="space-y-2">
            <li className="font-maisonLight text-custom-xs leading-[30px]">About Us</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Careers</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Growth Studies</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Testimonials</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xs leading-[13px]">RESOURCES</h3>
          <ul className="space-y-2">
            <li className="font-maisonLight text-custom-xs leading-[30px]">Articles</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">News</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Webinars</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">EBooks</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Podcast</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="mb-4 text-3xl font-maisonLight">Get weekly data — and insights.</h3>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-l-lg text-gray-700 w-full md:w-auto"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-r-lg mt-2 md:mt-0 md:ml-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="row flex flex-wrap justify-center sm:flex-col-reverse">
        {/* Logo and Description Section */}
        <div className="lg:w-4/12 md:pt-20 pt-9 text-center mx-auto">
          <a href="#">
            <img
              src="/assets/images/footerlogo.png"
              alt="logo"
              className="max-sm:flex max-sm:mx-auto"
            />
          </a>
          <p className="max-w-[315px] text-sm text-white pt-5 font-normal leading-5 hover:text-light-green">
            Venveo is an award-winning digital marketing solutions provider. Since
            2003. ©2023 Venveo
          </p>
        </div>

        {/* Visit and Contact Section */}
        <div className="lg:w-4/12 flex md:gap-14 gap-7 md:pt-28 pt-16 max-md:flex-col text-center mx-auto">
          <div className="flex flex-col">
            <p className="text-white text-xs font-medium leading-3 hover:text-light-green">
              VISIT
            </p>
            <p className="text-sm text-white max-w-[228px] pt-8 font-normal leading-5 hover:text-light-green">
              100 N Main Street
              <span className="block hover:text-light-green">#201</span>
              Blacksburg, VA 24060
            </p>
          </div>
          <div className="flex flex-col text-center mx-auto">
            <p className="text-white text-xs hover:text-light-green font-medium leading-3">
              CONTACT
            </p>
            <p className="text-sm text-white pt-8 hover:text-light-green font-normal leading-5">
              info@venveo.com
            </p>
            <p className="text-sm text-white pt-5 hover:text-light-green font-normal leading-5">
              1·800·123·4567
            </p>
          </div>
        </div>

        {/* Links and Social Media Section */}
        <div className="lg:w-4/12 md:pt-28 pt-8 flex justify-center hidden md:flex">
          <div>
            <div className="gap-8 flex">
              <p className="text-white text-sm font-medium leading-5 hover:text-light-green">
                All Rights Reserved
              </p>
              <p className="text-white text-sm font-medium leading-5 hover:text-light-green">
                Privacy Policy
              </p>
            </div>
            <div className="flex gap-9 items-center pt-8">
              {[
                { href: "https://www.facebook.com/", icon: "/path-to-facebook-icon" },
                { href: "https://www.instagram.com/", icon: "/path-to-instagram-icon" },
                { href: "https://www.x.com/", icon: "/path-to-x-icon" },
                { href: "https://www.linkedin.com/", icon: "/path-to-linkedin-icon" },
                { href: "https://www.youtube.com/", icon: "/path-to-youtube-icon" },
              ].map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon} alt={`social-icon-${index}`} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Small Screens Links */}
        <div className="lg:w-4/12 md:pt-28 pt-16 md:hidden flex mx-auto items-center justify-center flex-col">
          <div className="gap-8 flex">
            <p className="text-white text-sm font-medium leading-5">All Rights Reserved</p>
            <p className="text-white text-sm font-medium leading-5">Privacy Policy</p>
          </div>
        </div>
      </div>

      
    </footer>
  );
}

export default Footer;

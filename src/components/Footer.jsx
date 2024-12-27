import React from "react";

function Footer() {
  return (
    <footer className="bg-green text-white pt-[90px] pb-[104px]">
      <div className="container max-w-[1340px] mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 max-sm:gap-4">
        <div className="max-sm:pb-16">
          <h3 className="font-medium text-xs leading-[13px] mb-4 max-sm:text-yellow ">HOW WE HELP</h3>
          <ul className="space-y-2">
            <li className="font-maisonLight text-custom-xs leading-[30px]">Drive More Awareness</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Get More Customers</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Build Your Brand</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Improve Your Reputation</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Track Results</li>
          </ul>
        </div>
        <div className="xl:-ml-[20px] max-sm:pb-16">
          <h3 className="font-medium mb-4 text-xs leading-[13px] max-sm:text-yellow ">WHO WE HELP</h3>
          <ul className="space-y-2">
            <li className="font-maisonLight text-custom-xs leading-[30px]">Digital Advertising</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Search Engine Ranking</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Content Marketing</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Programmatic Advertising</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Email Marketing</li>
          </ul>
        </div>
        <div className="xl:-ml-[20px] max-sm:pb-16">
          <h3 className="font-medium mb-4 text-xs leading-[13px] max-sm:text-yellow ">WHY VENVEO</h3>
          <ul className="space-y-2">
            <li className="font-maisonLight text-custom-xs leading-[30px]">About Us</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Careers</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Growth Studies</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Testimonials</li>
          </ul>
        </div>

        <div className="xl:-ml-[90px] max-sm:pb-16 max-lg:pt-10">
          <h3 className="font-medium mb-4 text-xs leading-[13px] max-sm:text-yellow ">RESOURCES</h3>
          <ul className="space-y-2">
            <li className="font-maisonLight text-custom-xs leading-[30px]">Articles</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">News</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Webinars</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">EBooks</li>
            <li className="font-maisonLight text-custom-xs leading-[30px]">Podcast</li>
          </ul>
        </div>

        <div className="text-center md:text-left xl:-ml-[195px]  max-xl:pt-10">
          <h3 className="mb-4 text-3xl font-maisonLight">Get weekly data — and insights.</h3>
          <form className="border-2 border-white mt-[30px] text-white rounded-[50px] text-center py-4 sm:py-5 px-7 flex max-w-[448px] sm:mx-auto mx-5 justify-between">
            <input
              id="email"
              type="text"
              placeholder="Enter Your Website"
              className="bg-transparent outline-none placeholder:text-lightgray text-custom-xs font-normal leading-5 font-maisonLight "
              aria-label="Enter your website"
              required
            />
            <button
              className="text-white text-custom-xs leading-5 font-semibold text-center">
              Analyze
            </button>
          </form>
        </div>
      </div>
      <div className="container pt-20 max-w-[1320px] mx-auto flex flex-wrap justify-between items-center text-center sm:text-left px-4">
        <div className="sm:w-1/3 w-full mb-6 sm:mb-0">
          <a href="#">
            <img
              src="./assets/images/png/footer-logo.png" 
              alt="Venveo Logo"
              className="mx-auto sm:mx-0 mb-[22px] max-w-[44.8px]"
            />
          </a>
          <p className="text-custom-sx leading-[20px] max-w-[315px]">
            Venveo is an award-winning digital marketing solutions provider.
            ©2024 Venveo
          </p>
          <p className="text-custom-sx leading-[20px] ">©2024 Venveo</p>
        </div>
        <div className="sm:w-1/3 w-full flex justify-around sm:justify-between">

          <div className="text-sm">
            <p className="font-medium text-xs leading-[13px]">VISIT</p>
            <p className="mt-2 text-custom-sx leading-[20px]">
              100 N Main Street
              <br />
              #201
              <br />
              Blacksburg, VA 24060
            </p>
          </div>

          <div className="text-sm">
            <p className="font-medium">CONTACT</p>
            <p className="mt-2 text-custom-sx leading-[20px]">info@venveo.com</p>
            <p className="pt-[21px] text-custom-sx leading-[20px]">1 · 800 · 123 · 4567</p>
          </div>
        </div>

        <div className="sm:w-1/3 w-full mt-6 sm:mt-0">
          <div className="flex justify-center sm:justify-end space-x-4">
            <a href="#" className="hover:text-light-green text-custom-sx">
              All Rights Reserved
            </a>
            <a href="#" className="hover:text-light-green text-custom-sx">
              Privacy Policy
            </a>
          </div>
          <div className="flex justify-center sm:justify-end space-x-[34px] pt-[31px]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="./assets/images/svg/facebook.svg" alt="Facebook" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="./assets/images/svg/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="./assets/images/svg/twitter.svg" alt="Twitter" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="./assets/images/svg/linkdin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="./assets/images/svg/youtube.svg" alt="YouTube" className="w-6 h-6 hover:scale-125 transition-all duration-700" />
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;

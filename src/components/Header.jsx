import React, { useState } from "react";
import { DROPDOWN_LIST } from "./utils/helper";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <header>
            <nav className="h-[80px] max-w-[1440px] mx-auto">
                <div className="flex justify-between items-center max-lg:px-4 md:pl-14 lg:-mt-7">
                    <a href="/"><img
                        src="./assets/png/header-logo.png"
                        alt="venveo-logo-img"
                        className="w-[59px] max-sm:w-[42px] md:h-[90px] mt-12 max-md:mt-8"
                    /></a>
                    <button
                        className="flex flex-col gap-2 cursor-pointer lg:hidden relative z-20"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span
                            className={`w-9 h-[2px] bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`w-9 h-[2px] bg-white transition-transform ${isMenuOpen ? "-rotate-45 " : ""
                                }`}
                        ></span>
                    </button>
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"
                            } absolute top-0 left-0 w-full transition-all duration-500 bg-white max-lg:bg-sky-300 shadow-lg lg:flex lg:-top-full max-lg:fixed lg:static lg:w-auto  items-center max-lg:min-h-screen  z-10`}
                    >
                        <div className="flex !pl-[41px] flex-col !text-base lg:flex-row gap-[42px] py-6 md:py-0 md:pl-0 items-center max-lg:justify-center max-lg:min-h-screen">
                            {DROPDOWN_LIST.map((menu, index) => (
                                <div key={index} className="relative dropdown">
                                    <a
                                        href="#"
                                        className="text-custom-xs font-medium hover:text-yellow-500"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        {menu.title} <span className="text-custom-xxs ">▼</span>
                                    </a>
                                    <div className={`absolute ${openDropdown === index ? "block" : "hidden"} dropdown-content bg-white shadow-lg py-4 px-6 mt-2 z-10`}>
                                        {menu.links.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href="#"
                                                className="block text-base font-bold text-gray-700 hover:text-yellow-500 mb-2"
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <img className="cursor-pointer" src="./assets/svg/search.svg" alt="search" />
                            <div className=" bg-lightgreen hover:bg-green flex lg:py-8 py-4 px-[31px] lg:h-[81px] ">
                                <a
                                    href="#"
                                    className="text-custom-xs font-medium leading-custom-xl flex">
                                    Let’s Talk <span><img className="mt-2 ml-1" src="./assets/svg/talk.svg" alt="arrow" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

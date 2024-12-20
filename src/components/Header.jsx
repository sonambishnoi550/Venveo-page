import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = (event) => {
        const dropdown = event.currentTarget.nextElementSibling;
        dropdown.classList.toggle("hidden");
    };

    return (
        <header>
            <nav className="h-[80px] 2xl:container">
                <div className="flex justify-between items-center max-lg:px-4 md:pl-14 lg:-mt-5">
                    <img
                        src="./assets/png/header-logo.png"
                        alt="venveo-logo-img"
                        className="w-[59px] max-sm:w-[42px] md:h-[90px] mt-7"
                    />
                    <button
                        className="flex flex-col gap-1 cursor-pointer lg:hidden relative z-20"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span
                            className={`w-9 h-1 bg-red-500 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`w-9 h-1 bg-red-500 transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"
                                }`}
                        ></span>
                        <span
                            className={`w-9 h-1 bg-red-500 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </button>
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"
                            } absolute top-0 left-0 w-full bg-white shadow-lg lg:flex  max-lg:fixed lg:static lg:w-auto  items-center max-lg:min-h-screen  z-10`}
                    >
                        <div className="flex !pl-[41px] flex-col lg:flex-row gap-[42px] py-6 md:py-0 md:pl-0 items-center max-lg:justify-center max-lg:min-h-screen">
                            {[
                                {
                                    title: "How We Help",
                                    links: [
                                        "Drive More Awareness",
                                        "Get More Customers",
                                        "Build Your Brand",
                                    ],
                                },
                                {
                                    title: "Who We Help",
                                    links: [
                                        "B2B",
                                        "Dealers & Distributors",
                                        "Manufacturing & Industrial",
                                    ],
                                },
                                {
                                    title: "Why Venveo",
                                    links: ["Who We Are", "Results", "Our Approach"],
                                },
                                {
                                    title: "Resources",
                                    links: ["Blog", "Case Studies", "Webinars"],
                                },
                            ].map((menu, index) => (
                                <div key={index} className="relative dropdown">
                                    <a
                                        href="#"
                                        className="text-custom-xs font-medium hover:text-yellow-500"
                                        onClick={toggleDropdown}
                                    >
                                        {menu.title} <span className="text-custom-xxs ">▼</span>
                                    </a>
                                    <div className="absolute hidden dropdown-content bg-white shadow-lg py-4 px-6 mt-2 z-10">
                                        {menu.links.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href="#"
                                                className="block text-sm text-gray-700 hover:text-yellow-500 mb-2"
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <img src="./assets/svg/search.svg" alt="search" />
                            <div className=" bg-lightgreen flex py-8 px-[31px] h-[81px]">
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

import React from "react";

const LearnFrom = () => {
    return (
        <div className="relative sm:pt-20 pt-8 pb-16">
            <img
                src="./assets/images/png/digital-bg.png"
                alt="Background"
                className="absolute top-[40%] max-sm:hidden block"
            />
            <div className="md:container max-w-[1322px]">
                <h2 className="text-custom-7xl font-bold leading-none text-center uppercase font-sohne pb-[13px] max-md:text-6xl">
                    Learn from us.
                </h2>
                <p className="text-custom-xs font-normal leading-none text-center sm:pb-9 pb-[33px] font-maisonMono">
                    Digital marketing resources from Venveo to help you grow.
                </p>
                <a
                    href="#"
                    className="text-xmd font-semibold leading-none text-center flex justify-center lg:pb-20 pb-10 mainson_Neue"
                >
                    See All
                    <svg
                        className="ml-2"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                    </svg>
                </a>
                <img
                    src="./assets/images/png/learn-image.png"
                    alt="Section Background"
                    className="relative md:block hidden"
                />
                <img className="relative max-md:block hidden" src="./assets/images/png/mobile-learn.png" alt="learn" />
               
                <div className="bg-white pt-[35px] pb-[31px] px-7 absolute bottom-[10%] left-[15%] max-md:left-[5%] rounded-[25px] max-lg:pt-[30px] max-lg:pb-[26px] max-lg:px-[26px] max-lg:max-w-[339px]">
                    <p className="text-custom-xs font-semibold leading-none text-left text-sky pb-4 mainson_Neue uppercase">
                        Guides
                    </p>
                    <p className="font-light text-3xl leading-none text-left mainson_Neue max-w-[325px] max-lg:text-2xl max-lg:max-w-[290px]">
                        Marketing to Contractors and Installers: The Ultimate Guide
                    </p>
                    <p className="text-xmd text-custom-xs font-normal leading-none text-left pt-4 font-maisonMono max-w-[315px]">
                        Understanding the process and maximize the opportunities
                    </p>
                    <a href="#" className="flex items-center pt-4 mainson_Neue text-custom-xs">
                        Learn More
                        <svg
                            className="ml-2"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LearnFrom;

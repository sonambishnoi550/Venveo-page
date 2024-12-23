import React from 'react';

const Client = () => {
    return (
        <section className="pt-1">
            <div className="max-w-[1440px] max-xl:container mx-auto">
                <h2 className="text-3xl max-sm:text-2xl font-light text-center leading-8 sm:pt-24 pt-9">
                    Driving digital revenue for over
                </h2>
                <h2 className="text-custom-7xl max-md:text-6xl text-center leading-[70px] font-bold pt-2 sohne uppercase max-sm:pb-12">
                    1,400+ satisfied clients.
                </h2>
                <img className='sm:pb-20 pb-12 pl-[400px] max-xl:pl-[197px] max-lg:pl-[97px] max-sm:hidden' src="./assets/images/svg/red-line.svg" alt="line" />

                <div className="flex justify-between flex-wrap max-xl:justify-center max-xl:gap-10">
                    <div style={{ backgroundImage: `url(./assets/images/png/client-card-one.png)` }}
                        className="bg-center bg-no-repeat bg-cover max-w-[440px] px-7 min-h-[500px] h-full relative" >
                        <button
                            className="text-xs font-semibold text-white bg-black rounded-[1000px] pl-3 pr-12 py-[7px] absolute top-[3%] left-[13%] leading-5"
                        > Education Company </button>
                        <div className="bg-white mt-[35px] px-[29px] pb-[31px] rounded-[25px]">
                            <img src="./assets/images/png/amber-book.png" alt="Amber-Book" className="pt-9 max-w-[131px] pointer-events-none" />
                            <p className="max-w-80 text-3xl py-6 font-light max-sm:text-2xl">
                                Driving digital revenue for over 1,000+ satisfied clients.
                            </p>
                            <p className="text-custom-xs max-w-[315px] leading-5 font-normal max-sm:text-custom-xs">
                                Elevate your business with our top-tier services and tech.
                            </p>
                            <a
                                href="#"
                                className="relative pt-[56px] inline-block font-semibold text-custom-xs text-black pb-0.5 after:absolute after:left-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bottom-0 after:h-0.5 after:bg-green"
                            >
                                Learn More
                                <svg
                                    className="ml-2 hover:fill-green transition-all duration-300 inline-block"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 5.00343L0 0V10L10 5.00343Z"
                                        className="fill-current"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="flex gap-9 pt-3 pb-8 pl-4">
                            <div>
                                <p className="text-black leading-10 text-custom-4xl max-sm:text-custom-3xl font-bold sohne">80%</p>
                                <p className="text-black leading-4 text-custom-xs font-light pt-1">Leads</p>
                            </div>
                            <div>
                                <p className="text-black leading-10 text-custom-4xl max-sm:text-custom-3xl font-bold sohne">2X</p>
                                <p className="text-black leading-4 text-custom-xs font-light pt-1 whitespace-nowrap">Ad Leads</p>
                            </div>
                            <div>
                                <p className="text-black leading-10 text-custom-4xl max-sm:text-custom-3xl font-bold sohne">520%</p>
                                <p className="text-black leading-4 text-custom-xs font-light pt-1">Web Traffic</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(./assets/images/png/client-card-two.png)` }}
                        className="bg-center bg-no-repeat bg-cover max-w-[440px] px-7 min-h-[500px] h-full relative">
                        <p className="text-custom-xs text-black z-[2] font-semibold absolute top-[5%] left-[15%]" >
                            HVAC Marketing </p>
                        <div className="bg-white mt-[35px]  px-[29px] pb-[31px] rounded-[25px]">
                            <img src="./assets/images/png/farnswort.png" alt="Farnsworth" className="pt-9 max-w-[149.73px] pointer-events-none" />
                            <p className="max-w-80 text-3xl py-6 max-sm:text-2xl font-light">
                                Driving digital revenue for over 1,000+ satisfied clients.
                            </p>
                            <p className="text-custom-xs max-w-[315px] leading-5 font-normal ">
                                Elevate your business with our top-tier services and tech.
                            </p>
                            <a
                                href="#"
                                className="relative pt-[56px] inline-block font-semibold text-custom-xs text-black pb-0.5 after:absolute after:left-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bottom-0 after:h-0.5 after:bg-green"
                            >
                                Learn More
                                <svg
                                    className="ml-2 hover:fill-green transition-all duration-300 inline-block"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 5.00343L0 0V10L10 5.00343Z"
                                        className="fill-current"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="flex gap-9 pt-3 pb-8 pl-4">
                            <div>
                                <p className="text-black leading-10 text-custom-4xl max-sm:text-custom-3xl font-bold sohne">80%</p>
                                <p className="text-black leading-4 text-custom-xs font-light pt-1">Leads</p>
                            </div>
                            <div>
                                <p className="text-black leading-10 text-custom-4xl max-sm:text-custom-3xl font-bold sohne">2X</p>
                                <p className="text-black leading-4 text-custom-xs font-light pt-1 whitespace-nowrap">Ad Leads</p>
                            </div>
                            <div>
                                <p className="text-black leading-10 text-custom-4xl max-sm:text-custom-3xl font-bold sohne">520%</p>
                                <p className="text-black leading-4 text-custom-xs font-light pt-1 whitespace-nowrap">Web Traffic</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(./assets/images/png/client-card-three.png)` }}
                        className="bg-center bg-no-repeat bg-cover max-w-[440px] px-[29px] min-h-[500px] h-full relative"
                    >

                        <div className="bg-white mt-[35px] px-[29px] pb-[31px] rounded-[25px]">
                            <img src="./assets/images/png/us.png" alt="Farnsworth" className="pt-9 max-w-[49px] pointer-events-none" />
                            <p className="max-w-80 text-3xl py-6 max-sm:text-2xl font-light">
                                Driving digital revenue for over 1,000+ satisfied clients.
                            </p>
                            <p className="text-custom-xs max-w-[315px] leading-5 font-normal">
                                Elevate your business with our top-tier services and tech.
                            </p>
                            <a
                                href="#"
                                className="relative pt-[56px] inline-block font-semibold text-custom-xs text-black pb-0.5 after:absolute after:left-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bottom-0 after:h-0.5 after:bg-green"
                            >
                                Learn More
                                <svg
                                    className="ml-2 hover:fill-green transition-all duration-300 inline-block"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 5.00343L0 0V10L10 5.00343Z"
                                        className="fill-current"
                                    />
                                </svg>
                            </a>



                        </div>
                        <div className="flex gap-9 pt-[13px] pb-[33px] pl-4">
                            <div>
                                <p className="text-black leading-10 text-custom-4xl max-sm:text-custom-3xl font-bold sohne">80%</p>
                                <p className="text-black leading-4 text-custom-xs font-light pt-1">Leads</p>
                            </div>
                            <div>
                                <p className="text-black leading-10 text-custom-4xl max-sm:text-custom-3xl font-bold sohne">2X</p>
                                <p className="text-black leading-4 text-custom-xs font-light pt-1">Ad Leads</p>
                            </div>
                            <div>
                                <p className="text-black leading-10 text-custom-4xl max-sm:text-custom-3xl font-bold sohne">520%</p>
                                <p className="text-black leading-4 text-custom-xs font-light pt-1">Web Traffic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;

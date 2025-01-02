import React, { useState, useEffect } from 'react';
import { CARD_LIST } from "../utils/helper";
const MarketingSection = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const cardsToShow = isMobile && !showAll ? CARD_LIST.slice(0, 1) : CARD_LIST;
    return (
        <div className="xl:pt-[132px] pt-24 relative max-xl:min-h-screen max-sm:pt-[65px]">
            <img
                src="./assets/images/webp/digital-bg.webp"
                alt="Background"
                className="absolute top-[32rem] max-lg:top-[28rem] max-sm:top-[23rem] w-full pointer-events-none"
            />
            <div className="container max-w-[1140px] mx-auto">
                <p className="text-3xl max-sm:text-2xl font-light leading-8 text-center font-maisonLight">
                    Problems we solve.
                </p>
                <h2 className="text-custom-7xl font-bold leading-[70px] max-w-[554px] max-sm:text-custom-5xl max-sm:leading-[52px] text-center mx-auto pt-[5px] uppercase font-sohne">
                    Digital Marketing for today's Business
                </h2>
                <p className="text-custom-xs font-normal leading-5 text-center max-w-[641px] mx-auto pt-[22px] max-sm:pt-5 lg:pb-20 pb-14 font-maisonMono">
                    We help companies scale their strategies across multiple channels to
                    drive more revenue, more quickly, without cutting corners.
                </p>
                <div className="lg:flex flex-wrap">
                    {cardsToShow.map((card) => (
                        <div key={card.id} className="lg:w-6/12 w-full pb-14 max-lg:pb-8 flex justify-center">
                            <div className="flex border-2 max-w-[503px] max-xl:max-w-[447px] max-sm:p-[30px] border-sky rounded-[25px] pt-[65px] pl-[30px] pr-[60px] pb-[54px] max-sm:pt-[34px] max-sm:pb-[36px] max-lg:px-[31px] relative z-10 bg-white md:gap-6">
                                <img src={card.img} alt={card.alt} className="h-[53px] w-[53px] md:block hidden pointer-events-none" />
                                <div className="flex-col">
                                    <img src={card.img} alt={card.alt} className="max-sm:size-[38px] max-md:block hidden mb-2 pointer-events-none" />
                                    <p className="font-light text-left text-3xl max-sm:text-2xl leading-8 pb-[15px] font-maisonLight">
                                        {card.title}
                                    </p>
                                    <p className="text-custom-xs font-normal text-left pb-[15px] max-w-[315px] font-maisonMono">
                                        {card.description}
                                    </p>
                                    <ul className="max-sm:ml-3">
                                        {card.points.map((point, index) => (
                                            <li key={index} className="list-disc text-custom-xs font-semibold leading-5 text-left">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="#"
                                        className="relative pt-[15px] inline-block font-semibold text-custom-xs text-black pb-0.5 after:absolute after:left-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bottom-0 after:h-0.5 after:bg-green"
                                    >
                                        Explore SEO Services
                                        <svg
                                            className="ml-2 hover:fill-green transition-all duration-300 inline-block"
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10 5.00343L0 0V10L10 5.00343Z" className="fill-current" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {isMobile && (
                    <div className="justify-center pt-4 flex">
                        <button
                            className="font-semibold text-custom-sx leading-4"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less Solutions ▲" : "Show More Solutions  ▼"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default MarketingSection;

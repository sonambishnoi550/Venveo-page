import React from "react";
import { CARD_LIST } from "../utils/helper";
const MarketingSection = () => {
    const cards = [
        {
            id: 1,
            imgSrc: "./assets/images/svg/traffic.svg",
            imgAlt: "Website Traffic",
            title: "My website isn't getting enough traffic",
            description:
                "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
            points: [
                "Boost your presence in search results",
                "Capture targeted site traffic",
                "Turn site visitors into customers",
            ],
        },
        {
            id: 2,
            imgSrc: "./assets/images/svg/digital.svg",
            imgAlt: "Digital Ad Campaigns",
            title: "My CPL from digital ad campaigns is too high",
            description:
                "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
            points: [
                "Refine ad targeting",
                "Engage your audience where they browse online",
                "Maximize paid ad budget",
            ],
        },
        {
            id: 3,
            imgSrc: "./assets/images/svg/website.svg",
            imgAlt: "Lead Generation",
            title: "My website isn’t generating enough leads",
            description:
                "Struggling to get qualified leads in your pipeline? Turn up the dial on your lead generation with digital marketing plans, tailored to your goals and budget.",
            points: [
                "Fill up your lead pipeline",
                "Reach your most valuable audience",
                "Maximize conversion opportunities",
            ],
        },
        {
            id: 4,
            imgSrc: "./assets/images/svg/data.svg",
            imgAlt: "Disconnected Data",
            title: "My marketing and sales data is disconnected",
            description:
                "Don't let leads slip through the cracks. Unify your sales and marketing efforts with Nutshell and MarketingCloudFX, to provide end-to-end reporting and analysis of your data.",
            points: [
                "Unify sales and marketing data",
                "Prioritize leads with data-backed insights",
                "Turn opportunities into closed deals",
            ],
        },
    ];

    return (
        <section className="xl:pt-[132px] pt-24 relative min-h-screen max-sm:pt-[65px]">
            <img src="./assets/images/png/digital-bg.png" alt="Background"
                className="absolute top-[33rem] max-sm:top-[23rem] w-full pointer-events-none" />
            <div className="container max-w-[1140px] mx-auto">
                <p className="text-3xl font-light leading-8 text-center "> Problems we solve.</p>
                <h2 className="text-custom-7xl font-bold leading-[70px] max-w-[533px] max-sm:text-custom-5xl max-sm:leading-[52px] text-center mx-auto pt-[5px] uppercase sohne">
                    Digital Marketing for today's Business</h2>
                <p className="text-custom-xs font-normal leading-5 text-center max-w-[641px] mx-auto pt-[22px] max-sm:pt-5 sm:pb-20 pb-20">
                    We help companies scale their strategies across multiple channels to
                    drive more revenue, more quickly, without cutting corners.
                </p>
                <div className="lg:flex flex-wrap">
                    {CARD_LIST.map((card) => (
                        <div key={card.id}
                            className="lg:w-6/12 w-full pb-14 max-sm:pb-8 flex justify-center" >
                            <div className="flex border-2 max-w-[503px] max-xl:max-w-[447px] max-sm:p-[30px] border-sky rounded-[25px] pt-[65px] pl-[30px] pr-[60px] pb-[54px] max-sm:pt-[34px] max-sm:pb-[36px] max-sm:px-[31px] relative z-10 bg-white md:gap-6">
                                <img src={card.imgSrc} alt={card.imgAlt}
                                    className="h-[53px] w-[53px] md:block hidden pointer-events-none" />
                                <div className="flex-col">
                                    <img src={card.imgSrc} alt={card.imgAlt}
                                        className="max-sm:size-[38px] max-md:block hidden mb-2 pointer-events-none" />
                                    <p className="font-light text-left text-3xl max-sm:text-2xl leading-8 pb-[15px]">
                                        {card.title}</p>
                                    <p className="text-custom-xs font-normal text-left pb-[15px]  max-w-[315px]">
                                        {card.description} </p>
                                    <ul className="max-sm:ml-3">
                                        {card.points.map((point, index) => (
                                            <li key={index}
                                                className="list-disc text-custom-xs font-semibold leading-5 text-left">
                                                {point} </li>))}
                                    </ul>
                                    <p className="text-custom-xs font-semibold leading-5 text-left flex pt-5"> Explore SEO Services
                                        <svg className="mt-1 ml-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                            <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" /> </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketingSection;

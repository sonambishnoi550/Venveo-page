import React, { useState } from "react";
const Tab = ({ activeTab }) => {
    switch (activeTab) {
        case "tab1":
            return (
                <div style={{ backgroundImage:`url(./assets/images/png/tab-one-bg.png)`}} className="relative bg-cover !max-w-[1280px] bg-center sm:px-20 sm:py-16 px-4 py-6 bg-no-repeat">
                    <div className="lg:flex justify-between">
                        <div className="lg:w-4/12">
                            <p className="uppercase text-white text-custom-7xl sohne leading-[70px] font-bold max-sm:text-4xl">
                                The smartest minds in the industry </p>
                            <p className="text-3xl font-light text-left text-white pb-8 max-sm:pb-4 max-sm:text-2xl">
                                Answer our questions and listen to our answers.</p>
                            <p className="font-normal text-custom-xs text-left text-white pb-[98px] max-lg:pb-[57px] max-sm:text-xl">
                                This is placeholder but can add more to the business of building, some epic fails (and how to avoid them), and everything building science.
                            </p>
                            <div className="flex pb-20">
                                <a href="#" className="bg-red-500 flex px-[32px] py-[31px] text-white text-custom-xs"><img className="mr-[10px]" src="./assets/images/svg/subscribe.svg" alt="" />
                                    Subscribe to Podcast <span className="text-custom-xxs ml-1 mt-[10px]"> ▼</span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-2/12 lg:block max-lg:hidden">
                            <div className="flex lg:flex-col items-center gap-14">
                                <img src="./assets/images/png/depot.png" alt="Depot Logo" className="pb-20 max-w-[66px]" />
                                <img src="./assets/images/png/aia.png" alt="AIA Logo" className="pb-[62px] max-w-[66px]" />
                                <img src="./assets/images/png/lowes.png" alt="Lowes Logo" className="pb-12 max-w-[92px]" />
                                <img src="./assets/images/png/build.png" alt="Build Logo" className="pb-[66px] max-w-[102px]" />
                                <img src="./assets/images/png/houzz.png" alt="Houzz Logo" className="max-w-[117px]" />
                            </div>
                        </div>
                        <div className="lg:w-5/12">
                                <img src="./assets/images/png/tab-one-card.png" alt="Tab One Card" />
                        </div>
                    </div>
                </div>
            );
        case "tab2":
            return (
                <div style={{ backgroundImage: `url(./assets/images/png/tab-two-bg.png)` }} className="relative bg-cover bg-no-repeat bg-center pt-20 max-w-[1280px] h-[720px]">
                    <h2 className="text-custom-7xl font-bold leading-[70px] text-left text-white ps-20 sohne">
                        Proven Results </h2>
                    <p className="text-3xl font-light text-left text-white ps-20">
                        Not hopes and prayers. </p>
                    <div className="max-w-[293px] absolute bottom-[10%] left-[-5%]">
                        <img className="max-w-[293px]" src="./assets/images/png/tab-two-yellow-circle.png" alt="circle" />
                    </div>
                    <div className=" max-w-[189px] absolute top-[34%] right-[-5%]">
                        <img src="./assets/images/png/tab-two-green-circle.png" alt="circle" />
                    </div>
                </div>
            );
        case "tab3":
            return (
                <div style={{ backgroundImage: `url(./assets/images/png/tab-three-bg.png)` }} className="max-w-[1280px] px-[79px] pt-[75px] max-lg:pt-[45px] h-[720px] max-md:px-[32px]">
                    <div className="lg:flex justify-between">
                        <div className="lg:w-5/12">
                            <h2 className="text-custom-7xl max-md:text-5xl leading-[70px] sohne font-bold max-xl:text-6xl text-left pb-2 text-white uppercase">
                                Project Radar </h2>
                            <img src="./assets/images/png/tab-logo.png" alt="Tab Logo" className=" max-w-[72.86px]" />
                            <p className="text-3xl font-light text-left text-white leading-8 pt-28 max-sm:pt-6 pb-[14px]">
                                Lorem ipsum what this product actually does. </p>
                            <p className="text-white text-custom-xs font-normal leading-5 max-w-[360px]">This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                            <div className="flex mt-16 max-sm:mt-7 max-lg:pb-14">
                                <a href="#" className="bg-yellow text-custom-xs font-semibold text-center py-8 px-8 flex gap-[10px]">
                                    Call to Action Somewhere<img src="./assets/images/svg/call-arrow.svg" alt="arrow" /></a>
                            </div>
                        </div>
                        <div className="lg:w-5/12">
                                <img src="./assets/images/png/tab-three-card.png" alt="Tab Three Map" />
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <section className="py-14 flex justify-center">
            <div className="container max-w-[1280px] mx-auto">
                <h2 className="text-custom-7xl font-bold text-center uppercase sohne leading-[70px] max-sm:text-6xl">The Growth Partner</h2>
                <p className="text-3xl font-light text-center pb-[43px] max-sm:pb-[19px] max-sm:text-2xl">you’ve been looking for.</p>
                <p className="text-custom-xs font-normal text-center pb-[105px] max-sm:pb-[56px]">Businesses trust Venveo to power growth.</p>
                <div className="nav-tabs">
                    <div className="flex justify-center gap-20 max-sm:gap-10 pb-14 tab-list">
                        <p
                            className={`tab text-lg text-lightblack font-semibold cursor-pointer whitespace-nowrap ${activeTab === "tab1" ? "!text-black opacity-100" : ""}`}
                            onClick={() => setActiveTab("tab1")}> Industry Expertise </p>
                        <p
                            className={`tab text-lg text-lightblack font-semibold cursor-pointer whitespace-nowrap ${activeTab === "tab2" ? "!text-black opacity-100" : ""}`}
                            onClick={() => setActiveTab("tab2")} > ROI Focused </p>
                        <p
                            className={`tab text-lg text-lightblack font-semibold cursor-pointer whitespace-nowrap ${activeTab === "tab3" ? "!text-black opacity-100" : ""}`}
                            onClick={() => setActiveTab("tab3")} > Proprietary Technology</p>
                    </div>
                    <div className="tab-content">
                        <Tab activeTab={activeTab} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabsComponent;

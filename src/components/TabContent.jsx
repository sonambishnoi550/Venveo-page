import React, { useState } from "react";
const Tab = ({ activeTab }) => {
    switch (activeTab) {
        case "tab1":
            return (
                <div style={{ backgroundImage: `url(./assets/images/png/tab-one-bg.png)` }} className="relative sm:px-20 sm:py-16 px-4 py-6 bg-no-repeat">
                    <div className="lg:flex justify-between">
                        <div className="lg:w-4/12">
                            <p className="uppercase text-white text-2xl font-bold text-center">
                                The smartest minds in the industry
                            </p>
                            <p className="text-lg font-light text-left text-white pb-8">
                                Answer our questions and listen to our answers.
                            </p>
                            <p className="font-normal text-xmd text-left text-white pb-14">
                                This is placeholder but can add more to the business of building, some epic fails (and how to avoid them), and everything building science.
                            </p>
                            <div className="flex">
                                <a href="#" className="bg-red-500 flex px-3 py-3 text-white">
                                    Subscribe to Podcast ▼
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-2/12 hidden xl:block">
                            <div className="flex flex-col">
                                <img src="./assets/images/png/depot.png" alt="Depot Logo" className="pb-20" />
                                <img src="./assets/images/png/aia.png" alt="AIA Logo" className="pb-20" />
                                <img src="./assets/images/png/lowes.png" alt="Lowes Logo" className="pb-20" />
                                <img src="./assets/images/png/build.png" alt="Build Logo" className="pb-20" />
                                <img src="./assets/images/png/houzz.png" alt="Houzz Logo" />
                            </div>
                        </div>
                        <div className="lg:w-5/12 mt-10">
                            <div className="max-w-[440px] bg-white h-[573px] px-7 pt-8">
                                <img src="./assets/images/png/tab-one-card.png" alt="Tab One Card" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "tab2":
            return (
                <div style={{ backgroundImage: `url(./assets/images/png/tab-two-bg.png)` }} className="relative pt-20 max-w-[1280px] h-[720px]">
                    <h2 className="text-2xl font-bold leading-[70px] text-left text-white ps-20">
                        Proven Results
                    </h2>
                    <p className="text-lg font-light text-left text-white ps-20">
                        Not hopes and prayers.
                    </p>
                    <div className="bg-green-400 max-w-[293px] rounded-full pt-14 pb-12 px-10 absolute bottom-[10%] left-[-5%]">
                        <p className="text-sm font-normal text-center">Revenue Generated</p>
                        <p className="text-center font-bold text-2xl">$7.8B</p>
                    </div>
                </div>
            );
        case "tab3":
            return (
                <div style={{ backgroundImage: `url(./assets/images/png/tab-three-bg.png)` }} className="max-w-[1280px] h-[720px] mt-20">
                    <div className="lg:flex justify-between">
                        <div className="lg:w-5/12">
                            <h2 className="text-2xl font-bold text-left text-white pt-20 ps-20 uppercase">
                                Project Radar
                            </h2>
                            <img src="./assets/images/png/tab-logo.png" alt="Tab Logo" className="ps-20 pt-2" />
                            <p className="text-lg font-light text-left text-white leading-8 ps-20 pt-28">
                                Lorem ipsum what this product actually does.
                            </p>
                            <div className="flex ms-20 mt-16">
                                <a href="#" className="bg-green-400 text-xmd font-semibold text-center py-8 px-8 flex">
                                    Call to Action Somewhere
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-6/12">
                            <div className="bg-white max-w-[440px] px-8 pt-8 mt-8">
                                <img src="./assets/images/png/tab-three-card.png" alt="Tab Three Map" />
                                <p className="text-lg font-light text-left pt-10">
                                    Feature goes here; one particular feature can go here, of course.
                                </p>
                            </div>
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
            <div className="container">
                <h2 className="text-2xl font-bold text-center mb-2 uppercase">The Growth Partner</h2>
                <p className="text-lg font-light text-center mb-3">You've been looking for.</p>
                <p className="text-xmd font-normal text-center pb-8">Businesses trust Venveo to power growth.</p>
                <div className="nav-tabs">
                    <div className="flex justify-center gap-20 pb-14 tab-list">
                        <p
                            className={`tab text-md font-semibold cursor-pointer ${activeTab === "tab1" ? "text-blue-500" : ""}`}
                            onClick={() => setActiveTab("tab1")}
                        >
                            Industry Expertise
                        </p>
                        <p
                            className={`tab text-md font-semibold cursor-pointer ${activeTab === "tab2" ? "text-blue-500" : ""}`}
                            onClick={() => setActiveTab("tab2")}
                        >
                            ROI Focused
                        </p>
                        <p
                            className={`tab text-md font-semibold cursor-pointer ${activeTab === "tab3" ? "text-blue-500" : ""}`}
                            onClick={() => setActiveTab("tab3")}
                        >
                            Proprietary Technology
                        </p>
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

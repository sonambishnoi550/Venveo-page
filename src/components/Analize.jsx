import React from 'react';

const Analize = () => {
    return (
        <div style={{ backgroundImage: `url(./assets/images/webp/Analyze-bg.webp)` }} className="mt-20 max-xl:mt-12 max-sm:mt-8 bg-cover bg-no-repeat bg-center pt-16 pb-20 xl:px-32 max-sm:pb-11 max-sm:pt-8 relative">
           
            <div className="container relative">
                <img
                    src="/assets/images/svg/analize.svg"
                    alt="img"
                    className="absolute xl:left-[33rem] xl:top-[3rem] lg:left-[31rem] max-lg:hidden lg:top-[4rem] top-[11rem] sm:left-[30rem] left-[4rem] sm:top-[8rem] pointer-events-none"
                />
                <div className="md:flex justify-between max-lg:flex-col">
                    <div className="flex-col">
                        <p className="text-custom-xs font-normal leading-6 text-left pb-2 font-space max-lg:text-center">
                            Get a free competitive analysis on your market
                        </p>
                        <p className="text-custom-3xl font-light leading-none text-left max-lg:text-center max-sm:text-2xl font-maisonLight">
                            Outsmart your competition
                        </p>
                    </div>
                    <form className="bg-white  max-lg:mt-5 text-white justify-between rounded-[50px] text-center py-4 sm:py-5 px-7 flex max-w-[448px] w-full lg:ml-auto max-lg:mx-auto">
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter Your Website"
                            className="bg-transparent outline-none placeholder:text-black text-custom-xs font-normal leading-5"
                            aria-label="Enter your website"
                            required
                        />
                        <button
                            className="text-black text-custom-xs leading-5 font-semibold text-center">
                            Analyze
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Analize;

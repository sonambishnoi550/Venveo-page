import React, { useEffect, useRef } from 'react';
import { FEATURE_LIST } from './utils/helper';

const Feature = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            let animationFrameId;

            const smoothScroll = () => {
                slider.scrollLeft += 1;
                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                }
                animationFrameId = requestAnimationFrame(smoothScroll);
            };
            animationFrameId = requestAnimationFrame(smoothScroll);
            return () => cancelAnimationFrame(animationFrameId);
        }
    }, []);

    const infiniteImages = [...FEATURE_LIST, ...FEATURE_LIST];

    return (
        <div className="sm:mt-52 mt-80 xl:mt-[27rem] lg:mt-[26rem] md:mt-22 mb-5">
            <div className="container mx-auto pb-14">
                <p className="flex justify-center pb-12 font-normal text_xmd leading-4">
                    Featured in
                </p>
                {/* Infinite Scrolling Section */}
                <div
                    ref={sliderRef}
                    className="flex gap-12 overflow-hidden lg:hidden"
                    style={{
                        scrollBehavior: 'auto',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {infiniteImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            className="w-32 h-auto object-contain inline-block"
                        />
                    ))}
                </div>
                {/* Static Grid Section */}
                <div className="hidden lg:flex gap-12 justify-center xl:gap-[123px] lg:gap-20">
                    {FEATURE_LIST.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            className="w-32 h-auto object-contain"
                        />
                    ))}
                </div>
            </div>
            <img
                src="./assets/png/feature-line.png"
                alt="line image"
                className="mx-auto w-full"
            />
        </div>
    );
};

export default Feature;

import React, { useEffect, useRef } from 'react';
import { FEATURE_LIST } from '../utils/helper';

const Feature = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            let animationFrameId;

            const smoothScroll = () => {
                slider.scrollLeft += 0.5;
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
        <div className="sm:mt-[11rem] mt-[22rem] xl:mt-[22rem] lg:mt-[20rem] md:mt-21">
            <div className="container mx-auto pb-14">
                <p className="flex justify-center pb-12 font-normal text-custom-xs leading-4"> Featured in </p>
                <div ref={sliderRef} className="flex gap-24 overflow-hidden lg:hidden"
                    style={{ scrollBehavior: 'auto', whiteSpace: 'nowrap', }}>
                    {infiniteImages.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} style={{ width: img.width, }}
                            className=" inline-block pointer-events-none" /> ))}
                </div>
                <div className="hidden lg:flex gap-12 justify-center xl:gap-[123px] lg:gap-20">
                    {FEATURE_LIST.map((img, index) => (
                        <img key={index} src={img.src}  alt={img.alt} style={{ width: img.width, }} className=" pointer-events-none"  /> ))}
                </div>
            </div>
            <img src="./assets/images/png/feature-line.png" alt="line image" className="mx-auto w-full" />
        </div>
    );
};

export default Feature;

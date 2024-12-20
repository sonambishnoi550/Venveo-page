import React from 'react'
import Header from '../components/Header'

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(./assets/png/hero-bg.png)` }} className='bg-cover bg-no-repeat h-[869px] lg:bg-[100%_100%] max-sm:h-[539px] mx-w-[1440px] pb-20 max-lg:pb-16 max-sm:pb-10'>
            <Header />
            <div className="container">
                <h1 className='pt-[79px] max-sm:pt-[43px] text-custom-9xl xl:leading-[104px] max-xl:text-custom-8xl !font-bold leading-[97%] max-md:text-5xl uppercase sohne text-white max-w-[822px] mx-auto text-center'>Make marketing
                    <span className='lg:block'></span>     a growth machine</h1>
                <img className='ml-[273px] max-xl:ml-[200px] max-sm:ml-10' src="./assets/svg/green-line.svg" alt="line" />
                <p className='pt-3 max-md:pt-1 text-white  max-w-[656px] mx-auto text-center max-sm:text-custom-2xl text-2xl leading-custom-lg'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
                <form action="" className="border-2 border-white mt-7 text-white rounded-[50px] text-center py-4 sm:py-5 px-7 flex max-w-[448px] sm:mx-auto mx-5 justify-between">
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter Your Website"
                        className="bg-transparent outline-none flex-grow placeholder:text-light-gray text-light-gray"
                        aria-label="Enter your website"
                        required
                    />
                    <button
                        className="text-white text-custom-md leading-5 font-semibold text-center">
                        Analyze
                    </button>
                </form>

                <img className='pt-[66px] md:block hidden' src="./assets/png/hero-image.png" alt="work" />
                <img className='pt-12 max-md:block hidden' src="./assets/png/hero-work-image.png" alt="work" />
            </div>
        </div>
    )
}

export default Hero
import React from 'react';
// import styles from './SixthSec.module.css'; // Assuming you will create a CSS module for styling

const SixthSec = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-20 py-12  bg-black">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left md:ml-16 lg:ml-16  ">
            <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Maximise your Trading Knowledge with our Tools
            </h2>
            <p className="text-[#b2b2b2] mt-4 text-base sm:text-lg">
            Daily Market News, Margin Calculator, PIP Value Calculator, Currency Converter and much more.
            </p>
            {/* <button className="join-button rounded-lg mt-6 px-6 py-2 bg-[#f5b115] text-black font-semibold hover:bg-[#e4a800] transition">
            Signup Now
            </button> */}
            <a 
                href="https://secure.gatesfx.com/links/go/170"
                target="_blank" 
                rel="noopener noreferrer"
                className="join-button bg-white text-black font-semibold rounded-lg px-6 py-2 mt-5 shadow hover:bg-gray-100 transition inline-block text-center"
            >
                Signup Now
            </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
            <img
            src="/calcu.png"
            alt="Calculator"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
        </div>
        </div>

    );
};

export default SixthSec;

// You can add your styles here
        // <div className="container " >
        //     <div className="imageContainer">
        //         <img src="/calcu.png" alt="Calculator" className="calculatorImage" />
        //     </div>
        //     <div className="contentContainer">
        //         <h2 className='text-white font-bold text-5xl'>Maximise your Trading Knowledge with our Tools</h2>
        //         <p className='text-[#b2b2b2]'>Daiily Market News, Margin Calculator, PIP Value Calculator, Currency Converter and much more.</p>
        //         <button className="join-button rounded-lg mt-5">
        //             Signup Now
        //         </button>
        //     </div>
        // </div>

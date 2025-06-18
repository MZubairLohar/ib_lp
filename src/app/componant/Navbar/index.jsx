// import React from 'react';
// const Navbar = () => {
//     return (
//         <nav className="navbar bg-transparent flex flex-col md:flex-row items-center justify-between p-4">
//             <div className="logo mb-2 md:mb-0">
//                 <img src="/tmaLogo.jpeg" alt="Logo" className="h-14 w-14 rounded-2xl brightness-70" />
//             </div>
//             <button className="join-button rounded-lg px-4 py-2">Start Trading</button>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-transparent flex flex-col md:flex-row items-center justify-between px-6 py-4 w-full">
            {/* Logo */}
            {/* <div
                    href="https://secure.gatesfx.com/links/go/170"

                className="mb-3 md:mb-0 flex justify-center md:justify-start w-full md:w-auto">
                <img
                    src="/tmaLogo.jpeg"
                    alt="Logo"
                    className="h-14 w-14 rounded-2xl brightness-70"
                />
            </div> */}
            <a 
                href="https://secure.gatesfx.com/links/go/170" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mb-3 md:mb-0 flex justify-center md:justify-start w-full md:w-auto"
                >
                <img
                    src="/tmaLogo.jpeg"
                    alt="Logo"
                    className="h-14 w-14 rounded-2xl brightness-70"
                />
                </a>

            {/* Button */}
            <div className="flex justify-center md:justify-end w-full md:w-auto">
                {/* <button className="bg-white text-black font-semibold rounded-lg px-5 py-2 shadow hover:bg-gray-100 transition"> */}
                {/* <button className="join-button transition">
                    Start Trading
                </button> */}
                <a 
                    href="https://secure.gatesfx.com/links/go/170"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="join-button bg-white text-black font-semibold rounded-lg px-6 py-2 mt-5 shadow hover:bg-gray-100 transition inline-block text-center"
                >
                    Start Trading
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

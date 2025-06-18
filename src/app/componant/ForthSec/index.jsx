import React from 'react'

function index() {
  return (
    <div>
  {/* Why Choose Section */}
  <div className="bg-[linear-gradient(to_top,#a3c9d9,#1c9ad4,#010101,#000000)] w-full flex flex-col items-center justify-start text-white pt-20 px-4">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight">
      Why Choose <span className="text-[#f5b115] font-bold">GatesFX?</span>
    </h1>

    <div className="my-14 grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {/* Item 1 */}
      <div className="flex flex-col items-center group cursor-pointer">
        <img
          src="/como.webp"
          alt="commodities"
          className="h-10 w-10 md:h-20 md:w-20 lg:h-20 lg:w-20 object-cover transition-all duration-300 group-hover:scale-110"
        />
        <h2 className="mt-4 text-xs md:text-base text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
          Commodities & Metals
        </h2>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center group cursor-pointer">
        <img
          src="/indi.webp"
          alt="indices"
          className="h-10 w-10 md:h-20 md:w-20 lg:h-20 lg:w-20 object-cover transition-all duration-300 group-hover:scale-110"
        />
        <h2 className="mt-4 text-xs md:text-base text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
          Indices
        </h2>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center group cursor-pointer">
        <img
          src="/forx.webp"
          alt="forex"
          className="h-10 w-10 md:h-20 md:w-20 lg:h-20 lg:w-20 object-cover transition-all duration-300 group-hover:scale-110"
        />
        <h2 className="mt-4 text-xs md:text-base text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
          Forex
        </h2>
      </div>

      {/* Item 4 */}
      <div className="flex flex-col items-center group cursor-pointer">
        <img
          src="/cfd.webp"
          alt="share cfds"
          className="h-10 w-10 md:h-20 md:w-20 lg:h-20 lg:w-20 object-cover transition-all duration-300 group-hover:scale-110"
        />
        <h2 className="mt-4 text-xs md:text-base text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
          Share CFDS
        </h2>
      </div>

      {/* Item 5 */}
      <div className="flex flex-col items-center group cursor-pointer">
        <img
          src="/cryp.webp"
          alt="crypto cfds"
          className="h-10 w-10 md:h-20 md:w-20 lg:h-20 lg:w-20 object-cover transition-all duration-300 group-hover:scale-110"
        />
        <h2 className="mt-4 text-xs md:text-base text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
          Crypto CFDS
        </h2>
      </div>
    </div>
  </div>

  {/* Call to Action Section */}
  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-4 text-center lg:text-left py-6 px-4 bg-black">
    <img src="/tmaLogo.jpeg" alt="GatesFX" className="h-12 w-auto object-contain" />
    <p className="text-white font-bold max-w-sm lg:max-w-none">
      Start Testing Your Strategies Safely With a Demo Account
    </p>
    {/* <button className="join-button rounded-lg px-6 py-2 bg-[#f5b115] text-black font-semibold hover:bg-[#e4a800] transition">
      Open Demo Account
    </button> */}
    <a 
                          href="https://secure.gatesfx.com/links/go/170"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="join-button bg-white text-black font-semibold rounded-lg px-6 py-2 mt-5 shadow hover:bg-gray-100 transition inline-block text-center"
    >
                          Open Demo Account
    </a>
  </div>
</div>

  )
}

export default index

    // <div>
    //     <div className="bg-[linear-gradient(to_top,#a3c9d9,#1c9ad4,#010101,#000000)] h-full w-full flex flex-col items-center justify-start text-white pt-20 ">
    //         <h1 className="text-5xl text-center">
    //             Why Choose <span className="text-[#f5b115] font-bold">GatesFX?</span>
    //         </h1>
    //         <div className="my-14 flex">
    //             <div className="grid grid-cols-1 place-items-center group cursor-pointer mx-8">
    //                 <img 
    //                     src="/como.webp" 
    //                     alt="commodities" 
    //                     className="h-20 w-20 object-cover transition-all duration-300 group-hover:scale-110" 
    //                 />
    //                 <h2 className="mt-4 text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
    //                     Commodities & Metals
    //                 </h2>
    //             </div>

    //             <div className="grid grid-cols-1 place-items-center group cursor-pointer mx-8">
    //                 <img 
    //                     src="/indi.webp" 
    //                     alt="commodities" 
    //                     className="h-20 w-20 object-cover transition-all duration-300 group-hover:scale-110" 
    //                 />
    //                 <h2 className="mt-4 text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
    //                     Indicies
    //                 </h2>
    //             </div>

    //             <div className="grid grid-cols-1 place-items-center group cursor-pointer mx-8">
    //                 <img 
    //                     src="/forx.webp" 
    //                     alt="commodities" 
    //                     className="h-20 w-20 object-cover transition-all duration-300 group-hover:scale-110" 
    //                 />
    //                 <h2 className="mt-4 text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
    //                     Forex
    //                 </h2>
    //             </div>

    //             <div className="grid grid-cols-1 place-items-center group cursor-pointer mx-8">
    //                 <img 
    //                     src="/cfd.webp" 
    //                     alt="commodities" 
    //                     className="h-20 w-20 object-cover transition-all duration-300 group-hover:scale-110" 
    //                 />
    //                 <h2 className="mt-4 text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
    //                     Share CFDS
    //                 </h2>
    //             </div>

    //             <div className="grid grid-cols-1 place-items-center group cursor-pointer mx-8">
    //                 <img 
    //                     src="/cryp.webp" 
    //                     alt="commodities" 
    //                     className="h-20 w-20 object-cover transition-all duration-300 group-hover:scale-110" 
    //                 />
    //                 <h2 className="mt-4 text-white font-bold text-center transition-all duration-300 group-hover:scale-105">
    //                     Crypto CFDS
    //                 </h2>
    //             </div>
    //         </div>
    //     </div>
    //     <div className='flex items-center justify-around py-6 bg-black'>
    //         <img src='/GatesFX.png' alt='gatesfx' className='h-16 w-auto object-cover' />
    //         <p className='text-white font-bold'>Start Testing Your Strategies Safely With a Demo Account</p>
    //         <button className="join-button rounded-lg mt-5">
    //             Open Demo Account
    //         </button>
    //     </div>
    // </div>
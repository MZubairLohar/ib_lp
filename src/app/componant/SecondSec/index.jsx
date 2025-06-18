import Image from "next/image";


const index = () => {
  return (
    <div className="bg-[#010101] w-full rounded-t-4xl px-4 md:px-8 lg:px-12 py-8">
  {/* Top Section */}
  <div className="grid grid-cols-3 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
    {[ // You can also map through these
      { img: "/dps.png", label1: "Fast", label2: "Deposit" },
      { img: "/wtl.png", label1: "Fast", label2: "Withdrawals" },
      { img: "/nofe.png", label1: "No", label2: "Fee" }
    ].map((item, i) => (
      <div key={i} className="border border-[#16a1f6] border-b-8 rounded-full flex flex-col md:flex-row items-center justify-center  md:px-6 md:py-6 lg:px-6 lg:py-6">
        <img
          src={item.img}
          alt={item.label2}
          className="h-8 w-8 md:h-28 md:w-28 lg:h-28 lg:w-28 object-cover -mb-2 md:mb-0 md:mr-4"
        />
        <div className="text-center md:text-left">
          <h1 className="text-[#16a1f6] text-md md:text-2xl lg:text-2xl font-bold">{item.label1}</h1>
          <h1 className="text-white text-xs md:text-3xl lg:text-3xl">{item.label2}</h1>
        </div>
      </div>
    ))}
  </div>

  {/* Second Section */}
  <div className="flex flex-col md:flex-row items-center bg-transparent max-w-5xl mx-auto border-[#f5b115] border-t-8 border-b-2 py-6 rounded-4xl">
    <div className="hidden md:flex justify-center w-full md:w-1/2 mb-4 md:mb-0">
      <div className="relative w-36 h-36  rounded-full border-8 border-[#2d2d2d] overflow-hidden animate-wiggle animate-infinite">
        <Image
            src="/qus.jpeg"
            alt="Trader"
            layout="fill"
            objectFit="contain" // Shows the full image without cropping
            className="rounded-full"
        />
        </div>
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left px-4">
      <p className="text-2xl md:text-4xl text-white mb-4 leading-snug">
        "Life is short and working for other people sucks."
      </p>
      <p className="text-[#f5b115] text-base md:text-lg">– The Moving Average</p>
    </div>
  </div>

  {/* Third Section */}
  {/* <div className="bg-[linear-gradient(to_top,#a3c9d9,#1c9ad4,#010101,#000000)] w-full flex flex-col items-center pt-16 pb-20 rounded-b-4xl mt-10">
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-center font-semibold">
      Why Choose <span className="text-[#f5b115] font-bold">GatesFX?</span>
    </h1>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 px-4 max-w-6xl">
      {[
        { img: "/como.webp", label: "Commodities & Metals" },
        { img: "/indi.webp", label: "Indices" },
        { img: "/forx.webp", label: "Forex" },
        { img: "/cfd.webp", label: "Share CFDS" },
        { img: "/cryp.webp", label: "Crypto CFDS" }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center group cursor-pointer">
          <img
            src={item.img}
            alt={item.label}
            className="h-16 w-16 md:h-20 md:w-20 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <h2 className="mt-4 text-white text-sm md:text-base font-bold text-center transition-transform duration-300 group-hover:scale-105">
            {item.label}
          </h2>
        </div>
      ))}
    </div>
  </div> */}
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
</div>

  )
}

export default index

    // <div className='bg-[#010101] h-full w-full items-center justify-center rounded-t-4xl'>
    //     {/* Top Section */}
    //     <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-2 items-center justify-center mx-16 mb-4 pt-6'>
    //         <div className="border border-[#16a1f6] border-b-8 rounded-full flex px-10 py-6">
    //             <Image 
    //                 src="/dps.png" 
    //                 alt="deposit" // Required
    //                 width={108} // Must match your className dimensions
    //                 height={108} // Must match your className dimensions
    //                 className='h-36 w-36 object-cover' // Added object-cover for better image handling
    //             />
    //             <div className="grid grid-cols-1 mt-10">
    //                 <h1 className="text-[#16a1f6] text-3xl font-bold">Fast</h1>
    //                 <h1 className="text-white text-4xl">Deposit</h1>
    //             </div>
    //         </div>
    //         <div className="border border-[#16a1f6] border-b-8 rounded-full flex px-10 py-6">
    //             <Image 
    //                 src="/wtl.png" 
    //                 alt="withdrawal" // Required
    //                 width={108} // Must match your className dimensions
    //                 height={108} // Must match your className dimensions
    //                 className='h-36 w-36 object-cover' // Added object-cover for better image handling
    //             />
    //             <div className="grid grid-cols-1 mt-10">
    //                 <h1 className="text-[#16a1f6] text-3xl font-bold">Fast</h1>
    //                 <h1 className="text-white text-4xl">Withdrawals</h1>
    //             </div>
    //         </div>
    //         <div className="border border-[#16a1f6] border-b-8 rounded-full flex px-10 py-6">
    //             <Image 
    //                 src="/nofe.png" 
    //                 alt="Fee" // Required
    //                 width={108} // Must match your className dimensions
    //                 height={108} // Must match your className dimensions
    //                 className='h-36 w-36 object-cover' // Added object-cover for better image handling
    //             />
    //             <div className="grid grid-cols-1 mt-10">
    //                 <h1 className="text-[#16a1f6] text-3xl font-bold">No</h1>
    //                 <h1 className="text-white text-4xl">Fee</h1>
    //             </div>
    //         </div>
            
    //     </div>
    //     {/* second Section */}
    //     <div className="bg-trasparent w-3/4 border-[#f5b115] border-t-8 border-b-2  flex py-6 rounded-4xl mx-44">
    //         <div className="hidden md:flex w-1/2 justify-center">
    //             <div className="relative w-32 h-32 rounded-full border-8 border-[#2d2d2d] overflow-hidden  animate-wiggle animate-infinite">
    //                 <Image
    //                     src="/perso.png" // Replace with your image path
    //                     alt="Trader"
    //                     layout="fill"
    //                     objectFit="cover"
    //                     className="rounded-full"
    //                 />
    //             </div>
    //         </div>
    //         <div className="grid grid-cols-1 mr-20">
    //             <a className="text-5xl mb-4 text-white">
    //                 "Life is short and working for other people sucks."
    //             </a>
    //             <p className="text-[#f5b115]">– The Moving Average</p>
    //         </div>
    //     </div>
    //     {/* Third Section */}
    //     <div className="bg-[linear-gradient(to_top,#a3c9d9,#1c9ad4,#010101,#000000)] h-full w-full flex flex-col items-center justify-start text-white pt-20 rounded-b-4xl">
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
    // </div>
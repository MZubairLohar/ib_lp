import Head from 'next/head';
import Image from "next/image";
import Navbar from '../Navbar';


const index = () => {
  return (
    <div className="w-fit md:w-screen lg:w-screen">
    <Head>
        <link rel="preload" href="/tops.webm" as="video" />
    </Head>

    {/* Main container with full viewport height */}
    <div className="relative h-screen w-screen overflow-hidden">
        {/* Video background */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10"
        >
            <source src="/tops.webm" type="video/webm" />
            Your browser does not support the video tag.
        </video>

        {/* Navbar */}
        <div className="relative z-20">
            <Navbar />
        </div>

        {/* Content section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-20 py-12  ">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left md:ml-16 lg:ml-16  ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Trade with<br />
              <span className="text-[#16a1f6]">The Moving Average's</span><br />
              Favourite Broker
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mt-3 text-[#f5b115]">
              Sign up to trade Forex, Cryptos, Stocks, Commodities and Indices with full STP execution.
          </p>
            <a 
                href="https://secure.gatesfx.com/links/go/170"
                target="_blank" 
                rel="noopener noreferrer"
                className="join-button bg-white text-black font-semibold rounded-lg px-6 py-2 mt-5 shadow hover:bg-gray-100 transition inline-block text-center"
            >
                Join Now
            </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
            <img
            src="/logoH.webp"
            alt="Profile Image"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
        </div>
        </div>
            </div>
        </div>

  )
}

export default index






    // <div className="w-fit md:w-screen lg:w-screen">
    //         <Head>
    //             <link rel="preload" href="/tops.webm" as="video" />
    //         </Head>

    //         {/* Main container with full viewport height */}
    //         <div className="relative h-screen w-screen overflow-hidden">
    //             {/* Video background */}
    //             <video
    //                 autoPlay
    //                 loop
    //                 muted
    //                 playsInline
    //                 className="absolute inset-0 w-full h-full object-cover -z-10"
    //             >
    //                 <source src="/tops.webm" type="video/webm" />
    //                 Your browser does not support the video tag.
    //             </video>

    //             {/* Navbar */}
    //             <div className="relative z-20">
    //                 <Navbar />
    //             </div>

    //             {/* Content section */}
    //             <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pt-16 md:pt-0">
    //                 {/* Text */}
    //                 <div className="w-full md:w-2/3 text-white space-y-4 text-center md:text-left">
    //                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
    //                         Trade with<br />
    //                         <span className="text-[#16a1f6]">The Moving Average's</span><br />
    //                         Favourite Broker
    //                     </h1>
    //                     <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mt-3 text-[#f5b115]">
    //                         Sign up to trade Forex, Cryptos, Stocks, Commodities and Indices with full STP execution.
    //                     </p>
    //                     <a 
    //                       href="https://secure.gatesfx.com/links/go/170"
    //                       target="_blank" 
    //                       rel="noopener noreferrer"
    //                       className="join-button bg-white text-black font-semibold rounded-lg px-6 py-2 mt-5 shadow hover:bg-gray-100 transition inline-block text-center"
    //                     >
    //                       Join Now
    //                     </a>
    //                 </div>

    //                 {/* Image - hidden on mobile */}
    //                 <div className="hidden md:flex justify-center mt-10 md:mt-0">
    //                     <div className="relative w-20 h-20 md:w-80 md:h-80 lg:w-96 lg:h-96">
    //                         <Image
    //                             src="/logoH.webp"
    //                             alt="Trader"
    //                             layout="fill"
    //                             objectFit="contain"
    //                             className="brightness-75"
    //                         />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>







    // <div className="w-fit md:w-screen lg:w-screen">
    //   <Head>
    //     <link rel="preload" href="/tops.webm" as="video" />
    //   </Head>

    //   {/* Main container with full viewport height */}
    //   <div className="relative h-full w-full overflow-hidden">
    //     {/* Video background */}
    //     <video
    //       autoPlay
    //       loop
    //       muted
    //       playsInline
    //       className="absolute inset-0 w-full h-full object-cover -z-10"
    //     >
    //       <source src="/tops.webm" type="video/webm" />
    //       Your browser does not support the video tag.
    //     </video>

    //     {/* Navbar */}
    //     <div className="relative z-20">
    //       <Navbar />
    //     </div>

    //     {/* Content section */}
    //     <div className="relative z-10 h-full flex flex-col items-center justify-center md:justify-between px-6 md:px-12 lg:px-24 pt-16 md:pt-0">
    //       {/* Text */}
    //       <div className="w-full md:w-2/3 text-white space-y-4 text-center md:text-left">
    //         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
    //           Trade with<br />
    //           <span className="text-[#16a1f6]">The Moving Average's</span><br />
    //           Favourite Broker
    //         </h1>
    //         <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mt-3 text-[#f5b115]">
    //           Sign up to trade Forex, Cryptos, Stocks, Commodities and Indices with full STP execution.
    //         </p>
    //         <a 
    //           href="https://secure.gatesfx.com/links/go/170"
    //           target="_blank" 
    //           rel="noopener noreferrer"
    //           className="join-button bg-white text-black font-semibold rounded-lg px-6 py-2 mt-5 shadow hover:bg-gray-100 transition inline-block text-center"
    //         >
    //           Join Now
    //         </a>
    //       </div>

    //       {/* Image - now visible on mobile but smaller */}
    //       <div className="flex justify-center mt-8 md:mt-0">
    //         <div className="relative w-40 h-40 md:w-80 md:h-80 lg:w-96 lg:h-96">
    //           <Image
    //             src="/logoH.webp"
    //             alt="Trader"
    //             layout="fill"
    //             objectFit="contain"
    //             className="brightness-75"
    //             priority // Add priority for important above-the-fold images
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


//  <div className='w-screen'>
//     <Head>
//         <link rel="preload" href="/tops.webm" as="video" />
//       </Head>

//       {/* Main container with full viewport height */}
//       <div className="relative h-screen w-screen overflow-hidden">
//         {/* Video background (positioned absolutely) */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover -z-10 "
//         >
//           <source src="/tops.webm" type="video/webm" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Navbar positioned at top (relative to viewport) */}
//         <div className="relative z-20"> {/* Higher z-index than video */}
//           <Navbar/>
//         </div>

//         {/* Main content */}
//         <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-16 lg:px-24 -mt-10">
//           {/* Left side - Text content */}
          
//           <div className="w-full md:w-2/3 text-white space-y-4"> {/* Even tighter */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               Trade with<br />
//               <span className="text-[#f5b115]">The Moving Average's</span><br />
//               Favourite Broker
//             </h1>
            
//             {/* <p className="text-lg md:text-xl lg:text-2xl opacity-90 mt-3 text-[#f5b115]"> */}
//             <p className="text-lg md:text-xl lg:text-2xl opacity-90 mt-3 text-[#f5b115]">
//               Sign up to trade Forex, Cryptos, Stocks, Commodities and Indices with full STP execution.
//             </p>
            
//             <button className="join-button rounded-lg mt-5">
//               Join Now
//             </button>
//           </div>
//           {/* Right side - Round frame with person image */}
//           <div className="hidden md:flex justify-center">
//             <div className="relative w-96 h-96 ">
//               <Image
//                 src="/logoH.webp" // Replace with your image path
//                 alt="Trader"
//                 layout="fill"
//                 objectFit="contain" // Changed from cover to contain to show full image
//                 className="brightness-75"
//               />
//             </div>
//           </div>

          
//         </div>
//       </div>
// </div> 
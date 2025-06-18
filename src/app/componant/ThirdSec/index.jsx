import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="z-20 w-full min-h-screen py-10">
      {/* Background Video */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/seco.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Main Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
          {/* Heading with Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left mb-8">
            <h1 className="text-white font-extrabold text-3xl md:text-4xl">
              About The Moving Average
            </h1>
            <div className="relative w-20 h-20 rounded-full border-8 border-[#f5b115] overflow-hidden shrink-0">
              <Image
                src="/qus2.jpeg"
                alt="Trader"
                width={80}
                height={80}
                className="rounded-full object-cover mb-2"
              />
            </div>
          </div>

          {/* Content Row */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Text Section */}
            <div className="flex-1 text-white space-y-4 text-center lg:text-left">
              <p className="text-base md:text-lg leading-relaxed">
                From Uber driver to crypto investor to full-time day trader, Arty is the creator of The Moving Average YouTube channel. Amassing over 333,000 subscribers in 1 year. He teaches people everything there is to know about technical analysis as well as life lessons and how to overcome them. He is a strong believer in determination and patience being the key to achieving anything.
              </p>
              <p className="text-[#f5b115] font-bold md:text-lg leading-relaxed">
                Arty's superpower is his ability to explain complex topics in a way that is easy to understand in a short amount of time — which is one likely reason for the overnight success of his YouTube channel.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Arty is passionate about helping others find the financial freedom that we all strive for, and lives his life by one motto:
              </p>
              <p className="font-bold md:text-lg leading-relaxed">
                "Life is short and working for other people sucks."
              </p>
            </div>

            {/* YouTube Video */}
            <div className="flex-1 w-full max-w-xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/nOri_PwnPmI?start=1448"
                title="The Moving Average YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default index

    // <div className='z-20 h-screen w-full py-10'>
    //   {/* Main container with full viewport height */}
    //   <div className="relative h-screen w-full overflow-hidden">
    //     {/* Video background (positioned absolutely) */}
    //     <video
    //       autoPlay
    //       loop
    //       muted
    //       playsInline
    //       className="fixed inset-0 w-full h-full object-cover -z-20 "
    //     >
    //       <source src="/seco.webm" type="video/webm" />
    //       Your browser does not support the video tag.
    //     </video>
    //     {/* Main content */}

    
    //     <div className="relative  z-10  items-center justify-center px-8 md:px-16 lg:px-24">
    //             <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-2"> {/* Changed to flex layout */}
    //             <h1 className="text-white font-extrabold text-3xl md:text-4xl text-center md:text-left">
    //                 About The Moving Average
    //             </h1>
    //             <div className="relative w-20 h-20 rounded-full border-8 border-[#f5b115] overflow-hidden shrink-0">
    //                 <Image
    //                 src="/perso.png"
    //                 alt="Trader"
    //                 width={80}
    //                 height={80}
    //                 className="rounded-full object-cover"
    //                 />
    //             </div>
    //             </div>
                
    //             <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-6xl mx-auto p-4">
    //                 {/* Text Content - Left Side */}
    //                 <div className="flex-1 text-center lg:text-left">
    //                     <div className="space-y-4">
    //                     <p className="text-white text-base md:text-lg leading-relaxed">
    //                         From Uber driver to crypto investor to full-time day trader, Arty is the creator of The Moving Average YouTube channel. Amassing over 333,000 subscribers in 1 year. He teaches people everything there is to know about technical analysis as well as life lessons and how to overcome them. He is a strong believer in determination and patience being the key to achieving anything.
    //                     </p>
    //                     <p className="text-[#f5b115] font-bold md:text-lg leading-relaxed">
    //                         Arty's superpower is his ability to explain complex topics in a way that is easy to understand in a short amount of time - which is one likely reason for the overnight success of his YouTube channel.
    //                     </p>
    //                     <p className="text-white text-base md:text-lg leading-relaxed">
    //                         Arty is passionate about helping others find the financial freedom that we all strive for, and lives his life by one motto:
    //                     </p>
    //                     <p className="text-white font-bold md:text-lg leading-relaxed">
    //                         "Life is short and working for other people sucks."
    //                     </p>
    //                     </div>
    //                 </div>

    //                 {/* YouTube Video - Right Side */}
    //                 <div className="flex-1 w-full lg:w-auto aspect-video max-w-2xl bg-[#000] rounded-lg overflow-hidden shadow-xl">
    //                     <iframe
    //                     width="100%"
    //                     height="100%"
    //                     src="https://www.youtube.com/embed/nOri_PwnPmI?start=1448"
    //                     title="The Moving Average YouTube video"
    //                     frameBorder="0"
    //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                     allowFullScreen
    //                     className="w-full h-full"
    //                     ></iframe>
    //                 </div>
    //                 </div>
    //     </div>
    //   </div>
    // </div>
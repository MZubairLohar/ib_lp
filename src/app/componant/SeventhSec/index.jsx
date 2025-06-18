import React from 'react';

const SeventhSec = () => {
    return (
        <div className='bg-black'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row items-center justify-around py-6 px-4'>
            {/* Logo */}
            <img 
            src='/tmaLogo.jpeg' 
            alt='gatesfx' 
            className='h-12 md:h-16 w-auto object-cover mb-4 md:mb-0' 
            />
            
            {/* Text */}
            <p className='text-white font-bold text-center md:text-left mb-4 md:mb-0 px-4'>
            Start Testing Your Strategies Safely With a Demo Account
            </p>
            
            {/* Button */}
            {/* <button className="join-button rounded-lg px-6 py-2 text-sm md:text-base md:mt-5">
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
        
        {/* Social Icons */}
        <div className='flex justify-center items-center py-4 space-x-6 md:space-x-10'>
            <a 
            href="https://www.instagram.com/tmafx?igsh=b2R6cmppOXliYXR3" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <img 
                src='/ins.png' 
                alt='instagram' 
                className='h-6 md:h-8 w-auto object-cover' 
            />
            </a>
            
            <a 
            href="https://t.me/TMAbyArty"

            target="_blank"
            rel="noopener noreferrer"
            >
            <img 
                src='data:image/png;base64,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' // shortened for brevity
                alt='telegram' 
                className='h-6 md:h-8 w-auto object-cover rounded-md' 
            />
            </a>
            
            <a
            href="https://m.youtube.com/c/TheMovingAverage"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img 
                src='data:image/png;base64,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' // shortened for brevity
                alt='youtube' 
                className='h-6 md:h-8 w-auto object-cover rounded-md' 
            />
            </a>
        </div>    
        
        {/* Footer Text */}
        <div className='px-4 md:px-32 py-6 md:py-10 text-white text-xs md:text-sm'>
            <p className='mb-4'>
                **The services of GatesFX and any information on this site are not directed at citizens and/or residents of the USA and are not intended for distribution to or use by any person in any jurisdiction where such distribution or use would be contrary to local law or regulation.
            </p>
            <p>
            **Risk Warning: Trading leveraged products such as Forex may not be suitable for all investors as they carry a degree of risk to your capital. Please ensure that you fully understand the risks involved, taking into account your investment objectives and level of experience, before trading, and if necessary seek independent advice.
            </p>
        </div>
        </div>
    );
};

export default SeventhSec;
{/* <div className='bg-black'>
 <div className='flex items-center justify-around py-6 '>
    <img src='/GatesFX.png' alt='gatesfx' className='h-16 w-auto object-cover' />
    <p className='text-white font-bold'>Start Testing Your Strategies Safely With a Demo Account</p>
    <button className="join-button rounded-lg mt-5">
        Open Demo Account
    </button>
</div>   
<div className='flex justify-center items-center'>
    <a href="https://www.instagram.com/tmafx?igsh=b2R6cmppOXliYXR3" target="_blank" rel="noopener noreferrer">
        <img src='/ins.png' alt='instagram' className='h-8 w-auto object-cover ml-10' />
    </a>
    <a 
        href= "https://m.youtube.com/c/TheMovingAverage"
        target="_blank"
        rel="noopener noreferrer"
     >
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUDm+X///8AluQAmOQAleQAk+MAnOXS6/ru+P34/f+p1/S/4veQzPEAnua13fbz+/7H5vhou+3p9v3i8vxTs+ud0vODxvBRtOs3qunO6fltve0io+c8remm1vSezvJnt+yJyvF8w+/b7fpcsus2puiNgamZAAAMy0lEQVR4nOWd2YKqOBCGMRVAtHFFpQHbZXz/ZxwWtVmSkKQSgT7/5ZlpzWfWSi1xZrYVzP3l+ee4jbI4DUPP8cIwjbPT9vizWPrzwPr3OxY/e35fXS+x51JKIJdTV/EPhFLXiy/HxX1nsRW2CP1FEoeEtsG6Kkm9OFn4llpig9D/OXlAetmanAS87GCD0jThfJV4+aBUgKtjUi9ZzQ23yCjhfhEB1aN7U1Lnv/PeZKPMEa4XkaPZeS1I4mSLtbF2mSLcbIkRvBckuWwMtcwI4fzwQA5OBiR9fBmZkgYI7zePGMarRLzkPgJCP1LaFtQEEH0PTLjJXHt8JaMbIyckinATGZ9+DEaaoRgRhFbHZ4ORRIjDjjbhLvlA/70ZaaK9rmoSBocP9d+bEQ6ahpYe4eZBP8pXiKZ601GHMEg+3IGVgCQ63ahBuHSG4CsZYfUBwvnl8wP0V/SivOKoEi7ToTqwEoRLu4THITuwEr1ZJNw/7Byx1UQeShayCuFwS0xT4KgsOAqEX2PowErkywJhEA0/BX9FI+mtUZZwN/Aa2haksrfIkoR+OC7AYtuQtI3lCJeDHNPEApDbGaUIz+7QOEy5Z1OEhzGtMXXRgxnC61gB5XaNfsIRHNT4okc84agB87nYi9hHOOIhWon2DdQewq+xA+ZzsWe5EROexw+Y96J40xASLse5D7blCrd+EaE/dNNlBaILYwHhbnRnUZ4gFBzD+YTByKwJkSDlG1N8wmg6gDlipE44gX2iLv62yCNcjufKQk6Et6ByCPdDN1hDnBs4DuFjSpOwEsQqhMepjdFChH0IZxIup7XKvESZU5FFOA+HbqumQpbbhkW4nd4krARbOcLVNMdoIcq47u8SBlPtwULQjfjrEiaTJuyO0w7hZoobxa9IJ5yhTRhMcK+vCx5tK6NNOLEDd1edI3iLcDftHiwEcyHhpJeZSpCICP2pj9FC1BcQTsqu56ll7zcIN38BsL1jNAizv0HY7MQ64eYvzMJCdMMhjP9GF+admLEJv6dxhy8j12cS/omFtBKcWIT3kQL2pzCy/mjPILyNkRAoZJdIPScHbl3CuWejhTiBG5dJbIF6NIg37xAexmYXAgmv77Gm7Mn89Qy/CR9WmqktApdl3dJTvh17tAlHtdsDTQ8tj+C3avveu/6LcDw3iEBg2w3KC5Q/ZtskXI9lFgJkZ1aGbJCqfhJZNwgXoyAEGh45OZUahIsG4RjOM0CjFddZHSh7Gl4WRkU4vLsQIP0SRf3uNFbCfY3wPOwgBeJte9K2NNxh5FwjHHSQAo3Pvbk+X+otfA7TknBuod2yzSBwk0nY1uqD+ZtwMG8TQCSZHKIDWHmiSsJhbkmLmgKy+T17Heu8ujktCYcwKwjZbuQTJldaS6H3Ivz8PTCQlHly4UrPeHXvT8LDh5OWaXhTzT7XuyQrTaiC8PRJQiDRSrk0i2bsRHldUxB+bhoC9YQnl3w8xSEjQs3X7AOvItT9c1UBcXpPLrnl6zIIdc9cRWit8ym7Akjctmrb2m3zJY9eGf9F13ot7AvnI7shUKd/cTkUMcnMRJ8g1v3epCS0fpmfHzz5ZtFL+6zYs15GXatztb85Lgh3dmO88q3v2n9yCa5lHRFOwp3+JVK4ywnvNqdh+8qMo02ZJA4eZyRrGBav77/nhPYWGnA7V2ZMrZOyTBiEvL6+6BOucsKjnWmY7w2J3MllVTkm4ME1EvXnEVxzQv0fSPTJIFtUbv/MEScZdzTv9N1+cMkJzS+lgiuzjr6eniW65U9XhPmaL6ZOYPrMBm4ks7iU8l9lKITFLjDzKAycuVHPL5DHQfpcvU5epdDESYSYUebOHYPGYVGcU6GA3OqdVwXi/DrMNKK+YyxqHWi2UCiPs7u8d6meykE+ZjujS8fMVWm+NxyVaqr81goD6Ol31IZNFs6PgaWUOLJXZq9uid8jh7/Pv4SyDODHQW/4xZWZWi3n4PgbfACP3r/VNSyqzz86OMchEFdlcSm1TH+HHcS9K+8OtZ3B1sFc6APEC9USao1aYYSfNviWsve32cSTk2n/LU2Vr8zyZaNeiYkk/X+AvQnMHM0IhcLZp17N+J7VO4R5YdER0v8eO8q+VUfmyoyta6OYsitTmWQWIINEUkfdMul39rG1SRsbm2SFwB1yvw4d1ZWKpAetUqLzbWPFAEfyV8KeuZQJ6ZdeGdFFM7kfHHnzCkuopr4TFke7rNkT8pW6DLinlfqQmzAtVPDVKsgLmfwyjAVUHKWcZGKxNnFrsSDy5eT0XKNNQpVx2oifllRwa9fbp6xMT570XKMNQqX9kChPw1WnmqREaaea0HG9qeKZxlPbCffdYotSFch+hTIsCsWq51JW3CBXh245UMp0THC1xgLmfKoOYIDwJteR9/YK43AdE1x9o63Xk459CBSS3mP3+tit2Q6hqjGCvmPJ7UM9Gx+oc1mIrh+WKaMDey8sOkIH9uY2vvY9TfEczIFz9modQp9/wHdMcIVeaOAHddcGhKRXxsA7s5JAgO+Y4ErbNfoWWaDvS4vomE1jUt4z1kfSizKfifh6ujRx5w003a5eR+ngysziUa3CXQlrWJR33mb8FkC8qLzx/masMI7shUVHeM+fuzbnewLixoeE/XsRqWqxHamHr3cUBkb9h7w0M50nDQrpBHe3vjm25QNufIvshUVH+Mje0gd8tUyosc+/hA8xKP34aAus5ztS/bfF8BOIrmzH0+T7POLxNPxGVsbTWI2JUrmw6MjAVl3GRNmMa2tX4VATPpapimuzGJuoc69TE75hz9hEi2FfqC40kNb6jC+1FyMMSpdObeFco1UDfMtx3qDwlEhX3/ix9Yzzther31dqWyy8YfGO1beWb8GO+JUV/jj5zrewljPDLkYpKaxr1KnlzFibiBTzCrWBsmPvvCdrOyLFPM6MD0er5a7Zyj9sl05TEt7mqeUfWsshxRAayNz9zSG1lQecYl7XRn97PQ/YVi53p0qjgtCu0WYut518fMbBeyF952bAMK/n49sZpvBfu9lnSmUtYrRrtFlTwY59Ae1r7oPrSD9Cid7vW3UxrNQ2qRVrqgCfmRUyFscaf2Rr1jaxUp8GmpPuXfyVxP3RNGjDol2fxkqNIWiYFrWHoyQeoUSv7vTljX/XicJfoHfUMC2aL2P1OmrQY6pTJ8pGra+6aXFrRw3F4jMrdqFh1PqyUK+tZlp0fcIgNB7RGzSjXpuFmnvw9oGznN7CZC7sssCquWejbuJrIJ7YMwAeXPsRe4Px++NarX3p7Xo+GIB3kYO8wahXoa0R+qbrlz6fmxDdqdMT0/zAukY59UuNlxEun5laiz8VUpZzcY+bhrwatMZ3/WJL2vd5RYB1qYq8dODWETY8E/Nf0j9KlFelUcfcwLlG+bWgjdfzdruhbcwWdcwNnDsM+PW8B6tq1gpGmeNSnQQ12Yerq0+yurmBO0HSu4BwuLcRoBaRol4jsfFJt5mIEG94asu9vQ5xyJ95LSQc8oVqqKpo7HCGUyeOfFTvzACkUYx7xr3/nZmhX4DAPlMPvW8FTfwhFkbkwB97s8vpmpyMd9cm+jZgIZZL9p98O282t3Dv9hExgwT/1BuWzDjWf/Qd0n/gLdkRFPhWl9p7wH//TefJPROo/i73OErtS0vnbfVZkE4HEVK+g4BPONuFU0GEUOByFRDO/KFbLisQxc+JCNVf6BlGrjD2QUg4O09hQaXitDEx4fhegeqqLxC5h3D826K45KIE4ew67rno9gbn9BLOrmPuRYkiG/2Es6/xzkUike4gQTjkLbFYUlVEZAhn53HORVcqu1iKcLbsFikZXODIBTnKEc780Z1RpauISBLOdiOzNOSrhckSzoJuuaABRU/SIeTShKPaNWR2CQ3C0aw3smuMOuFs/xhDN/YFbmIIR3GEU6uGpkw42wy8psqG+usTsgskfUx0q5xKpUz4fo9iAIFOkRQNwtk6GYQRSKKTR6VDWLwL8/mhSh96RWD0CGfB4cPdCHDQTITTJMxXnEQu8NAMH020Uxm1CXN7I/pQPwKJZKsOmyXMp2P0gX4EmulWYcIT5oyZa5cRXBwfmnA2u58sjlWASK/4tEnC/Dx+8+wcyImXIOafQcJ8XT08jE/I4mEQTLL7W0YIc20SaNd8xuARolLNVyhThPlZbhU5RiCBOJHywyB8mSPMtV9EDnK4AnWiM6acRkdGCXPNV4nnanYlENdLVkYmX02mCQvdDycvn5UqmJD//17EK9qLkg3CQv4iiUNCedUw62z5suI9kgWmlo1ItggLze+r6yUOKaV5h7ZQi38glLphfDku7jpPusjKJmGlYO4vFz/H7SmL0zD0HC8M0zg7bY8/i6U/N7dm8vQ/Fk+gPztusL8AAAAASUVORK5CYII=' 
            alt='x' className='h-8 w-auto object-cover ml-10 rounded-md' />
    </a>
    <a
        href="https://t.me/TMAbyArty"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img src='data:image/png;base64,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' 
            alt='Youtube' className='h-8 w-auto object-cover ml-10 rounded-md' />
    </a>
</div>    
<div className='px-32 py-10 text-white text-sm '>
    <p>
        **The services of GatesFX and any information on this site are not directed at citizens and/or residents of the USA and are not intended for distribution to or use by any person in any jurisdiction where such distribution or use would be contrary to local law or regulation.
    </p>
    <p>
        **Risk Warning: Trading leveraged products such as Forex may not be suitable for all investors as they carry a degree of risk to your capital. Please ensure that you fully understand the risks involved, taking into account your investment objectives and level of experience, before trading, and if necessary seek independent advice.
    </p>
</div>
</div> */}

import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className='flex relative'>
            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center overlay">
                <h1 className='lg:text-7xl md:text-4xl text-3xl text-white text-center font-bold'>Discover story-worthy <br /> travel moments</h1>
            </div>
            <div>
                <img src="./1.avif" alt="" />
            </div>
            <div>
                <img src="./2.avif" alt="" />
            </div>
            <div>
                <img src="./3.avif" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
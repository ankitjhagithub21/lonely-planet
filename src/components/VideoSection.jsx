import React from 'react'

const VideoSection = () => {
    return (
        <section className='h-screen w-full relative '>
            <video autoPlay loop muted className="absolute top-0 left-0 z-0 object-cover w-full h-full">
                <source
                    src="https://lonelyplanetstatic.imgix.net/marketing/best-in-travel/2025/videos/main-page/bit-landscape-4.mp4"
                    type="video/mp4"
                />

            </video>
           <div className="overlay  z-10 relative top-0 left-0 w-full h-full flex flex-col  gap-5 items-center justify-center">
           <h1 className='font-serif text-9xl text-center  text-white'>Best in Travel</h1>
           <h2 className='text-6xl text-white'>2025</h2>
           <button className='px-6 py-2 text-sm bg-indigo-700 text-white rounded-full hover:bg-indigo-800'>Discover the winners</button>
           </div>
        </section>
    )
}

export default VideoSection
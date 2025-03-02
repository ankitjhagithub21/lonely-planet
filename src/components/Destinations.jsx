import React from 'react'

const Destinations = () => {
    return (
        <section>
            <div className='container mx-auto  lg:py-24 py-12'>
                <div className='px-5'>
                    <span className='text-gray-600 font-semibold'>PLAN YOUR TRIP</span>
                    <div className='flex flex-wrap gap-5 items-center justify-between'>
                        <h1 className='lg:text-5xl text-4xl mt-1  font-semibold'>Where to next?</h1>
                        <button className='border border-gray-400 transition lg:block hidden font-semibold rounded-full px-6 hover:text-white  py-2 hover:bg-blue-800 text-sm'>View all destinations</button>
                    </div>
                </div>
                <div className='flex   overflow-x-scroll  slider lg:mt-10 mt-5'>
                    <div className='lg:w-1/3  lg:min-w-1/3 p-5 min-w-full'>
                        <div>
                            <div className='rounded-xl overflow-hidden'>
                                <img src="https://lp-cms-production.imgix.net/2021-05/shutterstock_1577265994.jpg?fit=crop&w=360&ar=1%3A1&auto=format&q=75" alt="" className='w-full h-full object-cover object-center hover:scale-105 transition cursor-pointer' />

                            </div>
                            <p className='mt-3 font-semibold lg:text-2xl text-xl'>Nevada</p>
                        </div>
                    </div>

                    <div className='lg:w-1/3 lg:min-w-1/3 p-5  min-w-full'>
                        <div >
                            <div className='rounded-xl overflow-hidden'>
                                <img src="https://lp-cms-production.imgix.net/2020-12/LPT0717_078.jpg?fit=crop&w=360&ar=1%3A1&auto=format&q=75" alt="" className='w-full h-full object-cover object-center hover:scale-105 transition cursor-pointer' />

                            </div>
                            <p className='mt-3 font-semibold lg:text-2xl text-xl'>Canary Islands</p>
                        </div>
                    </div>
                    <div className='lg:w-1/3 lg:min-w-1/3 p-5 min-w-full'>
                        <div >
                            <div className='rounded-xl overflow-hidden'>
                                <img src="https://lp-cms-production.imgix.net/2021-10/TNZ%20-%20Space%20-%20Moke%20Lake%20-%20F6A7236.jpg?fit=crop&w=360&ar=1%3A1&auto=format&q=75" alt="" className='w-full h-full object-cover object-center hover:scale-105 transition cursor-pointer' />
                            </div>
                            <p className='mt-3 font-semibold lg:text-2xl text-xl'>New Zealand</p>
                        </div>
                    </div>

                </div>
                <button className='border border-gray-400 transition block mx-auto my-5 lg:hidden font-semibold rounded-full px-6 hover:text-white  py-2 hover:bg-blue-800 text-sm'>View all destinations</button>
            </div>
        </section>
    )
}

export default Destinations
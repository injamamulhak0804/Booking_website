import React from 'react'
import { KOL_IMG, KOL_IMG1, MAL_IMG, MAP } from '../utils/helper'
import Header from './Header'

const Kolukkumalai = () => {
  return (
    <main>
        <div
        className="w-full overflow-hidden h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${MAL_IMG})`,
          overflowX: "hidden",
        }}
      >
        <div className='max-w-[1110px] mx-auto py-5'>
          <Header />
        </div>
        <h2 className='font-poppins text-6xl font-bold text-white absolute bottom-10 left-[30%]'>Kolukkumalai</h2>
        </div>

        <section className='max-w-[1110px] mx-auto mt-10'>
            <div>
                <h2 className='font-Volkhov text-center font-bold text-3xl my-10 text-[#1E1E1E]'>About</h2>
                <div className='bg-[#F6F6FE] p-10 rounded-lg text-[#6A6B9C] font-montserrat text-sm flex justify-between'>
                    <div className='flex flex-col gap-10 w-[50%]'>
                        <p>A little village called Kolukkumalai is located in the Bodinayakanur Taluk in the Tamil Nadu state Theni district. It is home to the world's highest tea plantation, and because of the high altitude, the tea produced here has a unique taste and freshness. It is situated in Kerala's Idukki district, close to Munnar.</p>

                        <p>Kolukkumalai is located 32 kilometers (20 mi) from Munnar and is around 7,130 feet (2,170 m) above sea level. Only jeeps can reach the hilltop community since the up to 17 kilometers of rough, rain-soaked roads are impassable.</p>
                    </div>
                    <div className=''>
                        <img src={KOL_IMG} className='object-cover' alt="" />
                    </div>
                </div>
            </div >
        </section>

        <section className='max-w-[1110px] mx-auto mt-24'>
            <div>
            <h2 className='font-Volkhov text-center font-bold text-3xl my-10 text-[#1E1E1E]'>Stay</h2>
                <div>
                    <div className='relative'>
                        <img src={KOL_IMG1} className='w-[90%] mx-auto' alt="" />
                        <div className='absolute bottom-5 flex gap-5 flex-col items-end right-20'>
                            <h3 className='font-montserrat text-white font-bold text-2xl'>Unforgettable Stays, Memorable Moments</h3>
                            <button className='p-2 text-xs font-montserrat bg-blue-700 text-white rounded-lg'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='max-w-[1110px] mx-auto my-24'>
        <div>
          <h2 className='font-Volkhov text-center font-bold text-3xl text-[#1E1E1E]'>Testimonials</h2>
        </div>
        <div className='flex justify-around mt-20'>
          <div>
            <h2 className='text-[#3A3BF8] text-4xl font-Volkhov'>What People Say </h2>
            <h2 className='text-[#3A3BF8] text-4xl font-Volkhov'> About us.</h2>
            <p className='text-sm mt-10 opacity-80 font-montserrat font-light w-[50%]'>Explore our interactive map to find exact location. Whether you're looking for Kolukkumalai Camp.</p>
          </div>
          <div>
            <img src={MAP} className='' alt="" srcset="" />
          </div>
        </div>
        </section>

    </main>
  )
}

export default Kolukkumalai
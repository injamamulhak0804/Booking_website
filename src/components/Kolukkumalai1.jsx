import React from 'react'
import { KOL1, STAY_IMG1, STAY_IMG2 } from '../utils/helper'
import Header from './Header'

const Kolukkumalai1 = () => {
  return (
    <main>
        <div
        className="w-full overflow-hidden h-screen relative bg-cover bg-center"
        style={{
        backgroundImage: `url(${KOL1})`,
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
              <h2 className='font-Volkhov text-center font-bold text-3xl my-10 text-[#1E1E1E]'>Stay</h2>
            </div>
            <div className='flex flex-col mb-10 gap-10'>
                <div className='flex gap-5'>
                    <div className='flex justify-between'>
                        <div className='relative'>
                          <img src={STAY_IMG1} className='w-[90%] object-cover' alt="" srcset="" />
                          <p className="absolute bottom-0 right-24 font-montserrat font-bold text-2xl text-white">Tent Stay</p>
                        </div>
                    </div>
                    <div className='max-w-[40%] flex flex-col gap-5'>
                      <h3 className='font-montserrat text-[#4E4E73] font-bold text-xl'>Book Your Tent Stay Today!</h3>
                      <p className='font-montserrat text-sm font-light'>Start your adventure by using booking considered one of our curated tent remains. Whether you're after a non violent retreat or an adrenaline-filled outdoor break out, we've got the perfect enjoy expecting you. </p>
                      <div className='mt-10'>
                        <button className='border border-[#3A3BF8] font-poppins m-2 w-5/12 rounded-lg px-4 py-2 text-[#3A3BF8]'>View gallery</button>
                        <button className='px-4 py-3 text-sm font-poppins bg-blue-700 text-white w-5/12 rounded-lg'>Book Now</button>
                      </div>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className='flex justify-between'>
                        <div className='relative'>
                          <img src={STAY_IMG2} className='w-[90%] object-cover' alt="" srcset="" />
                          <p className="absolute bottom-0 right-24 font-montserrat font-bold text-2xl text-white">Wooden Tent Stay</p>
                        </div>
                    </div>
                    <div className='max-w-[40%] flex flex-col gap-5'>
                      <h3 className='font-montserrat text-[#4E4E73] font-bold text-xl'>Book Your Wooden Tent Stay Today!</h3>
                      <p className='font-montserrat text-sm font-light'>Unplug, unwind, and reconnect with nature in one among our fantastically crafted wood tents. Whether you're seeking a romantic getaway, a own family retreat, or an adventurous break out.</p>
                      <div className='mt-10'>
                        <button className='border border-[#3A3BF8] font-poppins m-2 w-5/12 rounded-lg px-4 py-2 text-[#3A3BF8]'>View gallery</button>
                        <button className='px-4 py-3 text-sm font-poppins bg-blue-700 text-white w-5/12 rounded-lg'>Book Now</button>
                      </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='max-w-[1110px] mx-auto mt-32'>
          <div>
            <h2 className='font-Volkhov text-center font-bold text-3xl my-10 text-[#1E1E1E]'>Contact us</h2>
            <p className='font-montserrat font-bold text-[#5E6282] text-center'>Inquiry to get information, latest news and other interesting offers about mountide</p>
            
            <div class="flex flex-wrap mx-auto mt-16 max-w-[80%] mb-6 font-montserrat">
              <div class="w-full md:w-1/2 px-3  md:mb-8">
                <label class="block capitalize text-sx tracking-wide text-[#8989B3] text-xs font-regular mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-lg bg-transparent py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              </div>
              <div class="w-full md:mb-8 md:w-1/2 px-3">
                <label class="block capitalize text-sx tracking-wide text-[#8989B3] text-xs font-regular mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg bg-transparent py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
              <div class="w-full md:mb-8 md:w-1/2 px-3">
                <label class="block capitalize text-sx tracking-wide text-[#8989B3] text-xs font-regular mb-2" for="grid-last-name">
                Destination
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg bg-transparent py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="eg. chennai" />
              </div>
              <div class="w-full md:mb-8 md:w-1/2 px-3">
                <label class="block capitalize text-sx tracking-wide text-[#8989B3] text-xs font-regular mb-2" for="grid-last-name">
                Phone number
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg bg-transparent py-3 px-4 leading-tight focus:outline-none focus:bg-white placeholder:text-sm focus:border-gray-500" id="grid-last-name" type="text" placeholder="91+ 99999 99999" />
              </div>
              <div class="w-full md:mb-8 px-3">
                <label class="block capitalize text-sx tracking-wide text-[#8989B3] text-xs font-regular mb-2" for="grid-last-name">
                Your message
                </label>
                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 pb-32 rounded-lg bg-transparent py-3 px-4 leading-tight focus:outline-none focus:bg-white placeholder:text-sm focus:border-gray-500" id="grid-last-name" type="text" placeholder="Type here........." />
              </div>
            </div>

          </div>
        </section>
        
    </main>
  )
}

export default Kolukkumalai1
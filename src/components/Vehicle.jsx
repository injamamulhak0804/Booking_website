import React from 'react'
import { BUS, LAMP } from '../utils/helper'
import Header from './Header'

const Vehicle = () => {
  return (
    <main className='bg-[#f0f0f0] pb-44'>
        <section className='max-w-[1110px] mx-auto'>
            <div className='pt-5'>
                <Header color={"black"} />
            </div>
            <div>
                <h2 className='font-Volkhov text-center font-bold text-3xl my-16 text-[#1E1E1E]'>Book your Vechile</h2>
            </div>
            <div>
                <div className='flex items-baseline justify-center'>
                    <img src={LAMP} alt="" />
                    <img src={BUS} alt="" />
                </div>
            </div>
        </section>
        <section className='p-12 shadow bg-[#FFFFFF] rounded-lg max-w-[70%] mx-auto'>
            <div className='font-montserrat flex justify-center gap-10 font-light text-[#8989B3]'>
                <div className='flex items-center justify-center gap-2'>
                    <input type="radio" id="html" className='w-4 h-4' name="fav_language" value="HTML" />
                    <label  className='font-medium' for="html">Private Travels</label>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <input type="radio" id="html" className='w-4 h-4' checked name="fav_language" value="HTML" />
                    <label for="html" className='font-bold text-black'>School Tour Travels</label>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <input type="radio" id="html" className='w-4 h-4' name="fav_language" value="HTML" />
                    <label className='font-medium'  for="html">College Tour Travels</label>
                </div>
            </div>

            <div className='max-w-[60%] flex items-center flex-col gap-5 mx-auto mt-14'>
                <input type="text" id="first_name" class="bg-[#ECECEC] border border-[#ECECEC]  text-gray-900 text-sm rounded-lg placeholder:text-black placeholder:opacity-70 block placeholder:font-montserrat placeholder:text-xs w-full p-3" placeholder="Name" />
                <input type="text" id="first_name" class="bg-[#ECECEC] border border-[#ECECEC]  text-gray-900 text-sm rounded-lg placeholder:text-black placeholder:opacity-70 block placeholder:font-montserrat placeholder:text-xs w-full p-3" placeholder="Phone" />
                <input type="text" id="first_name" class="bg-[#ECECEC] border border-[#ECECEC]  text-gray-900 text-sm rounded-lg placeholder:text-black placeholder:opacity-70 block placeholder:font-montserrat placeholder:text-xs w-full p-3" placeholder="Destination" />
                <div className='w-full'>
                    <p className='font-montserrat  font-medium text-gray-400 text-sm mb-2'>Departure date</p>
                    <div className='flex gap-2 items-center'>
                        <div className='p-1 flex items-center justify-center flex-col w-16 h-18 bg-[#0BAA4B] rounded-lg text-white font-montserrat border'>
                            <h3 className='font-bold text-lg'>26</h3>
                            <p className='text-sm'>Today</p>
                        </div>
                        <div className='p-1 flex items-center justify-center flex-col w-16 h-18 border-gray-400 rounded-lg text-white font-montserrat border'>
                            <h3 className='font-bold text-lg text-gray-400'>27</h3>
                            <p className='text-sm  text-gray-400'>Fri</p>
                        </div>
                        <div className='p-1 flex items-center justify-center flex-col w-16 h-18 border-gray-400 rounded-lg text-white font-montserrat border'>
                            <h3 className='font-bold text-lg text-gray-400'>28</h3>
                            <p className='text-sm  text-gray-400'>sat</p>
                        </div>
                        <div className='p-1 flex items-center justify-center flex-col w-16 h-18 border-gray-400 rounded-lg text-white font-montserrat border'>
                            <h3 className='font-bold text-lg text-gray-400'>29</h3>
                            <p className='text-sm  text-gray-400'>sun</p>
                        </div>
                        <div className='p-1 flex items-center justify-center flex-col w-16 h-18 border-gray-400 rounded-lg text-white font-montserrat border'>
                            <h3 className='font-bold text-lg text-gray-400'>30</h3>
                            <p className='text-sm  text-gray-400'>mon</p>
                        </div>
                    </div>
                </div>
                <textarea name="" id="" placeholder='message' className='bg-[#ECECEC] w-full text-sm border border-[#ECECEC]  text-gray-900 rounded-lg p-3 pb-28 placeholder:font-montserrat' cols="60"></textarea>
                <button className='px-28 text-sm rounded-lg py-3 bg-[#3A3BF8] font-montserrat text-white'>Book Now</button>
            </div>
        </section>
    </main>
  )
}

export default Vehicle
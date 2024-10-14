import React from 'react';
import { BUS_LAND, DES1, DES2, DES3, IMG_HERO, PERSON } from '../utils/helper';
import Header from './Header';

const Home = () => {
  return (
    <main>
      <div
        className="w-full overflow-hidden h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMG_HERO})`,
          overflowX: "hidden",
        }}
      >
        <div className='max-w-[1110px] mx-auto py-5'>
          <Header />
        </div>
        <div>
          <h1 className='font-montserrat text-white text-3xl max-w-[750px] pt-20 text-center mx-auto'>
            A tour plan is a concise itinerary outlining the 
            <span className='font-extrabold'> Destinations, Activities,</span>
            and <span className='font-extrabold'>Schedule</span> for a trip.
          </h1>
          <div className='bg-white max-w-2xl mx-auto rounded-xl mt-16 p-10'>
            <div className='flex flex-wrap gap-5'>
              <div className='relative w-full md:w-[48%]'>
                <label className='absolute px-2 top-0 left-5 font-montserrat text-sm z-10 bg-white' htmlFor="place">Place</label>
                <input type="text" id='place' className='w-full border-2 p-1 border-black rounded-lg' />
              </div>
              <div className='relative w-full md:w-[48%]'>
                <label className='absolute px-2 -top-1 left-5 font-montserrat text-sm z-10 bg-white' htmlFor="travellers">Travellers</label>
                <input type="text" id='travellers' className='w-full border-2 p-1 border-black rounded-lg' />
              </div>
            </div>
            <div>
              <div className='flex flex-wrap gap-2 mt-5'>
                <div className='relative w-full md:w-[48%]'>
                  <label className='absolute px-2 -top-1 left-5 font-montserrat text-sm z-10 bg-white' htmlFor="from-date">From Date</label>
                  <input type="text" id='from-date' className='w-full border-2 p-1 border-black rounded-lg' />
                </div>
                <div className='relative w-full md:w-[48%]'>
                  <label className='absolute px-2 -top-1 left-5 font-montserrat text-sm z-10 bg-white' htmlFor="to-date">To Date</label>
                  <input type="text" id='to-date' className='w-full border-2 p-1 border-black rounded-lg' />
                </div>
                <button className='w-full md:w-[30%] px-2 py-2.5 text-sm bg-blue-700 rounded-lg text-white font-montserrat'>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destination  */}
      <section className='max-w-[1110px] mx-auto mt-10'>
        <div>
          <h2 className='font-Volkhov text-center font-bold text-3xl text-[#1E1E1E]'>Destiantion</h2>
          <div className='flex gap-5 my-10'>

            <div className='relative'>
              <img src={DES1} alt="" />
              <div className='absolute w-full px-10 bottom-5 flex justify-between items-center'>
                <h3 className='font-montserrat text-white font-bold'>Kolukkumalai</h3>
                <button className='w-full md:w-[30%] px-2 py-2.5 text-sm bg-blue-700 rounded-lg text-white font-montserrat'>
                  View
                </button>
              </div>
            </div>

            <div className='relative'>
                <img src={DES2} alt="" />
                <div className='absolute top-[50%] flex flex-col left-[10%]'>
                  <button className='bg-white bg-opacity-50 p-2 rounded-lg gap-10 text-white '>Kanthallur</button>
                  <h3 className='font-montserrat bg-white-6 text-2xl text-center text-white font-bold'>Coming Soon</h3>
                </div>
            </div>


            <div className='relative'>
                <img src={DES3} alt="" />
                <div className='absolute top-[50%] flex flex-col left-[10%]'>
                  <button className='bg-white bg-opacity-50 p-2 rounded-lg gap-10 text-white '>Kodaikanal</button>
                  <h3 className='font-montserrat bg-white-6 text-2xl text-center text-white font-bold'>Coming Soon</h3>
                </div>
            </div>

          </div>
        </div>
      </section>

      <section className='max-w-[1110px] mx-auto mt-[150px]'>
        <div>
          <h2 className='font-Volkhov text-center font-bold text-3xl text-[#1E1E1E]'>Vehicles</h2>
          <div className='flex justify-between gap-10 mt-10'>

            <div>
              <div className='relative'>
                <img src={BUS_LAND} className='' alt="" />
                <div className='absolute flex px-5 gap-1 items-center justify-between bottom-5'>
                    <p className='w-[60%] text-xs font-montserrat text-white'>Affordable all-inclusive vehicle packages for school and college tours, ensuring safe and comfortable group travel.</p>
                    <button className='w-full md:w-[30%] px-2 py-2.5 text-sm bg-blue-700 rounded-lg text-white font-montserrat'>
                    Book Now
                    </button>
                </div>
              </div>
            </div>
    
            <div className='font-montserrat'>
              <h5 className='text-sm opacity-75 mb-1'>How to travel</h5>
              <h3 className='text-5xl font-bold'>One click for you</h3>
              <div className='mt-10'>

                <div className='ps-5 pe-20 py-5 shadow-lg border border-[#3A3BF8] rounded-xl'>
                  <h3 className='font-bold text-xl text-[#3A3BF8] pb-5'>Private Travels</h3>
                  <p className='text-[12px] text-[#8989B3] font-medium opacity-70'>Affordable all-inclusive vehicle packages for school and college tours, ensuring safe and comfortable group travel.</p>
                </div>

                <div className='ps-5 pe-20 py-5 border-b-2'>
                  <h3 className='font-bold text-xl pb-5'>School Travels</h3>
                  <p className='text-[12px] text-[#8989B3] font-medium opacity-70'>Affordable all-inclusive vehicle packages for school and college tours, ensuring safe and comfortable group travel.</p>
                </div>

                <div className='ps-5 pe-20 py-5 border-b-2'>
                  <h3 className='font-bold text-xl pb-5'>College Travels</h3>
                  <p className='text-[12px] text-[#8989B3] font-medium opacity-70'>Affordable all-inclusive vehicle packages for school and college tours, ensuring safe and comfortable group travel.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1110px]  mt-[150px] mx-auto'>
        <div>
          <h2 className='font-Volkhov text-center font-bold text-3xl text-[#1E1E1E]'>Testimonials</h2>
        </div>
        <div className='flex justify-around mt-20'>

          <div>
            <h2 className='text-[#3A3BF8] text-4xl font-Volkhov'>What People Say </h2>
            <h2 className='text-[#3A3BF8] text-4xl font-Volkhov'> About us.</h2>
          </div>

          <div>
              <div className='relative shadow rounded-lg'>
                <img src={PERSON} className='absolute w-[50px] -top-[40px] -left-[30px]' alt="" />
                <div className='bg-[#F2FFF3] p-5 max-w-[300px]  rounded-lg'>
                  <p className='font-montserrat text-xs'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                  <p className='font-montserrat text-[#34A853] pt-5 font-semibold'>Peter Wilson</p>
                  <p className='font-montserrat text-xs text-[#86B98B]'>Chennai, India</p>
                </div>
              </div>
          </div>
        </div>

      </section>


      <section className='max-w-[1110px]  my-[150px] mx-auto'>
        <div className='mb-10'>
          <h2 className='font-Volkhov text-center font-bold text-3xl text-[#1E1E1E]'>Enquiry</h2>
        </div>
        <div className='max-w-[80%] p-10 rounded-lg bg-[#DCDEFF] mx-auto'>
          <h3 className='font-montserrat font-bold max-w-[60%] opacity-65 mx-auto text-center'>Enquiry to get information, latest news and other
          interesting offers about mountide</h3>
          <div className='font-montserrat mt-10 flex flex-col justify-center items-center gap-10'>
            <input type="text" placeholder='Email' className='py-3 px-4 w-6/12 rounded-lg' />
            <input type="text" placeholder='Phone' className='py-3 px-4 w-6/12 rounded-lg' />
            <input type="text" placeholder='Destination' className='py-3 px-4 w-6/12 rounded-lg' />
            <textarea name="" placeholder='Message' cols={40} className='py-3 px-4 w-6/12 rounded-lg' id=""></textarea>
            <button className='w-full md:w-[50%] px-2 py-2.5 text-sm bg-blue-700 rounded-lg text-white font-montserrat'>
                  Submit
                </button>
          </div>
        </div>

      </section>
      
    </main>
  );
}

export default Home;

import React from 'react'
import { ABOUT_IMG1, ABOUT_IMG2, ABOUT_IMG3, IMG_HERO, MAL_IMG } from '../utils/helper'
import Header from './Header'

const AboutUs = () => {
  return (
    <main>
        <div
        className="w-full overflow-hidden h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMG_HERO})`,
          overflowX: "hidden",
        }}>
          <div className='max-w-[1110px] mx-auto py-5'>
            <Header />
          </div>
          <div className='font-Volkhov text-white w-[40%] mx-auto h-[80%] flex items-center flex-col text-center justify-center'>
              <h2 className='text-6xl'>About Us</h2>
              <p className='font-lato p-3 font-  text-sm'>Welcome to Mountide Travellers</p>
              <p className='font-lato font-  text-sm'>We believe that travel is more than just visiting new places, it's about creating unforgettable experiences. Founded in 2024, our passion for exploration has driven us to curate exceptional tour packages that cater to adventurers, families, and everyone in between.</p>
          </div>
        </div>

        <section className='max-w-[1000px] mx-auto mt-10'>
          <div>
            <h2 className='font-Volkhov text-center font-bold pb-20 text-3xl my-10 text-[#1E1E1E]'>Journey of us</h2>
          </div>

          <div className='flex justify-between'>
            <div className='max-w-md'>
              <h3 className='relative font-Volkhov text-2xl'>
                Vision
                <span className="absolute w-[30%] left-0 right-0 bottom-0 h-[2px] bg-[#00F110]"></span>
              </h3>
                <p className='font-lato pt-5 font-[400] text-[13px] text-[#848383]'>At Mountide Travellers, our vision is to be a leading tour package provider that transforms the way people experience travel. We envision a world where exploration fosters deeper connections—between travellers and destinations, cultures, and communities.</p>
            </div>
            <img src={ABOUT_IMG1} alt="" srcset="" />
          </div>


          <div className='flex mt-32 justify-between'>
          <img src={ABOUT_IMG2} alt="" srcset="" />
            <div className='max-w-md text-right'>
              <h3 className='relative font-Volkhov text-2xl'>
              Mission
                <span className="absolute w-[30%] right-0 bottom-0 h-[2px] bg-[#00F110]"></span>
              </h3>
                <p className='font-lato pt-5 font-[400] text-[13px] text-[#848383]'>Our mission is to inspire wanderlust and make travel accessible to all. We strive to provide unique itineraries that showcase the rich culture, history, and natural beauty of each destination we explore. Whether you’re seeking thrilling adventures, relaxing getaways, or cultural immersions, we’ve got something special just for you.</p>
            </div>
          </div>

          <div className='flex mt-32 justify-between'>
            <div className='max-w-md'>
              <h3 className='relative font-Volkhov text-2xl'>
              Our Promise
                <span className="absolute w-[40%] left-0 right-0 bottom-0 h-[2px] bg-[#00F110]"></span>
              </h3>
                <p className='font-lato pt-5 font-[400] text-[13px] text-[#848383]'>We are committed to providing you with seamless travel experiences, from the moment you book to the day you return home. Our customer-first approach means you can travel with confidence, knowing we are here to support you every step of the way.</p>
            </div>
            <img src={ABOUT_IMG3} alt="" srcset="" />
          </div>

        </section>

        <section className='max-w-[1000px] mx-auto mt-10'>
          <div>
            <h2 className='font-Volkhov text-center font-bold pb-20 text-3xl my-10 text-[#1E1E1E]'>Why Choose Us?</h2>
          </div>
          <ul className='custom-list '>
            <li className='pb-10'>
              <h2 className='font-Volkhov  font-medium text-2xl'>Expert Curated Travel</h2>
              <p className='font-serif max-w-4xl  text-[14px] font-normal ps-12 pt-4'>Our team of experienced travel experts carefully designs each package, ensuring you experience the best that every destination has to offer.</p>
            </li>

            <li className='pb-10'>
              <h2 className='font-Volkhov  font-medium text-2xl'>Personalized Service</h2>
              <p className='font-serif max-w-4xl  text-[14px] font-normal ps-12 pt-4'>We understand that every traveler is unique. Our dedicated team is here to assist you in tailoring your journey to fit your interests and needs.</p>
            </li>
            <li className='pb-10'>
              <h2 className='font-Volkhov  font-medium text-2xl'>Sustainable Practices</h2>
              <p className='font-serif max-w-4xl  text-[14px] font-normal ps-12 pt-4'>We are committed to responsible tourism. Our tours support local communities and minimize environmental impact, allowing you to travel with a conscience</p>
            </li>
            <li className='pb-10'>
              <h2 className='font-Volkhov  font-medium text-2xl'>Sustainable Practices</h2>
              <p className='font-serif max-w-4xl  text-[14px] font-normal ps-12 pt-4'>We focus on creating lasting memories, whether it's sharing a meal with locals, exploring hidden gems, or embarking on thrilling adventures.</p>
            </li>

          </ul>
        </section>
        
    </main>
  )
}

export default AboutUs
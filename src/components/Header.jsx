import React from 'react'
import { LOGO, MOUNTAIN } from '../utils/helper'
import { Link } from 'react-router-dom'

const Header = ({color}) => {
  return (
    <>
        <header className='flex justify-between items-center'>
            <div>
                {/* <img src={MOUNTAIN} className='w-20 bg-black' alt="" /> */}
                <p className='font-semibold text-xl font-montserrat text-black'>Mountide</p>
            </div>
            <div>
            <ul className='font-medium flex text-sm font-montserrat items-center gap-10 text-[#303030]'>
              <Link to="/">Home</Link>
              <Link to="/kol">Destinations</Link>
              <Link to="/Kolukkumalai1">Vehicles</Link>
              <Link to="/aboutus">Testimonials</Link>
              <Link to="/terms_conditions">Enquiry</Link>
              <Link to="/vechile"><button className='p-2 text-sm bg-blue-700 rounded-lg'>Book Now</button></Link>
            </ul>
            </div>
          </header>
    </>
  )
}

export default Header
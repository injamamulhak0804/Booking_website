import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black p-10 flex text-white justify-between font-montserrat'>
        <div>
            <h2 className='text-lg mb-5 font-bold'>Company</h2>
            <p className='font-light text-sm'>About us</p>
            <p className='font-light text-sm'>Terms and Conditions</p>
        </div>
        <div>
            <h2 className='text-lg mb-5 font-bold'>Contact us</h2>
            <p className='font-light text-sm'>mountidetravellers@gmail.com</p>
        </div>
        <div>
            <h2 className='text-lg mb-5 font-bold'>Social</h2>
            <p className='font-light text-sm'>instagram</p>
            <p className='font-light text-sm'>facebook</p>
            <p className='font-light text-sm'>twitter</p>
        </div>
    </div>
  )
}

export default Footer
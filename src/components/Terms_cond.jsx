import React from 'react'
import { IMG_HERO } from '../utils/helper'
import Header from './Header'

const Terms_cond = () => {
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
              <h2 className='text-5xl'>Terms & Conditions</h2>
              <p className='font-lato p-3 font-  text-sm'>Welcome to Mountide Travellers</p>
              <p className='font-lato font-  text-sm'>We believe that travel is more than just visiting new places, it's about creating unforgettable experiences. Founded in 2024, our passion for exploration has driven us to curate exceptional tour packages that cater to adventurers, families, and everyone in between.</p>
          </div>
      </div>


      <section className='max-w-[1000px] mx-auto mt-10'>
          <div>
            <h2 className='font-Volkhov text-center font-bold pb-14 text-3xl my-10 text-[#1E1E1E]'>Journey of us</h2>
          </div>
          <div>
            <div>
              <h2 className='font-serif text-lg font-semibold'>1. Acceptance of Terms:</h2>
              <p className='font-serif text-sm p-5'>  By booking a tour or travel package with mountide travellers, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before making a reservation.</p>
            </div>

            <div>
              <h2 className='font-serif text-lg font-semibold'>2. Booking and Payment</h2>
              <ul className='list-disc font-serif text-sm ps-10 '>
                <li className='pt-5'>Reservation: To secure your booking, a deposit of amount is required at the time of booking.</li>
                <li>Payment Methods: We accept various payment methods.</li>
                <li>Pricing: All prices are subject to change until the booking is confirmed. Final prices will be provided at the time of booking.</li>
              </ul>
            </div>

            <div>
              <h2 className='font-serif text-lg font-semibold mt-10'>3. Cancellation Policy</h2>
              <ul className='list-disc font-serif text-sm ps-10 '>
                <li className='pt-5'>By the Customer: Cancellations must be made in writing. The following cancellation fees apply:</li>
                <li className='ms-5'>You must notify the cancellation 48 hours prior to the journey date, if you cancel at that moment full refund will be provided.</li>
                <li className='ms-5'>If you cancel before 24 hours from the date of travel, Rs 500 will be charged, and the remaining amount will be refunded.</li>
                <li className='ms-5'>If you cancel on the last day, no refund will be provided.</li>
                <li>By Us: We reserve the right to cancel any tour for reasons beyond our control (e.g., natural disasters, political instability). In such cases, you will receive a full refund or an alternative package.</li>
              </ul>
            </div>

            <div>
              <h2 className='font-serif text-lg font-semibold mt-5'>4. Travel Insurance</h2>
              <p className='font-serif text-sm p-5'>We strongly recommend that you purchase travel insurance to cover unforeseen circumstances, including trip cancellations, medical emergencies, and lost luggage.</p>
            </div>

            <div>
              <h2 className='font-serif text-lg font-semibold'>5. Changes to Itinerary</h2>
              <p className='font-serif text-sm p-5'>We strive to provide all services as outlined in the itinerary. However, we reserve the right to make changes due to circumstances beyond our control. We will inform you of any significant changes as soon as possible.</p>
            </div>

            <div>
              <h2 className='font-serif text-lg font-semibold'>6. Traveler Responsibilities</h2>
              <ul className='list-disc font-serif text-sm ps-10 '>
                <li className='pt-5'>Health and Safety: It is your responsibility to inform us of any medical conditions or special requirements at the time of booking.</li>
                <li>Documentation: You must have valid travel documents (e.g., passports, visas) and comply with the entry requirements of the destination country.</li>
              </ul>
            </div>

            <div>
              <h2 className='font-serif text-lg pt-5 font-semibold'>7. Liability</h2>
              <p className='font-serif text-sm p-5'>While we take every precaution to ensure a safe and enjoyable experience, mountide travellers is not liable for any loss, injury, or damage to persons or property that occurs during the tour. We are not responsible for the actions of third-party service providers.</p>
            </div>

            <div>
              <h2 className='font-serif text-lg font-semibold'>8. Force Majeure</h2>
              <p className='font-serif text-sm p-5'>
              We are not liable for any failure to perform our obligations due to events beyond our control, such as natural disasters, war, terrorism, or governmental actions.</p>
            </div>

            <div>
              <h2 className='font-serif text-lg font-semibold'>9. Governing Law</h2>
              <p className='font-serif text-sm p-5'>These Terms and Conditions shall be governed by and construed in accordance with the laws of Indian Government. Any disputes arising from these terms shall be settled in the appropriate courts of Indian Law.</p>
            </div>
            <div>
              <h2 className='font-serif text-lg font-semibold'>10. Changes to Terms and Conditions</h2>
              <p className='font-serif text-sm p-5'>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting on our website.</p>
            </div>

            <div>
              <h2 className='font-serif text-lg font-semibold'>11. Contact Information</h2>
              <p className='font-serif text-sm p-5'>For any questions regarding these Terms and Conditions, please contact us at:</p>
              <ul className='list-disc font-serif text-sm ps-10 '>
                <li>Email: mountidetravellers@gmail.com</li>
                <li>Phone: +91 90801 17398</li>
              </ul>
            </div>

          </div>
      </section>


    </main>
  )
}

export default Terms_cond
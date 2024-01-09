import React from 'react'
import contactman from '../../assets/images/contactman.png'

function Packages() {
  return (
    <div id='packages' className='package-wrapper d-flex flex-column h-100'>
        <h3>Our Packages Includes...</h3>
        {/* <div className='package-contact'>
        <img src={contactman} alt=''/>
        </div> */}
        <div className='package-container'>
            <div className='package-card'>
                <div className='package-box'>
                    <div className='package-content'>
                        <h2 className='d-flex justify-content-center align-items-center gap-3'> <i className="bi bi-bicycle text-success icons"></i> Day Out Plan</h2>
                        <p>Starts from <span className='package-price'>&#x20B9; 1200/- </span> including food and Activities.<small>(taxes extra)</small></p>
                        <ul className='px-3'>
                            <li><p>Booking open two weeks in advance.</p></li>
                            <li><p>Timing: 9 AM to 6 PM</p></li>
                            <li><p>Weekend plans are higher</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='package-card'>
                <div className='package-box'>
                    <div className='package-content pt-5'>
                        <h2 className='d-flex justify-content-center align-items-center gap-3 mt-4'><i className="bi bi-house text-success icons"></i> Stay Plan</h2>
                        <p>Starts from <span className='package-price'>&#x20B9; 6500/- </span> including food and Activities.<small>(taxes extra)</small></p>
                        <ul className='mb-4 px-3'>
                            <li><p>Nalukettu, House boat, and Ettukettu</p></li>
                            <li><p>Three times food and refreshments provided.</p></li>
                            <li><p>Weekend plans are higher</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Packages
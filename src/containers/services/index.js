import { Button } from 'bootstrap';
import React, { useEffect, useRef } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';




function Services() {
    // const navigate = useNavigate()
    const tiltRef = useRef();
    useEffect(() => {
        if (tiltRef.current) {
          VanillaTilt.init(tiltRef.current, {
            max: 25,
            speed: 400,
            glare: false,
            // 'max-glare': 0.5,
          });
        }
      }, []);
  return (
    <div id='services' className='services-body'>
        <div ref={tiltRef}>
            <h1>Our Diverse Offerings Includes..</h1>
        </div>
    <div className='services-wrapper' ref={tiltRef}>
        <div className='item-card'>
            <div className='item-content'>
                <h3>Farm</h3>
                <p>Spread across 32 acres of pristine land, the farm has abundant fruit...</p>
                <a href='farm' >See More</a>
            </div>
        </div>
        <div className='item-card'>
            <div className='item-content'>
                <h3>Stay</h3>
                <p>Thanima offers comfortable stay in three different room categories.</p>
                <a href='stay' >See More</a>
            </div>
        </div>
        <div className='item-card'>
            <div className='item-content'>
                <h3>Activities</h3>
                <p>20+ funfilled activities for eldeers as well as kids.</p>
                <a href='activities'>See More</a>
            </div>
        </div>
        <div className='item-card'>
            <div className='item-content'>
                <h3>Farm to table</h3>
                <p>Delectable recipes created with farm-sourced ingredients.</p>
                <a href='#' >See More</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services
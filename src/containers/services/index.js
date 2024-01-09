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
    <div id='activities' className='services-body'>
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
                <h3>Adventures</h3>
                <p>Lorem ipsum details section. This is a sample demo content</p>
                <a href='adventures'>See More</a>
            </div>
        </div>
        <div className='item-card'>
            <div className='item-content'>
                <h3>Farm to table</h3>
                <p>Lorem ipsum details section. This is a sample demo content</p>
                <a href='dishes' >See More</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services
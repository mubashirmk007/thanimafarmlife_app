import React, { useEffect, useState } from 'react'
import bgvideo from '../../assets/images/bg-video.mp4'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'


function Home({refs,setAciveId, setShowComponents}) {
  // const navigate = useNavigate()
  // const handleExpolre = () => {
  //   navigate('/#activities')
    
  // }
  return (
    <div id='home' className='home-wrapper'>
      <video className='video-slide' src={bgvideo} autoPlay muted loop></video>
        <div className='content'> 
          <h1><span>Welcome to</span> <br/> Thanima Farm Life</h1>
          <p>A verdant farm on the outskirts of Palakkad town in Kerala offering unique stays, dayout package, adventure sports and curated experiences.</p>
          <Link type='button' to='activities'>Explore</Link>
        </div>
        <div className='media-icons'>
          <a href='#'><i class="bi bi-facebook"></i></a>
          <a href='#'><i className='bi bi-instagram'></i></a>
          <a href='#'><i className='bi bi-twitter'></i></a>
        </div>
    </div>
  )
}

export default Home
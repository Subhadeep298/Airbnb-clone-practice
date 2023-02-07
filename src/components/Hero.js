import React from 'react'
import pic from '../images/Group77.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={pic} alt="PIC" className='hero-pic'/>
        <h1>Online Experiences</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum laboriosam, aperiam veritatis quos quidem repellat!</p>
    </div>
  )
}

export default Hero
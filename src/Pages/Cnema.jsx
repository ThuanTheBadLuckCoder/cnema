import React from 'react'
import './Cnema.css'
import MultipleItems from '../Components/Slider/NewestFilm'
const Cnema = () => {
  return (
    <div className='Cnema'>
      <h1>Find your Movies</h1>


      <div className='sliderCard'>
        <MultipleItems/>
      </div>
    </div>



  )
}

export default Cnema

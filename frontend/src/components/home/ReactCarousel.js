import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const ReactCarousel = () => {
  return (
    <div style={{ width: '100%', padding: '20px 20%' }}>
      <Carousel interval={10000} autoPlay infiniteLoop>
        <div style={{ width: '100%', height: '500px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src='../../../images/dance2.jpg'
          />
          <p className='legend'>Babong Centre Market</p>
        </div>
        <div style={{ width: '100%', height: '500px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src='../../../images/dance2.jpg'
          />
          <p className='legend'>Chief Palace</p>
        </div>
        <div style={{ width: '100%', height: '500px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src='../../../images/dance2.jpg'
          />
          <p className='legend'>Babon Council</p>
        </div>
      </Carousel>
    </div>
  )
}

export default ReactCarousel

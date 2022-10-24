import React from 'react'
import ReactCarousel from './ReactCarousel'

const SomeInterestedSites = () => {
  return (
    <div style={{ width: '100%' }}>
      <p
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#367E18',
          fontFamily: "'Noto Serif', serif",
        }}
      >
        TOURISTIC AND INTERESTING SITES
      </p>
      <p
        style={{
          width: '100%',
          padding: '0 20%',
          fontSize: '1.8rem',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Tincidunt vitae semper quis lectus nulla at. Rutrum quisque non tellus
        orci ac auctor augue. Quisque egestas diam in arcu cursus. Cursus
        euismod quis viverra nibh cras pulvinar mattis. Venenatis cras sed felis
        eget velit aliquet.
      </p>
      <ReactCarousel />
    </div>
  )
}

export default SomeInterestedSites

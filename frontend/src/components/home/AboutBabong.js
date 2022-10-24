import React from 'react'

const AboutBabong = () => {
  return (
    <div style={{ width: '100%', height: '600px', padding: '0 5%' }}>
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 'bolder',
          color: '#367E18',
          fontFamily: "'Noto Serif', serif",
        }}
      >
        DETAIL DESCRIPTION ABOUT BABONG VILLAGE
      </h2>
      <div
        style={{
          width: '100%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
          fontSize: '1.8rem',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            width: '50%',
            height: '450px',
            background: '#367E18',
            color: 'white',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque habitant morbi tristique senectus et netus. Scelerisque
          felis imperdiet proin fermentum leo. Lectus vestibulum mattis
          ullamcorper velit sed ullamcorper. Dui nunc mattis enim ut. Quis
          auctor elit sed vulputate mi. Vulputate odio ut enim blandit. Vel quam
          elementum pulvinar etiam non quam. Sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper morbi. Laoreet sit amet cursus sit
          amet dictum sit amet. Id diam maecenas ultricies mi eget mauris
          pharetra et ultrices. Massa vitae tortor condimentum lacinia quis vel.
          Tortor at risus viverra adipiscing. Sit amet commodo nulla facilisi.
          Erat nam at lectus urna duis convallis. Rhoncus urna neque viverra
          justo. At tempor commodo ullamcorper a lacus vestibulum sed arcu.
          Lectus urna duis convallis convallis tellus.
          <a
            style={{
              background: 'white',
              marginTop: '20px',
              fontSize: '1.6rem',
            }}
            href='#'
            className='btn'
          >
            See details
          </a>
        </div>
        <div
          style={{
            width: '50%',
            height: '450px',
            overflow: 'hidden',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src='../../../images/village.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutBabong

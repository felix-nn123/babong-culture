import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import video from './video/video.mp4'

const Header = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          background: 'black',
          opacity: '0.9',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '60%', paddingLeft: '7%' }}>
          <h1
            style={{
              color: 'white',
              fontWeight: 'bolder',
              fontSize: '4.5rem',
              lineHeight: '1.5',
              fontFamily: "'Noto Serif', serif",
            }}
          >
            LEARN MORE ABOUT BABONG VILLAGE AND HELP US TO BUILD A BETTER
            COMMUNITY
          </h1>

          <p
            style={{
              color: 'white',
              opacity: '1',
              fontWeight: 'bold',
              fontSize: '2rem',
              lineHeight: '1.6',
              letterSpacing: '1.5px',
            }}
          >
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.voluptate velit.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              paddingRight: '10%',
              marginTop: '25px',
            }}
          >
            <a
              style={{
                background: '#367E18',
                padding: '1.8rem',
                borderRadius: '20px',
                fontWeight: 'bold',
                color: 'white',
                border: '1px solid white',
                fontSize: '1.4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className='btn'
            >
              LEARN MORE ABOUT US
              <FontAwesomeIcon
                style={{
                  fontSize: '20px',
                  color: 'white',
                  opacity: '0.7',
                  marginLeft: '8px',
                }}
                icon={faArrowRight}
              />
            </a>
            <a
              style={{
                // background: '#367E18',
                padding: '1.8rem',
                borderRadius: '20px',
                fontWeight: 'bold',
                color: 'white',
                border: '1px solid white',
                fontSize: '1.4rem',
                marginLeft: '20px',
                width: '220px',
              }}
              className='btn'
            >
              DONATE FUND
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'black',
        }}
      >
        <video
          style={{ width: '100%', height: '100%', opacity: '1' }}
          autostart
          autoPlay
          loop
          muted
        >
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

export default Header

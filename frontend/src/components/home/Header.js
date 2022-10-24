import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSackDollar } from '@fortawesome/free-solid-svg-icons'

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
            LEARN MORE ABOUT{' '}
            <span
              style={{
                color: '#367E18',
                // fontStyle: 'italic',
                padding: '5px',
                border: '1px solid #367E18',
              }}
            >
              BABONG VILLAGE
            </span>{' '}
            AND HELP US TO BUILD A BETTER COMMUNITY
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
              zIndex: '3',
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
              href='#'
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
              <FontAwesomeIcon
                style={{
                  fontSize: '20px',
                  color: 'white',
                  opacity: '1',
                  marginLeft: '8px',
                }}
                icon={faSackDollar}
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '40%',
          height: '100vh',
          paddingTop: '15vh',
          zIndex: '2',
          position: 'absolute',

          right: '0',
        }}
      >
        <form
          style={{
            marginLeft: '50px',
            position: 'absolute',
            right: '10px',
            //               zIndex: '5',
          }}
          className='d-flex'
          role='search'
        >
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            style={{
              width: '35rem',
              fontSize: '1.6rem',
              padding: '15px',
              borderRadius: '20px',
            }}
          />
          <button
            style={{
              color: 'white',
              fontSize: '1.6rem',
              borderRadius: '15px',
              padding: '5px 20px',
            }}
            className='btn btn-outline-success'
            type='submit'
          >
            Search
          </button>
        </form>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'black',
          position: 'absolute',
          zIndex: '-1',
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

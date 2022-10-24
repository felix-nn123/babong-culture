import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {
  faUsersRays,
  faCirclePlay,
  faCirclePause,
  faForwardFast,
  faBackwardFast,
} from '@fortawesome/free-solid-svg-icons'

const ChiefsAndLeadership = () => {
  return (
    <div style={{ width: '100%' }}>
      <p
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: "'Noto Serif', serif",
          color: '#367E18',
        }}
      >
        LEADERSHIP
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '20px',
            fontWeight: 'bolder',
            color: 'black',
            opacity: '0.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Learn More About Our Recent Chief
        </h1>
        <div style={{ marginLeft: '15px' }}>
          <a
            href='#'
            className='btn'
            style={{
              padding: '7px 20px',
              background: '#367E18',
              margin: '0 auto',
              border: '1px solid #367E18',
              color: 'white',
              fontSize: '1.8rem',
              borderRadius: '20px',
            }}
          >
            View All Chiefs
          </a>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '0 10% 50px 10%',
          marginTop: '50px',
        }}
      >
        <div
          style={{
            width: '50%',
            height: '700px',
            overflow: 'hidden',
            borderRadius: '100%',
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src='../../../images/chief2.jpg'
          />
        </div>
        <div
          style={{
            width: '50%',
            background: '#1A4D2E',
            marginLeft: '20px',
            borderRadius: '10px',
            padding: '20px',
            color: 'white',
            opacity: '0.9',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: "'PT Serif', serif",
              marginBottom: '0',
            }}
          >
            Chief Mojanja Epie
          </h1>
          <p
            style={{
              textAlign: 'center',
              marginTop: '0',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '0',
            }}
          >
            chief of Babong Village
          </p>
          <p
            style={{
              marginBottom: '20px',
              marginTop: '0',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            2022 - today
          </p>
          <p style={{ textIndent: '5rem', fontSize: '1.8rem' }}>
            Dui id ornare arcu odio ut sem nulla pharetra. Ultricies leo integer
            malesuada nunc. Sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec pretium. Risus ultricies tristique nulla
            aliquet. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum.
            Consequat id porta nibh venenatis cras. Mi sit amet mauris commodo
            quis. Pharetra et ultrices neque ornare. Montes nascetur ridiculus
            mus mauris vitae ultricies leo. Donec ac odio tempor orci dapibus
            ultrices in iaculis nunc. Semper eget duis at tellus at
          </p>
          <p style={{ textIndent: '5rem', fontSize: '1.8rem' }}>
            Dui id ornare arcu odio ut sem nulla pharetra. Ultricies leo integer
            malesuada nunc. Sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec pretium. Risus ultricies tristique nulla
            aliquet. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum.
            Consequat id porta nibh venenatis cras. Mi sit amet mauris commodo
            quis. Pharetra et ultrices neque ornare. Montes nascetur ridiculus
            mus mauris vitae ultricies leo. Donec ac odio tempor orci dapibus
            ultrices in iaculis nunc. Semper eget duis at tellus at
          </p>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: '50px',
                color: 'white',
                opacity: '0.7',
                marginLeft: '8px',
              }}
              icon={faCrown}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: '50%',
          padding: '5px 2% 20px 2%',
          background: '#1A4D2E',
          borderRadius: '10px',
          margin: '10px auto',
          border: '1px solid white',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '10px',
            color: 'white',
            fontFamily: "'Noto Serif', serif",
          }}
        >
          <div style={{ width: '80%', margin: '5px 0' }}>
            <b>Listen To Recent Speech Of Our Chief</b>
            <Link
              to='#'
              style={{
                padding: '5px 7px',
                border: '1px solid white',
                borderRadius: '10px',
                background: '#367E18',
                color: 'white',
                marginLeft: '10px',
                textDecoration: 'none',
              }}
            >
              Listen To All 120 Speeches
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ fontSize: '1.2rem', color: '#367E18' }}>
              Listed on :
            </div>
            <div
              style={{ fontSize: '1.2rem', marginLeft: '10px', color: 'white' }}
            >
              28 th Dec 2023
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', width: '100%' }}>
          <FontAwesomeIcon
            style={{
              fontSize: '50px',
              color: 'white',
              marginLeft: '8px',
              cursor: 'pointer',
              position: 'absolute',
              zIndex: '2',
            }}
            icon={faCirclePlay}
          />

          <div style={{ width: '90%', marginLeft: '10%' }}>
            <audio
              style={{ width: '100%' }}
              controls
              src='/media/cc0-audio/t-rex-roar.mp3'
            >
              <a href='/media/cc0-audio/t-rex-roar.mp3'>Download audio</a>
            </audio>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChiefsAndLeadership

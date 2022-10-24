import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const EventCard = () => {
  return (
    <div
      style={{
        width: '395px',
        height: '350px',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundImage: 'url(../../../images/dance.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: '0.9',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'black',
          opacity: '0.9',
        }}
      >
        {/* date schedule */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '10px',
            background: '#367E18',
            opacity: '1',
            position: 'absolute',
            marginLeft: '7px',
            marginTop: '7px',
            //             padding: '7px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <b
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.8rem',
              fontFamily: "'PT Serif', serif",
              marginBottom: '0',
              padding: '0',
            }}
          >
            27 th
          </b>
          <p
            style={{
              color: 'white',
              marginBottom: '0',
              marginTop: '0',
              padding: '0',
              fontSize: '1.8rem',
            }}
          >
            Jun
          </p>
        </div>

        {/* the village group */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            color: '#367E18',
            marginLeft: '200px',
            marginTop: '30px',
          }}
        >
          <b style={{ fontSize: '1.4rem' }}>organisers :</b>
          <span
            style={{ fontSize: '1.4rem', color: 'white', marginLeft: '10px' }}
          >
            BACUDA
          </span>
        </div>

        {/* topic sentence */}
        <p
          style={{
            marginTop: '100px',
            textAlign: 'center',
            position: 'absolute',
            width: '395px',
          }}
        >
          <b
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: "'Noto Serif', serif",
              fontSize: '2rem',
            }}
          >
            Generate Lorem Ipsum placeholder
          </b>
        </p>

        {/* time and location  */}
        <div
          style={{
            width: '22.5%',
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            marginTop: '135px',
          }}
        >
          <div
            style={{
              width: '25%',
              display: 'flex',
              flexDirection: 'row',
              color: 'white',
              marginLeft: '20px',
              alignItems: 'center',
              width: '50%',
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: '1.2rem',
                color: '#367E18',
                opacity: '0.7',
              }}
              icon={faClockFour}
            />
            <span style={{ fontSize: '1.2rem', marginLeft: '10px' }}>
              8:00 am - 12:30 pm
            </span>
          </div>

          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              width: '50%',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: '1.2rem',
                color: '#367E18',
                opacity: '0.7',
              }}
              icon={faLocationDot}
            />
            <span
              style={{ fontSize: '1.2rem', marginLeft: '10px', color: 'white' }}
            >
              Limbe, south west region
            </span>
          </div>
        </div>

        {/* the topic message */}
        <div
          style={{
            marginTop: '170px',
            position: 'absolute',
            width: '395px',
            padding: '0 10px',
            color: 'white',
            fontSize: '1.4rem',
          }}
        >
          augue. Ut enim blandit volutpat maecenas volutpat blandit aliquam.
          Sollicitudin aliquam ultrices sagittis orci a. Ut ornare lectus sit
          amet est placerat........
        </div>
        <div
          style={{
            position: 'absolute',
            marginTop: '280px',
            paddingLeft: '10px',
          }}
        >
          <a
            href='#'
            style={{
              padding: '7px 15px',
              textDecoration: 'none',
              border: '1px solid #367E18',
              color: '#367E18',
              borderRadius: '20px',
              fontWeight: 'bold',
            }}
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  )
}

export default EventCard

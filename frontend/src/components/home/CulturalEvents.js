import React from 'react'
import EventCard from './EventCard'

const CulturalEvents = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '600px',
        background: '#367E18',
        padding: '10px 0 50px 0',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '0',
          marginTop: '30px',
        }}
      >
        <b
          style={{
            textAlign: 'center',
            fontSize: '1.6rem',
            color: 'white',
            fontFamily: "'Noto Serif', serif",
          }}
        >
          UPCOMING EVENTS
        </b>
      </div>
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
          Experience Our Culture By Coming To Our Upcoming Event
        </h1>
        <div style={{ marginLeft: '15px' }}>
          <a
            href='#'
            className='btn'
            style={{
              padding: '7px 20px',
              background: 'white',
              margin: '0 auto',
              border: '1px solid #367E18',
              color: '#367E18',
              fontSize: '1.8rem',
              borderRadius: '20px',
            }}
          >
            View All Events
          </a>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          padding: '0 10%',
          display: 'flex',
          flexDirection: 'row',
          height: '500px',
        }}
      >
        <div
          style={{
            width: '30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1%',
          }}
        >
          <EventCard />
        </div>
        <div
          style={{
            width: '30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1%',
          }}
        >
          <EventCard />
        </div>
        <div
          style={{
            width: '30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1%',
          }}
        >
          <EventCard />
        </div>
      </div>
    </div>
  )
}

export default CulturalEvents

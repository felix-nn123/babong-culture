import React from 'react'

import { Link } from 'react-router-dom'

const Dropdown = ({
  src = '../../../images/dance2.jpg',
  topic = 'BABONG BEAUTIFUL CULTURE',
  body = (
    <div style={{ width: '100%', padding: '5px 0px 10px 0px' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <div style={{ borderBottom: '2px solid white' }}>
          <Link
            to='/monikim'
            style={{
              textDecoration: 'none',
              color: 'white',
              width: '100%',
              height: '100%',
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              Monekim Dance Group
            </div>
          </Link>
        </div>
        <div style={{ borderBottom: '2px solid white' }}>
          <Link
            to='/monikim'
            style={{
              textDecoration: 'none',
              color: 'white',
              width: '100%',
              height: '100%',
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              Obasi Njong Dance Group
            </div>
          </Link>
        </div>
      </div>
    </div>
  ),
}) => {
  return (
    <div
      style={{
        width: '250px',
        marginLeft: '-50px',
        position: 'fixed',
        zIndex: '10',
      }}
    >
      <div
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          margin: '0 auto',
          height: '10px',
          width: '20px',
          background: 'white',
          border: '2px solid white',
        }}
      />

      <div
        style={{
          width: '100%',
          color: 'white',
          border: '1px solid white',
          borderRadius: '5px',
          background: '#367E18',
          borderRadius: '5px',
          border: '1px solid white',
          color: 'white',
          padding: '5px 10px 10px 10px',
        }}
      >
        <div>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '1.4rem',
              textAlign: 'center',
              fontFamily: "'Noto Serif', serif",
            }}
          >
            {topic}
          </p>
          <div style={{ width: '100%', height: '1px', background: 'white' }} />
          {body}
        </div>
        <div
          style={{
            width: '100%',
            height: '150px',
            background: 'white',
            borderRadius: '10px',

            overflow: 'hidden',
          }}
        >
          <img style={{ width: '100%', height: '100%' }} src={src} />
        </div>
      </div>
    </div>
  )
}

export default Dropdown

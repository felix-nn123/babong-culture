import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPenSquare,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

const DropdownProfile = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: '250px',
        right: '5px',
        position: 'fixed',
        zIndex: '10',
        top: '40px',
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
            Profile
          </p>
          <div style={{ width: '100%', height: '1px', background: 'white' }} />
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
                    <FontAwesomeIcon
                      style={{
                        fontSize: '18px',
                        color: 'white',

                        marginRight: '7px',
                      }}
                      icon={faPenSquare}
                    />
                    Edit Profile
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
                    {' '}
                    <FontAwesomeIcon
                      style={{
                        fontSize: '18px',
                        color: 'white',

                        marginRight: '7px',
                      }}
                      icon={faRightFromBracket}
                    />
                    Logout
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropdownProfile

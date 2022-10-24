import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  faUsersRays,
  faCirclePlay,
  faCirclePause,
  faForwardFast,
  faBackwardFast,
} from '@fortawesome/free-solid-svg-icons'

const SomeDanceGroups = () => {
  return (
    <div style={{ width: '100%', padding: '50px 10%', background: '#367E18' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: "'Noto Serif', serif",
            fontSize: '3rem',
          }}
        >
          Some Village Dance Group
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
            View All Dance Groups
          </a>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '50%',
            height: '300px',
            overflow: 'hidden',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src='../../../images/dance2.jpg'
          />
        </div>
        <div
          style={{
            width: '50%',
            height: '300px',
            background: '#1A4D2E',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            padding: '20px',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                opacity: '0.7',
                marginLeft: '8px',
              }}
              icon={faUsersRays}
            />
          </div>
          <p
            style={{
              textAlign: 'center',
              color: 'white',
              marginTop: '20px',
              fontWeight: 'bold',
              fontFamily: "'PT Serif', serif",
            }}
          >
            MONECHIM DANCE GROUP
          </p>
          <p
            style={{
              color: 'white',
              padding: '10px',
              border: '1px solid white',
              borderRadius: '5px',
            }}
          >
            Tincidunt vitae semper quis lectus nulla at. Rutrum quisque non
            tellus orci ac auctor augue. Quisque egestas diam in arcu cursus.
            Cursus euismod quis viverra nibh cras pulvinar mattis. Venenatis
            cras sed felis eget velit aliquet. Tincidunt vitae semper quis
            lectus nulla at. Rutrum quisque non tellus orci ac auctor augue.
            Quisque egestas diam in arcu cursus. Cursus euismod quis viverra
            nibh cras pulvinar mattis. Venenatis cras sed felis eget velit
            aliquet.
          </p>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '50%',
            height: '300px',
            background: '#1A4D2E',
            padding: '20px',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                opacity: '0.7',
                marginLeft: '8px',
              }}
              icon={faUsersRays}
            />
          </div>
          <p
            style={{
              textAlign: 'center',
              color: 'white',
              marginTop: '20px',
              fontWeight: 'bold',
              fontFamily: "'PT Serif', serif",
            }}
          >
            OBASI NGONG DANCE GROUP
          </p>
          <p
            style={{
              color: 'white',
              padding: '10px',
              border: '1px solid white',
              borderRadius: '5px',
            }}
          >
            Tincidunt vitae semper quis lectus nulla at. Rutrum quisque non
            tellus orci ac auctor augue. Quisque egestas diam in arcu cursus.
            Cursus euismod quis viverra nibh cras pulvinar mattis. Venenatis
            cras sed felis eget velit aliquet. Tincidunt vitae semper quis
            lectus nulla at. Rutrum quisque non tellus orci ac auctor augue.
            Quisque egestas diam in arcu cursus. Cursus euismod quis viverra
            nibh cras pulvinar mattis. Venenatis cras sed felis eget velit
            aliquet.
          </p>
        </div>
        <div
          style={{
            width: '50%',
            height: '300px',
            overflow: 'hidden',

            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src='../../../images/dance2.jpg'
          />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '50%',
            height: '300px',
            overflow: 'hidden',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src='../../../images/dance2.jpg'
          />
        </div>
        <div
          style={{
            width: '50%',
            height: '300px',
            background: '#1A4D2E',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            padding: '20px',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                opacity: '0.7',
                marginLeft: '8px',
              }}
              icon={faUsersRays}
            />
          </div>
          <p
            style={{
              textAlign: 'center',
              color: 'white',
              marginTop: '20px',
              fontWeight: 'bold',
              fontFamily: "'PT Serif', serif",
            }}
          >
            TOMA NJONG DANCE GROUP
          </p>
          <p
            style={{
              color: 'white',
              padding: '10px',
              border: '1px solid white',
              borderRadius: '5px',
            }}
          >
            Tincidunt vitae semper quis lectus nulla at. Rutrum quisque non
            tellus orci ac auctor augue. Quisque egestas diam in arcu cursus.
            Cursus euismod quis viverra nibh cras pulvinar mattis. Venenatis
            cras sed felis eget velit aliquet. Tincidunt vitae semper quis
            lectus nulla at. Rutrum quisque non tellus orci ac auctor augue.
            Quisque egestas diam in arcu cursus. Cursus euismod quis viverra
            nibh cras pulvinar mattis. Venenatis cras sed felis eget velit
            aliquet.
          </p>
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
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
            color: 'white',
            fontFamily: "'Noto Serif', serif",
          }}
        >
          <b>Sample Traditional Song</b>
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
            View All 120 Traditional Songs
          </Link>
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
        <div
          style={{
            width: '20%',
            padding: '10px 30px',
            background: '#367E18',
            margin: '10px auto 0 auto ',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div style={{ flex: '1' }}>
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                cursor: 'pointer',
                marginLeft: '8px',
              }}
              icon={faBackwardFast}
            />
          </div>
          <div style={{ flex: '1' }}>
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                cursor: 'pointer',
                marginLeft: '8px',
              }}
              icon={faForwardFast}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SomeDanceGroups

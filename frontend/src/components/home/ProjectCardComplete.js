import React from 'react'
import Progress from 'react-progressbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const ProjectCardComplete = ({ pointerEvents = 'auto' }) => {
  return (
    <div
      style={{
        width: '500px',
        height: '600px',
        border: '1px solid #367E18',
        //         opacity: '0.7',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            width: '100%',
            height: '300px',
            opacity: '1',
            borderRadius: '10px',
            overflow: 'hidden',
            flex: '1',
            marginRight: '2px',
            border: '1px solid #367E18',
          }}
        >
          <div
            style={{
              position: 'absolute',
              padding: '2px 5px',
              background: 'black',
              borderRadius: '10px',
              marginTop: '5px',
              marginLeft: '5px',
              opacity: '0.9',
              color: 'white',
              border: '2px solid white',
            }}
          >
            Before
          </div>
          <img
            style={{
              width: '100%',
              height: '100%',
              opacity: '1',
              cursor: 'pointer',
            }}
            src='../../../images/tap.jpg'
          />
        </div>
        <div
          style={{
            width: '100%',
            height: '300px',
            opacity: '1',
            borderRadius: '10px',
            overflow: 'hidden',
            flex: '1',
            marginLeft: '2px',
            border: '1px solid #367E18',
          }}
        >
          <div
            style={{
              position: 'absolute',
              padding: '2px 10px',
              background: '#367E18',
              borderRadius: '10px',
              marginTop: '5px',
              marginLeft: '5px',
              opacity: '0.9',
              color: 'white',
              border: '2px solid white',
            }}
          >
            After
          </div>

          <img
            style={{
              width: '100%',
              height: '100%',
              opacity: '1',
              cursor: 'pointer',
            }}
            src='../../../images/tap.jpg'
          />
        </div>
      </div>
      <div style={{ marginTop: '20px', width: '100%' }}>
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '2.2rem',
            fontFamily: "'Noto Serif', serif",
            textAlign: 'center',
          }}
        >
          Community Tap Water
        </p>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          height: '70px',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            width: '33.3%',
            borderRight: '1px solid #EEEEEE',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontWeight: '500',
              color: 'black',
              opacity: '1',
              fontSize: '1.2rem',
            }}
          >
            RAISED
          </p>
          <p style={{ fontWeight: 'bold', color: 'black', opacity: '1' }}>
            $700
          </p>
        </div>
        <div
          style={{
            width: '33.3%',
            borderRight: '1px solid #EEEEEE',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontWeight: '500',
              color: 'black',
              opacity: '1',
              fontSize: '1.2rem',
            }}
          >
            REMAINING
          </p>
          <p style={{ fontWeight: 'bold', color: 'black', opacity: '1' }}>
            $700
          </p>
        </div>

        <div
          style={{
            width: '33.3%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontWeight: '500',
              color: 'black',
              opacity: '1',
              fontSize: '1.2rem',
            }}
          >
            EXPIRING DATE
          </p>
          <p style={{ fontWeight: 'bold', color: 'black', opacity: '1' }}>
            28th Dec 2023
          </p>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '10%' }}>100%</div>
        <div style={{ width: '90%' }}>
          <Progress color='#367E18' completed={100} />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '50px',
          padding: '0 10%',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <a
            style={{
              padding: '10px 20px',
              background: pointerEvents == 'auto' ? '#367E18' : 'grey',
              color: 'white',
              borderRadius: '20px',
              fontWeight: 'bold',
              textDecoration: 'none',
              pointerEvents,
            }}
            href='#'
          >
            Donate Now{' '}
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                opacity: '0.7',
                marginLeft: '8px',
              }}
              icon={faSackDollar}
            />
          </a>
        </div>
        <div>
          {' '}
          <a
            style={{
              padding: '10px 20px',
              border: '1px solid #367E18',
              color: '#367E18',
              borderRadius: '20px',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
            href='#'
          >
            Program Details
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardComplete

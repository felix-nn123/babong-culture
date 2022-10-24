import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        background: '#1A4D2E',
        padding: '30px 0',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontFamily: "'Noto Serif', serif",
              fontSize: '1.4rem',
            }}
          >
            ABOUT US
          </p>
        </div>
        <div>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
            to='#'
          >
            Blog
          </Link>
        </div>
        <div style={{ marginTop: '10px' }}>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
            to='#'
          >
            Opportunities
          </Link>
        </div>
        <div style={{ marginTop: '10px' }}>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
            to='#'
          >
            Contact us now
          </Link>
        </div>
        <div style={{ marginTop: '10px' }}>
          <Link
            className='btn'
            style={{
              textDecoration: 'none',
              color: 'white',
              background: '#367E18',
              padding: '7px 50px',
              borderRadius: '20px',
              fontSize: '1.6rem',
              fontWeight: '600',
              border: '1px solid white',
            }}
            to='#'
          >
            FAQ
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                opacity: '1',
                marginLeft: '8px',
              }}
              icon={faQuestion}
            />
          </Link>
        </div>
        <div style={{ marginTop: '10px' }}>
          <Link
            className='btn'
            style={{
              textDecoration: 'none',
              color: 'white',
              // background: '#367E18',
              padding: '7px 50px',
              borderRadius: '20px',
              fontSize: '1.6rem',
              fontWeight: '600',
              border: '1px solid white',
            }}
            to='#'
          >
            Support US Now
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                opacity: '1',
                marginLeft: '8px',
              }}
              icon={faSackDollar}
            />
          </Link>
        </div>
      </div>
      <div
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ border: '2px solid white', borderRadius: '100%' }}>
          <a href='#' style={{ textDecoration: 'none' }}>
            <img
              style={{ height: '30px', width: '30px', borderRadius: '100%' }}
              src='../../../images/facebook.jpg'
            />
          </a>
        </div>
        <div
          style={{
            margin: '0 10px',
            border: '2px solid white',
            borderRadius: '100%',
          }}
        >
          <a href='#' style={{ textDecoration: 'none' }}>
            <img
              style={{ height: '30px', width: '30px', borderRadius: '100%' }}
              src='../../../images/whatsapp.jpg'
            />
          </a>
        </div>
        <div style={{ border: '2px solid white', borderRadius: '100%' }}>
          <a href='#' style={{ textDecoration: 'none' }}>
            <img
              style={{ height: '30px', width: '30px', borderRadius: '100%' }}
              src='../../../images/twitters.jpg'
            />
          </a>
        </div>
        <div
          style={{
            margin: '0 10px',
            border: '2px solid white',
            borderRadius: '100%',
          }}
        >
          <a href='#' style={{ textDecoration: 'none' }}>
            <img
              style={{ height: '30px', width: '30px', borderRadius: '100%' }}
              src='../../../images/instagram.jpg'
            />
          </a>
        </div>
        <div style={{ border: '2px solid white', borderRadius: '100%' }}>
          <a href='#' style={{ textDecoration: 'none' }}>
            <img
              style={{ height: '30px', width: '30px', borderRadius: '100%' }}
              src='../../../images/youtube1.png'
            />
          </a>
        </div>
      </div>
      <div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h2
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontFamily: "'Noto Serif', serif",
          }}
        >
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <p style={{ width: '60%', color: 'white', textAlign: 'center' }}>
          Subscribe to our newsletter to stay updated with our latest Projects,
          events and more feedbacks
        </p>
        <input
          style={{
            width: '60%',
            padding: '10px 5px',
            fontSize: '18px',
            color: '#1A4D2E',
            fontWeight: '800',
            borderRadius: '20px',
          }}
          className='form-control'
          placeholder='ENTER YOUR EMAIL ADDRESS'
        />
        <button
          style={{
            padding: '7px 50px',
            background: '#367E18',
            borderRadius: '20px',
            marginTop: '10px',
            color: 'white',
            border: '1px solid white',
            fontWeight: '600',
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney,
  faTree,
  faPeopleLine,
  faDiagramProject,
  faChevronCircleDown,
  faUmbrella,
  faUserCircle,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons'

import './home.css'

const Navbar = () => {
  return (
    <nav
      style={{
        background: '#367E18',
        position: 'fixed',
        zIndex: 5,
        width: '100%',
      }}
      className='navbar navbar-expand-lg'
    >
      <div className='container-fluid'>
        <a
          style={{ color: 'white', fontWeight: 'bold', fontSize: '1.6rem' }}
          className='navbar-brand'
          href='#'
        >
          <FontAwesomeIcon
            style={{
              fontSize: '20px',
              color: 'black',
              opacity: '0.7',
            }}
            icon={faPeopleGroup}
          />
          BABONG
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{ background: 'white' }}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                style={{
                  color: 'white',
                  marginLeft: '70px',
                }}
                className='nav-link active'
                aria-current='page'
                href='#'
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      fontSize: '1.6rem',
                    }}
                    icon={faHouseChimney}
                  />{' '}
                  <span style={{ marginLeft: '5px' }}>HOME</span>
                </div>
              </a>
            </li>
            <li style={{ marginLeft: '20px' }} className='nav-item'>
              <a
                style={{
                  color: 'white',
                }}
                className='nav-link'
                href='#'
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      fontSize: '1.8rem',
                    }}
                    icon={faPeopleLine}
                  />
                  <span style={{ margin: '0 5px' }}>CULTURE</span>
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      fontSize: '1.6rem',
                    }}
                    icon={faChevronCircleDown}
                  />
                </div>
              </a>
            </li>
            <li style={{ marginLeft: '20px' }} className='nav-item dropdown'>
              <a
                className='nav-link'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                style={{ color: 'white' }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      fontSize: '1.6rem',
                    }}
                    icon={faDiagramProject}
                  />
                  <span style={{ margin: '0 5px' }}>PROJECTS</span>
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      fontSize: '1.6rem',
                    }}
                    icon={faChevronCircleDown}
                  />
                </div>
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li style={{ marginLeft: '20px' }} className='nav-item'>
              <a
                style={{ color: 'white', display: 'flex' }}
                className='nav-link'
                href='#'
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      fontSize: '1.6rem',
                    }}
                    icon={faUmbrella}
                  />
                  <span style={{ margin: '0 5px' }}>LOCAL GROUPS</span>
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      fontSize: '1.6rem',
                    }}
                    icon={faChevronCircleDown}
                  />
                </div>
              </a>
            </li>

            <li style={{ marginLeft: '20px' }} className='nav-item'>
              <a
                style={{ color: 'white', display: 'flex' }}
                className='nav-link'
                href='#'
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      fontSize: '1.6rem',
                    }}
                    icon={faTree}
                  />
                  <span style={{ margin: '0 5px' }}>VILLAGE CULTS</span>
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      fontSize: '1.6rem',
                    }}
                    icon={faChevronCircleDown}
                  />
                </div>
              </a>
            </li>
            <form
              style={{ marginLeft: '50px' }}
              className='d-flex'
              role='search'
            >
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                style={{ width: '25rem', fontSize: '1.6rem' }}
              />
              <button
                style={{ color: 'white', fontSize: '1.6rem' }}
                className='btn btn-outline-success'
                type='submit'
              >
                Search
              </button>
            </form>
          </ul>
          <div
            style={{
              width: '180px',
              color: 'white',
              zIndex: '2',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '35px',
                height: '35px',
                borderRadius: '100%',
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon
                style={{
                  fontSize: '20px',
                  color: 'black',
                  opacity: '0.7',
                }}
                icon={faUserCircle}
              />
            </div>
            <span style={{ margin: '0 5px', fontWeight: 'bold' }}>
              Felix Nkongho
            </span>
            <FontAwesomeIcon
              style={{
                color: 'white',
                fontSize: '1.6rem',
              }}
              icon={faChevronCircleDown}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

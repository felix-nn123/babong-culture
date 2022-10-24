import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney,
  faTree,
  faPeopleLine,
  faDiagramProject,
  faChevronCircleDown,
  faChevronCircleUp,
  faUmbrella,
  faUserCircle,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './home.css'
import Dropdown from './Dropdown'
import DropdownProfile from './DropdownProfile'

const Navbar = () => {
  const [culture, setCulture] = useState(false)
  const [project, setProject] = useState(false)
  const [group, setGroup] = useState(false)
  const [cult, setCult] = useState(false)
  const [lead, setLead] = useState(false)
  const [event, setEvent] = useState(false)
  const [profile, setProfile] = useState(false)

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
            <li
              onMouseEnter={() => setCulture(true)}
              onMouseLeave={() => setCulture(false)}
              style={{ marginLeft: '20px' }}
              className='nav-item'
            >
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
                  {!culture && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleDown}
                    />
                  )}
                  {culture && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleUp}
                    />
                  )}
                </div>
              </a>
              {culture && <Dropdown />}
            </li>
            <li
              onMouseEnter={() => setProject(true)}
              onMouseLeave={() => setProject(false)}
              style={{ marginLeft: '20px' }}
              className='nav-item dropdown'
            >
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
                  {!project && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleDown}
                    />
                  )}
                  {project && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleUp}
                    />
                  )}
                </div>
              </a>
              {project && (
                <Dropdown
                  src='../../../images/dig.jpg'
                  topic='VIEW AND ANALYSIS ALL PROJECTS'
                  body={
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
                              Community Water Tap
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
                              Grade the Bad Road
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  }
                />
              )}
            </li>

            <li
              onMouseEnter={() => setGroup(true)}
              onMouseLeave={() => setGroup(false)}
              style={{ marginLeft: '20px' }}
              className='nav-item'
            >
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
                  {!group && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleDown}
                    />
                  )}
                  {group && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleUp}
                    />
                  )}
                </div>
              </a>
              {group && (
                <Dropdown
                  src='../../../images/group.jpg'
                  topic='VIEW AND JOIN ANY LOCAL GROUP'
                  body={
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
                              B.A.C.U.D.A
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
                              B.A.C.U.D.A Youth Wing
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  }
                />
              )}
            </li>

            <li
              onMouseEnter={() => setCult(true)}
              onMouseLeave={() => setCult(false)}
              style={{ marginLeft: '20px' }}
              className='nav-item'
            >
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
                  {!cult && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleDown}
                    />
                  )}
                  {cult && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleUp}
                    />
                  )}
                </div>
              </a>
              {cult && (
                <Dropdown
                  src='../../../images/group.jpg'
                  topic='OUR TRADITIONAL CULT'
                  body={
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
                              Sessiko
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
                              Anang Cult
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  }
                />
              )}
            </li>
            <li
              onMouseEnter={() => setLead(true)}
              onMouseLeave={() => setLead(false)}
              style={{ marginLeft: '20px' }}
              className='nav-item'
            >
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
                  <span style={{ margin: '0 5px' }}>LEADERSHIP</span>
                  {!lead && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleDown}
                    />
                  )}
                  {lead && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleUp}
                    />
                  )}
                </div>
              </a>
              {lead && (
                <Dropdown
                  src='../../../images/chief2.jpg'
                  topic='OUR LEADERSHIP STRUCTURE'
                  body={
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
                              Chief And Role
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
                              lorem iodsume lobe sxask jae
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  }
                />
              )}
            </li>
            <li
              onMouseEnter={() => setEvent(true)}
              onMouseLeave={() => setEvent(false)}
              style={{ marginLeft: '20px' }}
              className='nav-item'
            >
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
                  <span style={{ margin: '0 5px' }}>CULTURAL EVENTS</span>
                  {!event && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleDown}
                    />
                  )}
                  {event && (
                    <FontAwesomeIcon
                      style={{
                        color: 'white',
                        fontSize: '1.6rem',
                      }}
                      icon={faChevronCircleUp}
                    />
                  )}
                </div>
              </a>
              {event && (
                <Dropdown
                  src='../../../images/chief2.jpg'
                  topic='VIEW OUR CULTURAL EVENTS'
                  body={
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
                              CROWNING OF CHIEF
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
                              Competitive Traditional Dance
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  }
                />
              )}
            </li>
          </ul>
          <div
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
            style={{
              width: '180px',
              color: 'white',
              zIndex: '2',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
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
            {!profile && (
              <FontAwesomeIcon
                style={{
                  color: 'white',
                  fontSize: '1.6rem',
                }}
                icon={faChevronCircleDown}
              />
            )}
            {profile && (
              <FontAwesomeIcon
                style={{
                  color: 'white',
                  fontSize: '1.6rem',
                }}
                icon={faChevronCircleUp}
              />
            )}
          </div>
          {profile && (
            <DropdownProfile
              onMouseEnter={() => setProfile(true)}
              onMouseLeave={() => setProfile(false)}
            />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

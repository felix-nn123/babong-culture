import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle,
  faPhone,
  faVideo,
  faMinus,
  faChevronDown,
  faFaceSmile,
  faImages,
} from '@fortawesome/free-solid-svg-icons'
// import ScrollToBottom from 'react-scroll-to-bottom'
// import { css } from 'emotion'

// const ROOT_CSS = css({
//   height: 600,
//   width: 400,
// })

const Chatbox = () => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: '5',
        width: '20%',
        height: '55%',
        right: '5px',
        bottom: '0px',
        background: 'white',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTop: '5px solid #367E18',
        borderLeft: '5px solid #367E18',
        borderRight: '5px solid #367E18',
      }}
    >
      {/* top header video call minus dropdown */}
      <div
        style={{
          width: '100%',
          padding: '5px',
          borderBottom: '1px solid #367E18',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '100%',
              border: '3px solid #367E18',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              style={{ width: '100%', height: '100%' }}
              src='../../../images/chief2.jpg'
            />
            <FontAwesomeIcon
              style={{
                fontSize: '15px',
                color: '#367E18',
                marginLeft: '25px',
                marginTop: '35px',
                cursor: 'pointer',
                position: 'absolute',
                zIndex: '2',
              }}
              icon={faCircle}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                marginLeft: '5px',
                fontWeight: '600',
                fontSize: '1.4rem',
                color: '#367E18',
                fontFamily: "'Noto Serif', serif",
              }}
            >
              Felix Nkongho
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: '#367E18',
              }}
            >
              {' '}
              Active Now
            </div>
          </div>
        </div>
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              flex: '1',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: '22px',
                color: '#367E18',
                cursor: 'pointer',
                zIndex: '2',
              }}
              icon={faPhone}
            />
          </div>
        </div>
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // flexDirection: 'row',
            // background: 'red',
          }}
        >
          <div
            style={{
              flex: '1',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: '22px',
                color: '#367E18',
                cursor: 'pointer',
                zIndex: '2',
              }}
              icon={faVideo}
            />
          </div>
        </div>
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon
            style={{
              fontSize: '22px',
              color: '#367E18',
              cursor: 'pointer',
              zIndex: '2',
            }}
            icon={faMinus}
          />
        </div>

        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon
            style={{
              fontSize: '22px',
              color: '#367E18',
              cursor: 'pointer',
              zIndex: '2',
            }}
            icon={faChevronDown}
          />
        </div>
      </div>
      {/* the body of message */}
      <div
        style={{
          width: '100%',
          height: '72.5%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: '#1A4D2E',
          paddingBottom: '5px',
          paddingLeft: '5px',
        }}
      >
        {/* <ScrollToBottom className='ROOT_CSS'> */}
        {/* recieving message box */}
        {/* <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: '5px',
            margin: '5px 0',
          }}
        >
          <div
            style={{
              width: '55%',
              padding: '10px',
              background: '#367E18',
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
              borderTopLeftRadius: '5px',
              color: 'white',
            }}
          >
            cursus in hac habitasse platea dictumst quisque sagittis purus
          </div>
          <div
            style={{
              width: '20px',
              height: '20px',
              clipPath: 'polygon(100% 0, 0 0, 0 61%)',
              background: '#367E18',
            }}
          />
        </div> */}
        {/* sending message box */}
        <div
          style={{
            width: '100%',
            margin: '5px 0',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              clipPath: 'polygon(100% 0, 0 0, 100% 62%)',
              background: '#367E18',
            }}
          />
          <div
            style={{
              width: '55%',
              padding: '10px',
              background: '#367E18',
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
              borderTopRightRadius: '5px',
              color: 'white',
            }}
          >
            cursus in hac habitasse platea dictumst quisque sagittis purus
          </div>
        </div>
        {/* recieving message box */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: '5px',
            margin: '5px 0',
          }}
        >
          <div
            style={{
              width: '55%',
              padding: '5px',
              background: '#367E18',
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
              borderTopLeftRadius: '5px',
              color: 'white',
            }}
          >
            cursus in hac habitasse platea dictumst quisque sagittis purus
          </div>
          <div
            style={{
              width: '20px',
              height: '20px',
              clipPath: 'polygon(100% 0, 0 0, 0 61%)',
              background: '#367E18',
            }}
          />
        </div>
        {/* sending message box */}
        <div
          style={{
            width: '100%',
            margin: '5px 0',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              clipPath: 'polygon(100% 0, 0 0, 100% 62%)',
              background: '#367E18',
            }}
          />
          <div
            style={{
              width: '55%',
              padding: '5px',
              background: '#367E18',
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
              borderTopRightRadius: '5px',
              color: 'white',
            }}
          >
            cursus in hac habitasse platea dictumst quisque sagittis purus
          </div>
        </div>
        {/* </ScrollToBottom> */}
      </div>

      {/* the chat footer section */}
      <div
        style={{
          width: '101%',
          padding: ' 10px',
          background: '#367E18',
          // position: 'absolute',
          bottom: '0',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '10%',
            padding: '0 10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon
            style={{
              fontSize: '25px',
              color: 'white',
              cursor: 'pointer',
              zIndex: '2',
            }}
            icon={faImages}
          />
        </div>
        <div style={{ width: '90%', padding: '0' }}>
          <div
            style={{
              position: 'absolute',
              padding: '5',
              zIndex: '2',
              border: '1px solid #367E18',
              borderRadius: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5px',
              right: '5%',
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: '25px',
                color: '#367E18',
                cursor: 'pointer',
                zIndex: '2',
              }}
              icon={faFaceSmile}
            />
          </div>
          <textarea
            placeholder='Aa'
            rows='1'
            style={{
              width: '100%',
              borderRadius: '15px',
              padding: '7px 5px',
              border: '1px solid #367E18',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Chatbox

import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardComplete from './ProjectCardComplete'

const OngoingProject = () => {
  return (
    <>
      <div style={{ width: '100%', padding: '0 5%' }}>
        <div
          style={{
            marginBottom: '0',
            width: '100%',
            textAlign: 'center',
            marginTop: '30px',
            padding: '0',
            fontFamily: "'Noto Serif', serif",
            color: '#367E18',
          }}
        >
          PROJECTS
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0',
            padding: '0',
          }}
        >
          <div>
            <h1
              style={{
                textAlign: 'center',

                fontWeight: 'bolder',
                color: '#367E18',
              }}
            >
              DONATE TO OUR RECENT COMMUNITY PROJECTS
            </h1>
          </div>
          <div style={{ marginLeft: '15px' }}>
            <a
              href='#'
              className='btn'
              style={{
                padding: '7px 20px',
                background: '#367E18',
                margin: '0 auto',
                color: 'white',
                fontSize: '1.8rem',
                borderRadius: '20px',
              }}
            >
              View All Projects
            </a>
          </div>
        </div>
        <p style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque habitant morbi tristique senectus et netus. Scelerisque
          felis imperdiet proin fermentum leo. Lectus vestibulum mattis
          ullamcorper velit sed ullamcorper. Dui nunc mattis enim ut. Quis
          auctor elit sed vulputate mi.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: '20px',
            justifyContent: 'center',
          }}
        >
          <div style={{ padding: '10px' }}>
            <ProjectCard />
          </div>
          <div style={{ padding: '10px' }}>
            <ProjectCard />
          </div>
        </div>
      </div>

      <div
        style={{
          width: '20%',
          height: '1px',
          background: '#367E18',
          margin: '20px auto',
        }}
      />

      <div style={{ width: '100%', margin: '20px auto', textAlign: 'center' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0',
            padding: '0',
          }}
        >
          <div>
            <h1
              style={{
                textAlign: 'center',

                fontWeight: 'bolder',
                color: 'grey',
              }}
            >
              View And Analyse Our Recently Completed Project
            </h1>
          </div>
          <div style={{ marginLeft: '15px' }}>
            <a
              href='#'
              className='btn'
              style={{
                padding: '7px 20px',
                background: 'grey',
                margin: '0 auto',
                color: 'white',
                fontSize: '1.8rem',
                borderRadius: '20px',
              }}
            >
              View All Completed Projects
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          marginTop: '20px',
          justifyContent: 'center',
        }}
      >
        <div style={{ padding: '10px' }}>
          <ProjectCardComplete pointerEvents='none' />
        </div>
        <div style={{ padding: '10px' }}>
          <ProjectCardComplete pointerEvents='none' />
        </div>
      </div>

      <div
        style={{
          width: '20%',
          height: '1px',
          background: '#367E18',
          margin: '20px auto',
        }}
      />

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '0',
          padding: '0',
        }}
      >
        <div>
          <h1
            style={{
              textAlign: 'center',

              fontWeight: 'bolder',
              color: '#367E18',
            }}
          >
            PIE CHART ILLUSTRATION OF PROJECT REALISATION
          </h1>
        </div>
        <div style={{ marginLeft: '15px' }}>
          <a
            href='#'
            className='btn'
            style={{
              padding: '7px 20px',
              background: '#367E18',
              margin: '0 auto',
              color: 'white',
              fontSize: '1.8rem',
              borderRadius: '20px',
            }}
          >
            View Detail Analysis
          </a>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '40%', height: '90%' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src='../../../images/pie.jpg'
          />
        </div>
      </div>
    </>
  )
}

export default OngoingProject

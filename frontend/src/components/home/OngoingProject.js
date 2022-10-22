import React from 'react'
import ProjectCard from './ProjectCard'

const OngoingProject = () => {
  return (
    <div style={{ width: '100%', padding: '0 5%' }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h1
            style={{
              textAlign: 'center',
              marginTop: '30px',
              fontWeight: 'bolder',
              color: '#367E18',
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            DONATE TO OUR RECENT PROJECTS
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pellentesque
        habitant morbi tristique senectus et netus. Scelerisque felis imperdiet
        proin fermentum leo. Lectus vestibulum mattis ullamcorper velit sed
        ullamcorper. Dui nunc mattis enim ut. Quis auctor elit sed vulputate mi.
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
  )
}

export default OngoingProject

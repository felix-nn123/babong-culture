import React from 'react'

import Navbar from '../components/home/Navbar'
import Header from '../components/home/Header'
import AboutBabong from '../components/home/AboutBabong'
import Hr from '../components/home/Hr'
import OngoingProject from '../components/home/OngoingProject'

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutBabong />
      <Hr />
      <OngoingProject />
    </>
  )
}

export default HomeScreen

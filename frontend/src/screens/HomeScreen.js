import React from 'react'
import ScrollToTop from 'react-scroll-to-top'

import Navbar from '../components/home/Navbar'
import Header from '../components/home/Header'
import AboutBabong from '../components/home/AboutBabong'
import Hr from '../components/home/Hr'
import OngoingProject from '../components/home/OngoingProject'
import CulturalEvents from '../components/home/CulturalEvents'
import ChiefsAndLeadership from '../components/home/ChiefsAndLeadership'
import SomeDanceGroups from '../components/home/SomeDanceGroups'
import SomeInterestedSites from '../components/home/SomeInterestedSites'
import MapLocation from '../components/home/MapLocation'
import Footer from '../components/home/Footer'

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hr />
      <AboutBabong />
      <Hr />
      <OngoingProject />
      <Hr />
      <CulturalEvents />
      <Hr />
      <ChiefsAndLeadership />
      <Hr />
      <SomeDanceGroups />
      <Hr />
      <SomeInterestedSites />
      <Hr />
      <MapLocation />
      <Footer />
      <ScrollToTop style={{ left: '5px' }} smooth />
    </>
  )
}

export default HomeScreen

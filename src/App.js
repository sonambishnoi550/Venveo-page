import React from 'react'
import Hero from './components/Hero'
import Feature from './components/Feature'
import  Client from './components/Client'
import DigitalMarketing from './components/DigitalMarketing'
import Analize from './components/Analize'
import TabContent from './components/TabContent'
import ActualResult from './components/ActualResult'
import LearnFrom from './components/LearnFrom'
import Ready from './components/Ready'
import Footer from './components/Footer'
import ReadMore from './components/ReadMore'
const App = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Client/>
      <DigitalMarketing/>
      <Analize />
      <TabContent />
      <ActualResult />
      <LearnFrom />
      <ReadMore/>
      <Ready />
      <Footer/>
    </div>
  )
}

export default App

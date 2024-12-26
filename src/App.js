import React from 'react'
import Hero from './components/Hero'
import Feature from './components/Feature'
import  Client from './components/Client'
import DigitalMarketing from './components/DigitalMarketing'
import Analize from './components/Analize'
import TabContent from './components/TabContent'
import ActualResult from './components/ActualResult'
const App = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Client/>
      <DigitalMarketing/>
      <Analize />
      <TabContent />
      <ActualResult/>
    </div>
  )
}

export default App

import React from 'react'
import Cardslistcscs from './cardslistcscs'
import Cardsslider from './cardsslider'
import CitbTestCarousel from './citbcardcarousel'
import ExpectCall from './expectCall'
import FeaturesSection from './feature'
import Herosection from './herosection'
import Instantbook from './instantbook'
import Iphone15 from './iphone15'
import Keyadvantage from './keyadvantage'
import MobileHeroSection from './mobilehero'


const Home = () => {
  return (
    <>
    <div className='hidden md:block'>
    <Herosection  />
    <Instantbook />
    </div>
    <div className='md:hidden'>
      <MobileHeroSection />
    </div>

      <Keyadvantage />
      <Cardsslider />
      <ExpectCall />
      <Iphone15 />
      <FeaturesSection />
      <CitbTestCarousel />
      <ExpectCall />
      {/* <Cardslistcscs /> */}
    </>
  )
}

export default Home
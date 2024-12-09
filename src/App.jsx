import FAQ from './components/FaqSection'
import Footer from './components/Footer'
import FounderSection from './components/FounderSection'
import FridaySection from './components/FridaySection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Register from './components/Register'
import FounderEvent from './components/FounderEvent'
import Sponsor from './components/Sponsor'
import Testimonial from './components/Testimonial'
import WhatWeOffer from './components/WhatWeOfferSection'

function App() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <div>
        <Navbar />
      </div>
      <div className=''>
        <Hero />
      </div>
      <div className='my-16'>
        <WhatWeOffer />
      </div>
      <div>
        <FridaySection />
      </div>
      <div className='my-16'>
        <Sponsor />
      </div>
      <div className='my-16'>
        <FounderEvent />
      </div>
      <div className='my-16'>
        <Register />
      </div>
      <div className='my-16'>
        <FounderSection />
      </div>
      <div className='my-16'>
        <Testimonial />
      </div>
      <div className='my-16'>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App

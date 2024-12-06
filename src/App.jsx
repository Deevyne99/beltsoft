import FAQ from './components/FaqSection'
import Footer from './components/Footer'
import FounderSection from './components/FounderSection'
import FridaySection from './components/FridaySection'
import Navbar from './components/Navbar'
import Sponsor from './components/Sponsor'
import WhatWeOffer from './components/WhatWeOfferSection'

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='my-12'>
        <WhatWeOffer />
      </div>
      <div>
        <FridaySection />
      </div>
      <div className='my-12'>
        <Sponsor />
      </div>
      <div className='my-12'>
        <FounderSection />
      </div>
      <div className='my-12'>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App

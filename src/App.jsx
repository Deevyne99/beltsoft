import FAQ from './components/FaqSection'
import Footer from './components/Footer'
import FounderSection from './components/FounderSection'
import Navbar from './components/Navbar'
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

import { useState } from 'react'
import DropDown from './OfferDropDown'

const WhatWeOffer = () => {
  const faqs = [
    {
      question: 'What is your return policy?',
      answer:
        'You can return any item within 30 days of purchase for a full refund.',
    },
    {
      question: 'How do I track my order?',
      answer:
        'You can track your order by logging into your account and viewing your order history.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we ship to most countries worldwide. Shipping costs and times may vary.',
    },
    {
      question: 'How can I contact customer service?',
      answer:
        'You can contact our customer service team via email at support@example.com or by phone at +123456789.',
    },
    {
      question: 'How can I contact customer service?',
      answer:
        'You can contact our customer service team via email at support@example.com or by phone at +123456789.',
    },
    {
      question: 'How can I contact customer service?',
      answer:
        'You can contact our customer service team via email at support@example.com or by phone at +123456789.',
    },
  ]

  const [openIndx, setOpenIndx] = useState(null)

  const handleToggle = (index) => {
    setOpenIndx(openIndx === index ? null : index)
  }

  return (
    <div className='mx-4 md:mx-16'>
      <h2>what we offer</h2>
      <div>
        {faqs.map((item, index) => {
          return (
            <DropDown
              key={index}
              isOpen={openIndx === index}
              onToggle={() => handleToggle(index)}
              question={item.question}
              answer={item.answer}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WhatWeOffer

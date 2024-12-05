import { useState } from 'react'
import FAQItem from './FaqItem'

const FAQ = () => {
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

  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='flex flex-col justify-center mx-4 md:mx-12'>
      <h2 className='text-3xl font-bold text-left mb-8 justify-center'>FAQs</h2>
      <div className=' grid grid-cols-2 gap-4 justify-center max-w-[700px] bg-slate-400 items-center mx-auto'>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  )
}

export default FAQ

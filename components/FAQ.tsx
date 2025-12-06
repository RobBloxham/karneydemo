'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'Do you offer 24/7 emergency plumbing services?',
    answer: 'Yes! We provide 24/7 emergency plumbing services throughout Tulsa and surrounding areas. Whether it\'s a burst pipe, severe leak, or backed-up sewer, our team is ready to respond day or night.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We proudly serve Tulsa and all surrounding areas including Broken Arrow, Bixby, Owasso, Jenks, Glenpool, Sand Springs, and Claremore. If you\'re not sure if we service your area, give us a call!'
  },
  {
    question: 'Do you provide free estimates?',
    answer: 'Absolutely! We offer free, no-obligation estimates for all plumbing projects. We believe in upfront, transparent pricing with no hidden fees. You\'ll know the cost before we start any work.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, Karney Plumbing is fully licensed, bonded, and insured. All of our plumbers are licensed professionals with years of experience. We carry comprehensive liability insurance for your peace of mind.'
  },
  {
    question: 'How quickly can you respond to an emergency?',
    answer: 'For emergencies, we typically arrive within 60-90 minutes. We understand that plumbing emergencies can\'t wait, so we prioritize urgent calls and dispatch the nearest available technician to your location.'
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), checks, and we also offer financing options for larger projects. We want to make quality plumbing services accessible to everyone.'
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes! We stand behind our work with a 100% satisfaction guarantee. All of our installations and repairs come with warranties, and we use only high-quality parts and materials to ensure long-lasting results.'
  },
  {
    question: 'Can you help with both residential and commercial plumbing?',
    answer: 'Yes, we handle both residential and commercial plumbing projects. From home repairs and remodels to commercial installations and maintenance, our experienced team can handle projects of any size.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Get answers to common questions about our plumbing services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-secondary pr-8 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-secondary/70 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-secondary/70 mb-6 text-lg">
            Still have questions? We're here to help!
          </p>
          <a
            href="tel:+19189109977"
            data-cta="faq-call-now"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

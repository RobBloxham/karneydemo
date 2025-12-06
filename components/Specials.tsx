'use client'

import { motion } from 'framer-motion'

const specials = [
  {
    title: 'New Customer Special',
    discount: '$50 OFF',
    description: 'Your first service call',
    terms: 'Minimum $200 service. Cannot be combined with other offers.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    badge: 'POPULAR',
    color: 'from-primary to-red-600'
  },
  {
    title: 'Senior Discount',
    discount: '10% OFF',
    description: 'For customers 65 and older',
    terms: 'Valid ID required. Excludes emergency services.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    badge: null,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Military Discount',
    discount: '15% OFF',
    description: 'Active duty & veterans',
    terms: 'Valid military ID required. Thank you for your service!',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    badge: 'THANK YOU',
    color: 'from-green-600 to-green-700'
  }
]

export default function Specials() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Limited Time Offers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
            Current <span className="text-primary">Specials</span>
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Save money on quality plumbing services with our special offers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specials.map((special, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Badge */}
              {special.badge && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-yellow-400 text-secondary px-4 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    {special.badge}
                  </div>
                </div>
              )}

              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full group-hover:-translate-y-2">
                {/* Colored header */}
                <div className={`bg-gradient-to-r ${special.color} p-8 text-white relative overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative z-10">
                    <div className="mb-4">
                      {special.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{special.title}</h3>
                    <div className="text-5xl font-extrabold mb-2">
                      {special.discount}
                    </div>
                    <p className="text-white/90 text-lg">{special.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-sm text-secondary/60 italic">
                      {special.terms}
                    </p>
                  </div>

                  <a
                    href="tel:+19189109977"
                    data-cta={`special-${special.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full bg-secondary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Claim Offer
                  </a>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M100,0 L100,100 L0,100 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto shadow-md border border-secondary/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left flex-1">
                <h4 className="font-semibold text-secondary mb-2">How to Redeem</h4>
                <p className="text-secondary/70 text-sm">
                  Simply mention the offer when you call or book online. Our team will apply the discount to your service.
                  Offers cannot be combined. Some restrictions may apply.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

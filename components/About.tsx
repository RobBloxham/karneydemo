'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '25+', label: 'Years Experience', icon: '🏆' },
  { number: '1000+', label: 'Happy Customers', icon: '😊' },
  { number: '3', label: 'Generations', icon: '👨‍👩‍👧‍👦' },
  { number: '24/7', label: 'Emergency Service', icon: '⚡' }
]

const values = [
  {
    title: 'Family Values',
    description: '3 generations of plumbers serving Tulsa families with honesty and integrity',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Expert Craftsmanship',
    description: 'Licensed professionals with decades of combined experience and ongoing training',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Local Commitment',
    description: 'Proud to serve our Tulsa community, supporting local families and businesses',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary via-gray-900 to-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Karney Plumbing</span>
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            For over 25 years, <span className="text-primary font-semibold">Karney Plumbing</span> has been Tulsa's trusted name in quality plumbing services.
            As a family-owned and operated business spanning three generations, we understand the importance of reliability, honesty, and exceptional craftsmanship.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our team of licensed, experienced plumbers is committed to treating your home like our own.
            We take pride in our work and stand behind every job we complete.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-white/80 text-sm sm:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="text-primary mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary/20 to-red-600/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-primary/30 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Three Generations of <span className="text-primary">Plumbing Excellence</span>
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <p className="text-white/90 text-lg leading-relaxed mb-6">
            What started as a one-man operation has grown into Tulsa's most trusted plumbing company.
            Our founder believed in doing things the right way—treating every customer like family and
            never compromising on quality.
          </p>

          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Today, that same philosophy guides everything we do. From simple repairs to complex installations,
            we bring three generations of expertise to every job. When you call Karney Plumbing, you're not
            just getting a plumber—you're getting a partner who cares about your home as much as you do.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-semibold">Family Owned</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-semibold">100% Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


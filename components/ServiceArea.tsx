'use client'

import { motion } from 'framer-motion'

const serviceAreas = [
  'Tulsa',
  'Broken Arrow',
  'Bixby',
  'Owasso',
  'Jenks',
  'Glenpool',
  'Sand Springs',
  'Claremore',
]

export default function ServiceArea() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E31E24' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
              We Serve <span className="text-primary">Tulsa & Surrounding Areas</span>
            </h2>
            <p className="text-lg sm:text-xl text-secondary/70">
              Proudly serving Tulsa County and beyond
            </p>
          </motion.div>

          {/* Service Area Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceAreas.map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="bg-white text-secondary px-6 py-3 rounded-full font-semibold text-base shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


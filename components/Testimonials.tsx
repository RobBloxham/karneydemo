'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Amanda R.',
    location: 'Tulsa, OK',
    text: 'Karney Plumbing came highly recommended and did not disappoint. They helped with our bathroom remodel, and everything turned out beautifully. Professional, honest, and on budget.',
  },
  {
    name: 'Tyler M.',
    location: 'Bixby, OK',
    text: 'We had a major sewer backup, and Karney Plumbing was at our house within the hour. They were thorough, courteous, and explained everything. Highly recommend them!',
  },
  {
    name: 'Sandra L.',
    location: 'Broken Arrow, OK',
    text: "I've used Karney Plumbing for years. They're always prompt, respectful, and the job gets done right the first time.",
  },
]

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-yellow-400 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const GoogleLogo = () => (
  <div className="flex items-center gap-3 mb-4">
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.8-.07-1.54-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
    <span className="text-sm font-semibold text-secondary">Google</span>
  </div>
)

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
        </motion.div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="lg:hidden mb-12">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-[85vw] sm:min-w-[400px] bg-accent p-8 rounded-lg shadow-md snap-start flex-shrink-0"
              >
                <GoogleLogo />
                <StarRating />
                <p className="text-secondary/80 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-secondary/10 pt-4">
                  <p className="font-bold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-secondary/60">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-accent p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <GoogleLogo />
              <StarRating />
              <p className="text-secondary/80 mb-6 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-secondary/10 pt-4">
                <p className="font-bold text-secondary">{testimonial.name}</p>
                <p className="text-sm text-secondary/60">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://www.google.com/maps/place/Karney+Plumbing"
            target="_blank"
            rel="noopener noreferrer"
            data-cta="testimonials-google-reviews"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.8-.07-1.54-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="white"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="white"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="white"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="white"
              />
            </svg>
            See All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}


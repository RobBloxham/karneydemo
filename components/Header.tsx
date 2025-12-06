'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed md:top-0 top-[52px] left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-accent/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/logo.png"
              alt="Karney Plumbing Logo"
              width={180}
              height={60}
              className={`h-auto max-w-[180px] transition-all duration-300 ${
                isScrolled ? '' : 'brightness-110 drop-shadow-lg'
              }`}
              priority
              sizes="180px"
            />
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-secondary hover:text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-secondary hover:text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-secondary hover:text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              Contact
            </a>
            <a
              href="tel:+19189109977"
              data-cta="header-phone-desktop"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Call Now
            </a>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-colors ${isScrolled ? 'text-secondary' : 'text-secondary'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-secondary/10"
            >
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  Contact
                </a>
                <a
                  href="tel:+19189109977"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-cta="header-phone-mobile"
                  className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}


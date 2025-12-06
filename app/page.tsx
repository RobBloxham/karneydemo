import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Services from '@/components/Services'
import EmergencyBanner from '@/components/EmergencyBanner'
import WhyKarney from '@/components/WhyKarney'
import Testimonials from '@/components/Testimonials'
import ServiceArea from '@/components/ServiceArea'
import About from '@/components/About'
import Guarantees from '@/components/Guarantees'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <EmergencyBanner />
      <WhyKarney />
      <Testimonials />
      <ServiceArea />
      <About />
      <Guarantees />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  )
}


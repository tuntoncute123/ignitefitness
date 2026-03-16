import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import HeroSlider from './components/HeroSlider/HeroSlider'
import Features from './components/Features/Features'
import GymInterior from './components/GymInterior/GymInterior'
import FreeTrial from './components/FreeTrial/FreeTrial'
import Pricing from './components/Pricing/Pricing'
import Branches from './components/Branches/Branches'
import AppSection from './components/AppSection/AppSection'
import Knowledge from './components/Knowledge/Knowledge'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

import Facilities from './pages/Facilities/Facilities'
import News from './pages/News/News'
import Join from './pages/Join/Join'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function HomePage() {
  return (
    <>
      <HeroSlider />
      <Features />
      <GymInterior />
      <FreeTrial />
      <Pricing />
      <Branches />
      <AppSection />
      <Knowledge />
      <CTA />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/co-so-vat-chat" element={<Facilities />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/tham-gia" element={<Join />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

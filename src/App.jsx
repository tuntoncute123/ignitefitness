import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import BackToTop from './components/BackToTop/BackToTop'
import Home from './pages/Home/Home'
import News from './pages/News/News'
import Facilities from './pages/Facilities/Facilities'
import Join from './pages/Join/Join'
import AboutNewGym from './pages/AboutNewGym/AboutNewGym'
import PtSupport from './pages/PtSupport/PtSupport'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timeoutId = window.setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)

        if (element) {
          const header = document.getElementById('header')
          const offset = header ? header.offsetHeight + 12 : 88
          const top = element.getBoundingClientRect().top + window.scrollY - offset

          window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
        }
      }, 100) // Small delay to let components mount

      return () => window.clearTimeout(timeoutId)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/co-so-vat-chat" element={<Facilities />} />
        <Route path="/tham-gia" element={<Join />} />
        <Route path="/ve-the-new-gym" element={<AboutNewGym />} />
        <Route path="/ho-tro-tap-luyen" element={<PtSupport />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <BackToTop />
    </>
  )
}

export default App

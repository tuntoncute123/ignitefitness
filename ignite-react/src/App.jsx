import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import BackToTop from './components/BackToTop/BackToTop'
import Home from './pages/Home/Home'
import News from './pages/News/News'

function ScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // Small delay to let components mount
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])
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
      </Routes>
      <Footer />
      <FloatingButtons />
      <BackToTop />
    </>
  )
}

export default App

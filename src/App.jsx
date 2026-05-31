import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Home, Service, Mail } from "./pages"
import Contact from "./components/Conctact"
import NotFound from "./pages/NotFound"
import { ThemeProvider } from "./contexts/ThemeContext"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services/:id" element={<Service />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/mail" element={<Mail/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import { Home, Service, Mail } from "./pages"
import Contact from "./components/Conctact"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services/:id" element={<Service />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/mail" element={<Mail/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App

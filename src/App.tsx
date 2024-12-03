import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Footer } from './components/Footer/Footer'
import { ServicesPage } from './pages/ServicesPage/ServicesPage'
import { CasesPage } from './pages/CasesPage/CasesPage'
import { MaterialsPage } from './pages/MaterialsPage/MaterialsPage'
import { ScrollToTop } from './components/Service/ScrollToTop/ScrollToTop'
import { useAnimTitles } from './components/Animation/useAnimTitles'

import './App.scss'

function App() {
  useAnimTitles()

  return (
    <Router>
      <ScrollToTop />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

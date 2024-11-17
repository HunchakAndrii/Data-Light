import { Header } from './components/Header/Header'
import { Home } from './components/pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

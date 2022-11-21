import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Company, Products, Contacts } from './pages'
import './styles/App.scss'

function App() {
  return (
    <Router>
      <Routes>
           <Route path="/"  element={<Home/>} />
           <Route path="/empresa"  element={<Company/>} />
           <Route path="/produtos"  element={<Products/>} />
           <Route path="/contatos"  element={<Contacts/>} />
      </Routes>
    </Router>
  )
}
export default App

import Nav from './layout/Nav'
import './App.css';
import Services from './pages/Services';
import Products from './pages/Products';
import About_us from './pages/About';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import { Route,Routes,Link } from "react-router-dom"
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

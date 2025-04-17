import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import CategoryPage from './component/CategoryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetalBackground from './component/PetalEffect';
import StickyNavbar from './component/StickyNavbar';
import DoveTrovarci from './component/DoveTrovarci';

function App() {
  return (
    <div
    style={{

      background: 'radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)',
      minHeight: '100vh', // Opzionale: per far coprire l'intera viewport
    }}
  >
    <Router>
    <StickyNavbar/>
    <PetalBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:nome" element={<CategoryPage />} />
        <Route path="/DoveTrovarci" element={<DoveTrovarci/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

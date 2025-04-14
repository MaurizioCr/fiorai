import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import CategoryPage from './component/CategoryPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:nome" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

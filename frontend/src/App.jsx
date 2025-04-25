import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import HireTalent from './pages/HireTalent';
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Login from './pages/Login';
import ProtectedRoute from './pages/components/ProtectedRoute';
import Internships from './pages/Internships';
import AllInternships from './pages/AllInternships';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/hiretalent" element={<HireTalent />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/internships" element={<Internships />} />
          
          {/* Login route */}
          <Route path="/login" element={<Login />} />
          

          <Route 
            path="/allinternships" 
            element={
              <ProtectedRoute>
                <AllInternships />
              </ProtectedRoute>
            } 
          />
          
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}
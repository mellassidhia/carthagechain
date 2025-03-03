import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";
import About from './pages/About/About';
import Security from './pages/Security/Security';
import Policy from './pages/Policy/Policy';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import ContactUs from './pages/ContactUs/ContactUs';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Login from './pages/Login/Login';
import CandidateForm from './pages/CandidateForm/CandidateForm';
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/terms-of-use" element={<TermsOfService/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/candidate-form" element={<CandidateForm/>} />
        {/* Add other routes here */}
      </Routes>
      <Footer/>
      <ScrollUpButton />
    </Router>
  );
};

export default App;
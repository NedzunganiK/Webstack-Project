import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import PricingPage from "./pages/PricingPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Header";
import PageWrapper from "./components/PageWrapper";
import FloatingNav from "./components/FloatingNav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <FloatingNav />
      <Routes>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/booking" element={<PageWrapper><BookingPage /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><PricingPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactUs /></PageWrapper>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


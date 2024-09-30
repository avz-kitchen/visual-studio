import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// Importing individual pages with correct paths
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Cursor />
      <Navbar />

      <div className="app-content">
        {" "}
        {/* Wrap main content for better styling control */}
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;

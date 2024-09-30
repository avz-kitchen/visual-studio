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
import ProjectDetails from "./pages/ProjectDetails"; // Import the dynamic Project Details page

const App = () => {
  return (
    <Router>
      <Cursor />
      <Navbar />

      <div className="app-content">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Dynamic route for individual projects */}
          <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/Services";
import AboutPage from "./Pages/About";
import TrustedPage from "./Pages/Trusted";
import CareersPage from "./Pages/Careers";
import BlogPage from "./Pages/Blog";
import ContactPage from "./Pages/ContactPage";

const App = () => {
  const theme = useSelector((state) => state.ui.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/trusted" element={<TrustedPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* Add for Page Not Found */}
      <Route path="*" element={<NotFountPage />} />
    </Routes>
  );
};

function NotFountPage() {
  return (
    <div
      className="app-shell"
      style={{ padding: "100px 20px", textAlign: "center" }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "24px" }}>Page Not Found</p>
    </div>
  );
}
export default App;

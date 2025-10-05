import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import FullProjects from "./components/FullProjects";
import Footer from "./components/Footer";

// Wrapper component to handle scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// Layout component to handle shared structure
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// Page components
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
  </>
);

const AboutPage = () => <About />;
const ProjectsPage = () => <Projects />;
const SkillsPage = () => <Skills />;
const ExperiencePage = () => <Experience />;
const ContactPage = () => <Contact />;
const FullProjectsPage = () => <FullProjects />;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/fullprojects" element={<FullProjects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

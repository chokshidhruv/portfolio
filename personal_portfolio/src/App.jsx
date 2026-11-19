import "./App.css";
import Headroom from "react-headroom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-slate-950 font-space text-slate-400">
      <Headroom style={{ zIndex: 999 }}>
        <Navbar />
      </Headroom>
      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

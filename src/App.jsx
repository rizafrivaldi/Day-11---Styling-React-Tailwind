import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

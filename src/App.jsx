import Navbar from "./components/Navbar";
import "./App.css"
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
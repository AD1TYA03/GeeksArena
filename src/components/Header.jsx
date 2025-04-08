import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-6 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-400">
        Geeks Arena
      </h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 text-gray-300">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        <Link to="/join" className="hover:text-blue-400">Join Us</Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-center gap-4 py-4 md:hidden z-50 shadow-xl border-t border-gray-700">
          <Link to="/" className="hover:text-blue-400" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="hover:text-blue-400" onClick={toggleMenu}>About</Link>
          <Link to="/projects" className="hover:text-blue-400" onClick={toggleMenu}>Projects</Link>
          <Link to="/join" className="hover:text-blue-400" onClick={toggleMenu}>Join Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

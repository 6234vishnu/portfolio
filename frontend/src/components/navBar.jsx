import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = ({ onScrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    onScrollTo(id);
    setMenuOpen(false); // Close menu on click
  };

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="pl-6 font-bold text-xl md:text-2xl text-center md:text-left">
          MyPortfolio
        </div>

        {/* Hamburger button (mobile + tablet) */}
        <div
          style={{ backgroundColor: "white", color: "black" }}
          className="lg:hidden pr-6"
        >
          <button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div
          className="hidden lg:flex flex-wrap gap-12 xl:gap-24 lg:pl-40 xl:pl-80 uppercase text-base font-medium
"
        >
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("about")}
          >
            About
          </h5>
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </h5>
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </h5>
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("certificates")}
          >
            Certificates
          </h5>
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("contacts")}
          >
            Contact
          </h5>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 py-4 uppercase text-sm font-medium bg-white shadow-md">
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("about")}
          >
            About
          </h5>
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </h5>
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </h5>
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("certificates")}
          >
            Certificates
          </h5>
          <h5
            className="cursor-pointer hover:text-gray-600 transition"
            onClick={() => handleNavClick("contacts")}
          >
            Contact
          </h5>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

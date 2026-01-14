import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink, Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Patients', path: '/patients' },
  { name: 'Pharmacy', path: '/pharmacy' },
  { name: 'Pages', path: '/pages' },
  { name: 'Blog', path: '/blog' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Used to track route changes for the underline

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
            Doccure
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 text-sm font-semibold transition-colors text-gray-700 hover:text-blue-600 group"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${isActive ? "inline-block text-blue-600" : "inline-block"}`}
                  >
                    {link.name}
                  </motion.span>

                  {/* Animated Active Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 mx-4"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="px-5 py-2 text-blue-50 bg-linear-to-r from-blue-600 to-blue-400 font-medium hover:bg-blue-50 rounded-full transition-all">
              Sign In
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-black text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition-all"
            >
              Register
            </motion.button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden text-gray-700 p-2 ${scrolled ? "rounded-full border border-blue-300" : ""}`}>
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (Card style on Left) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed top-4 left-4 bottom-4 w-72 bg-white z-50 md:hidden shadow-2xl rounded-3xl overflow-hidden flex flex-col"
              initial={{ x: "-110%" }}
              animate={{ x: 0 }}
              exit={{ x: "-110%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between px-6 py-6 border-b">
                <span className="text-xl font-bold text-blue-600">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full">
                  <FaXmark size={18} />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `block px-4 py-3 rounded-2xl font-medium transition-all ${
                        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className="p-6 border-t space-y-3">
                <Link to="/login" className="block text-center w-full py-3 text-blue-600 font-bold border border-blue-100 rounded-2xl">
                  Sign In
                </Link>
                <Link to="/register" className="block text-center w-full py-3 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200">
                  Register
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
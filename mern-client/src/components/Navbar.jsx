import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../context/AuthProvider';

const Sidebar = ({ navItems, closeSidebar }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeSidebar}>
    <div className="bg-blue-700 text-white w-64 h-full fixed top-0 right-0 transform translate-x-0 overflow-y-auto transition-transform ease-in-out duration-300">
      <ul className="p-4">
        {navItems.map(({ link, path }) => (
          <li key={path} className="mb-4">
            <Link to={path} className="block text-base text-white uppercase cursor-pointer hover:text-blue-700" onClick={closeSidebar}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const {currentUser}= useContext(AuthContext);
  console.log(currentUser)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeSidebar = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      link: "Home",
      path: "/"
    },
    {
      link: "About",
      path: "/about"
    },
    {
      link: "Shop",
      path: "/shop"
    },
    {
      link: "Sell Your Book",
      path: "/admin/dashboard"
    },
    {
      link: "Blog",
      path: "/blog"
    }
  ];

  return (
    <header className={`${isSticky ? 'sticky' : ''}`}>
      <nav className="bg-teal-100 p-4">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <FaBlog className="inline-block" />Books
          </Link>

          {/* Responsive menu toggle button */}
          <div className="md:hidden lg:flex">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}

            </button>
            {
              currentUser?currentUser.email:" "
            }
          </div>

          {/* Render Sidebar for small screens */}
          {isMenuOpen && <Sidebar navItems={navItems} closeSidebar={closeSidebar} />}

          {/* Responsive menu items */}
          <ul className={`md:flex space-x-12 hidden`}>
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

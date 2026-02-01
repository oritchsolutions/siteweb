import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence} from 'framer-motion'
import { Menu, X } from "lucide-react";
import Theme from './Theme';
import assets from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ theme, setTheme }) => {
  const [ouvert, setOuvert] = useState(false);

  const click = () => setOuvert(!ouvert);

  // Bloquer le scroll quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = ouvert ? 'hidden' : '';
  }, [ouvert]);

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/services', label: 'Services' },
    { to: '/equipe', label: 'Équipe' },
    { to: '/realisations', label: 'Réalisations' },
    { to: '/contactez-nous', label: 'Contacts' }
  ];

  return (
    <>
      {/* Sticky header */}
      <motion.header 
        className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-8 xl:px-40 py-4
                   bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-grey-light dark:border-border-dark"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo */}
        <Link to="/">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={assets.logo} alt="Logo Oritch Solution" className="w-10 sm:w-10" />
            <span className="text-lg font-bold tracking-tight text-dark dark:text-white">
              Oritch Solution
            </span>
          </motion.div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium sm:hover:text-primary transition-colors ${
                    isActive ? 'text-primary dark:text-white' : 'text-dark-secondary dark:text-text-grey'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Actions desktop + mobile button */}
        <motion.div 
          className="flex gap-6 items-center"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Theme theme={theme} setTheme={setTheme} />
          <Link to="/contactez-nous">
            <motion.button 
              className="hidden md:flex items-center gap-2 text-sm font-bold
                         bg-primary dark:bg-primary-dark text-white dark:text-dark px-4 py-2 rounded-lg
                         cursor-pointer hover:scale-105 hover:bg-primary-hover dark:hover:bg-primary-dark
                         shadow-md shadow-primary/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez-nous
            </motion.button>
          </Link>
          {/* Hamburger menu mobile */}
          <motion.button
            onClick={click}
            aria-label="Toggle menu"
            className="md:hidden text-dark dark:text-white z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-7 w-7" />
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Sidebar mobile */}
      <AnimatePresence>
        {ouvert && (
          <>
            {/* Overlay sombre */}
            <motion.div
              onClick={() => setOuvert(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            <motion.nav 
              className="fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-primary-light dark:bg-dark
                        flex flex-col items-center justify-center gap-6 z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {links.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setOuvert(false)}
                    className="text-dark-secondary dark:text-text-grey text-lg font-medium sm:hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.1 }}
              >
                <Link to="/contactez-nous">
                  <motion.button 
                    className="text-sm font-bold items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg
                               cursor-pointer hover:scale-105 hover:bg-primary-hover shadow-md shadow-primary/20 transition-all" 
                    onClick={() => setOuvert(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contactez-nous
                  </motion.button>
                </Link>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
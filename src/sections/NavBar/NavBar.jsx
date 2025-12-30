import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/ui/uiSlice";
import styles from "./NavBar.module.css";
import { MoonIcon, SunIcon } from "lucide-react";

const links = [
  { href: "/", label: "Home", type: "route" },
  { href: "/services", label: "Services", type: "route" },
  { href: "/about", label: "About Us", type: "route" },
  { href: "/trusted", label: "Trusted By", type: "route" },
  { href: "/careers", label: "Careers", type: "route" },
  { href: "/blog", label: "Blog", type: "route" },
];

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useSelector((state) => state.ui.theme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.nav}>
      <div className={styles.bar}>
        <div className={styles.brand}>
          <img
            src="/logo.svg"
            alt="StakOceans.AI logo"
            className={styles.logo}
          />
          <div>
            <span className={styles.name}>StakOceans.AI</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.links}>
          {links.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2, color: "#2dd4ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {link.type === "route" ? (
                <Link
                  to={link.href}
                  className={
                    location.pathname === link.href ? styles.active : ""
                  }
                >
                  {link.label}
                </Link>
              ) : (
                <a href={link.href}>{link.label}</a>
              )}
            </motion.div>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>

          <a className={styles.cta} href="#contact">
            Book a call
          </a>

          {/* Mobile Burger Menu Button */}
          <button
            className={styles.burgerButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className={`${styles.burgerIcon} ${isMobileMenuOpen ? styles.open : ""}`}>
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu */}
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className={styles.mobileLinks}>
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.type === "route" ? (
                      <Link
                        to={link.href}
                        className={`${styles.mobileLink} ${
                          location.pathname === link.href ? styles.mobileActive : ""
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className={styles.mobileLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}
                
                {/* Theme Toggle in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.05 }}
                  className={styles.mobileThemeWrapper}
                >
                  <button
                    className={styles.mobileThemeToggle}
                    onClick={() => {
                      dispatch(toggleTheme());
                    }}
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
                    <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                  </button>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (links.length + 1) * 0.05 }}
                  className={styles.mobileCTAWrapper}
                >
                  <a
                    href="#contact"
                    className={styles.mobileCTA}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a call
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;





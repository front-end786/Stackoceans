import { motion } from "framer-motion";
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
            {/* <span className={styles.tag}>Intelligent Product Studio</span> */}
          </div>
        </div>

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
        </div>
      </div>
    </header>
  );
};

export default NavBar;




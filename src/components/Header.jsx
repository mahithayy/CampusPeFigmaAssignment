
import React,{ useState } from 'react';
import Button from './Button.jsx';

const navLinks = [
  { label: 'Colleges', href: '#colleges' },
  { label: 'Employers', href: '#employers' },
  { label: 'Jobs', href: '#opportunities' },
  { label: 'Blogs', href: '#blogs' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#home"
          aria-label="CampusPe home"
          onClick={closeMenu}
        >
          CampusPe<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`header-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="header-actions">
            <Button
              variant="secondary"
              href="#sign-in"
              onClick={closeMenu}
            >
              Sign In
            </Button>

            <Button href="#sign-up" onClick={closeMenu}>
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

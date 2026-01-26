import { useEffect, useId, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../public/img/logo/tinkeryLogo.webp";

import "@fortawesome/fontawesome-free/css/all.min.css";


function scrollToId(id) {
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function NavLinkToSection({ id, children, onNavigate }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    onNavigate?.();

    if (location.pathname === "/") {
      scrollToId(id);
      return;
    }

    navigate(`/#${id}`);
    setTimeout(() => scrollToId(id), 50);
  };

  return (
    <a href={`/#${id}`} onClick={handleClick}>
      {children}
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const mobileMenuId = useId();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    setTimeout(() => scrollToId(hash), 50);
  }, [location.pathname, location.hash]);

  return (
    <>
      <header className="Navigation">
        <div className="navSpacer" />

        <nav className="navCenter" aria-label="Hauptnavigation">
          <ul className="navList">
            <li>
              <NavLinkToSection id="so-gehts">So geht&apos;s</NavLinkToSection>
            </li>
            <li>
              <NavLinkToSection id="events">Events</NavLinkToSection>
            </li>
          </ul>

          <Link to="/" aria-label="Zur Startseite" className="logoLink">
            <img src={logo} className="logo" alt="Malstudio Tinkery" />
          </Link>

          <ul className="navList">
            <li>
              <NavLinkToSection id="buchung">Termin Buchen</NavLinkToSection>
            </li>
            <li>
              <NavLinkToSection id="ueber-uns">Über Uns</NavLinkToSection>
            </li>
          </ul>
        </nav>

        <div className="socialMedia" aria-label="Social Media">
          <a
            href="https://www.instagram.com/malstudio.tinkery/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
            aria-label="Instagram öffnen (neuer Tab)"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
            aria-label="Pinterest öffnen (neuer Tab)"
          >
            <i className="fa-brands fa-square-pinterest" aria-hidden="true"></i>
          </a>
        </div>

        <button
          type="button"
          className="burgerBtn"
          aria-label="Menü öffnen"
          aria-expanded={open}
          aria-controls={mobileMenuId}
          onClick={() => setOpen(true)}
        >
          <span className="burgerIcon" aria-hidden="true" />
        </button>
      </header>

      {/* Overlay nur rendern wenn open (wichtig gegen a11y + focus + Lighthouse) */}
      {open && (
        <div
          className="mobileMenuOverlay isOpen"
          role="button"
          tabIndex={0}
          aria-label="Menü schließen"
          onClick={closeMenu}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") closeMenu();
          }}
        />
      )}

      {/* Mobile Menü nur rendern wenn open */}
      {open && (
        <nav
          id={mobileMenuId}
          className="mobileMenu isOpen"
          aria-label="Mobile Menü"
        >
          <div className="mobileMenuHeader">
            <Link
              to="/"
              aria-label="Zur Startseite"
              onClick={closeMenu}
              className="logoLink"
            >
<img
  src={logo}
  className="logo"
  alt="Malstudio Tinkery"
  width="120"
  height="120"
  decoding="async"
/>
            </Link>

            <button
              type="button"
              className="closeBtn"
              onClick={closeMenu}
              aria-label="Menü schließen"
            >
              ✕
            </button>
          </div>

          <ul className="mobileNavList">
            <li>
              <NavLinkToSection id="so-gehts" onNavigate={closeMenu}>
                So geht&apos;s
              </NavLinkToSection>
            </li>
            <li>
              <NavLinkToSection id="events" onNavigate={closeMenu}>
                Events
              </NavLinkToSection>
            </li>
            <li>
              <NavLinkToSection id="buchung" onNavigate={closeMenu}>
                Termin Buchen
              </NavLinkToSection>
            </li>
            <li>
              <NavLinkToSection id="ueber-uns" onNavigate={closeMenu}>
                Über Uns
              </NavLinkToSection>
            </li>
          </ul>

          <div className="mobileSocial" aria-label="Social Media">
            <a
              href="https://www.instagram.com/malstudio.tinkery/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
              aria-label="Instagram öffnen (neuer Tab)"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
              aria-label="Pinterest öffnen (neuer Tab)"
            >
              <i
                className="fa-brands fa-square-pinterest"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </nav>
      )}

{/* HERO */}
<div className="hero heroBg" aria-hidden="true">
  <picture className="heroMedia">
    <source
      media="(min-width: 1200px)"
      srcSet={`${import.meta.env.BASE_URL}img/bemalteTeller-L.webp`}
    />
    <source
      media="(min-width: 768px)"
      srcSet={`${import.meta.env.BASE_URL}img/bemalteTeller-S.webp`}
    />
    <img
      className="heroImg"
      src={`${import.meta.env.BASE_URL}img/bemalteTeller-Mobile.webp`}
      alt=""
      fetchPriority="high"
      decoding="async"
    />
  </picture>

  <svg className="wave-svg wave-svg-top" viewBox="0 0 1440 200" preserveAspectRatio="none">
    <defs>
      <filter id="waveShadow" x="-20%" y="-20%" width="140%" height="200%">
        <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="black" floodOpacity="0.35" />
      </filter>
    </defs>
    <path
      filter="url(#waveShadow)"
      fill="#f1dfd1"
      d="M 0 60 C 200 200 720 120 1080 60 C 1260 40 1350 50 1440 60 L 1440 0 L 0 0 Z"
    />
  </svg>

  <svg className="wave-svg wave-svg-bottom" viewBox="0 0 1440 200" preserveAspectRatio="none">
    <path
      filter="url(#waveShadow)"
      fill="#f1dfd1"
      d="M 0 120 C 400 00 720 120 1080 100 C 10 0 1350 200 1450 100 L 1440 0 L 0 0 Z"
    />
  </svg>
</div>

<div className="after-hero" />
    </>
  );
}
import { Link } from "react-router-dom";
import logo from "../../public/img/logo/tinkeryLogoRund.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bgFooter">
      <section className="footerInner">
        <div className="footerTop">
          <div className="shop">
          <img
  src={logo}
  className="logo"
  alt="Malstudio Tinkery"
  width="120"
  height="120"
  decoding="async"
/>
            <div className="shopSM" aria-label="Social Media">
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
          </div>

          <div className="contact">
            <h3>Kontaktiert uns</h3>
            <p>
              <a className="legalLink" href="mailto:hallo@malstudio-tinkery.de">
                hallo@malstudio-tinkery.de
              </a>
            </p>
            <p>
              Johann-Breuker-Platz 7 <br />
              46244 Bottrop <br />
              Deutschland
            </p>
          </div>

          <div className="info">
            <h3>Informationen</h3>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/#faq">FAQ</Link>
          </div>
        </div>

        <div className="footerBottom">
          <hr className="footerHr" />
          <p className="copyright">© 2026 Tinkery. Alle Rechte vorbehalten.</p>
        </div>
      </section>
    </footer>
  );
}
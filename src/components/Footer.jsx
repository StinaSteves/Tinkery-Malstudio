import { Link } from "react-router-dom";
import logo from "../../public/img/logo/tinkeryLogoRund.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bgFooter">
      <section className="footerInner">
        <div className="footerTop">
          {/* Brand */}
          <div className="footerBrand">
            <img
              src={logo}
              className="footerLogo"
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
                <i
                  className="fa-brands fa-square-pinterest"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>


          {/* Öffnungszeiten */}
          <div className="footerCol">
            <h3>Öffnungszeiten</h3>

            <dl className="hoursDL">
              <div className="hoursRow">
                <dt>Mittwoch</dt>
                <dd>13:00–15:30 · 16:00–18:30</dd>
              </div>

              <div className="hoursRow">
                <dt>Donnerstag</dt>
                <dd>13:00–15:30 · 16:00–18:30</dd>
              </div>

              <div className="hoursRow">
                <dt>Freitag</dt>
                <dd>13:00–15:30 · 16:00–18:30</dd>
              </div>

              <div className="hoursRow">
                <dt>Samstag</dt>
                <dd>10:00–12:30 · 13:30–16:00</dd>
              </div>
            </dl>
          </div>

          {/* Kontakt */}
          <div className="footerCol">
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

          {/* Infos */}
          <div className="footerCol">
            <h3>Informationen</h3>
            <nav className="footerLinks" aria-label="Footer Navigation">
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
              <Link to="/#faq">FAQ</Link>
            </nav>
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
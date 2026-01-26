import { Link } from "react-router-dom";

export default function Impressum() {
  return (
    <main className="legalPage" aria-labelledby="imprint-title">
      <section className="legalWrap">
        <header className="legalHeader">
          <h1 id="imprint-title">Impressum</h1>
          <p className="legalLead">Angaben gemäß § 5 TMG</p>
        </header>

        <div className="legalCard">
          <h2>Malstudio Tinkery</h2>
          <p>
            Inhaberin: Alina Hörnschemeyer
            <br />
            Johann-Breuker-Platz 7
            <br />
            46244 Bottrop
            <br />
            Deutschland
          </p>

          <div className="legalDivider" />

          <h2>Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a className="legalLink" href="mailto:hallo@malstudio-tinkery.de">
              hallo@malstudio-tinkery.de
            </a>
          </p>

          <div className="legalDivider" />

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE363487177
          </p>

          <div className="legalDivider" />

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Alina Hörnschemeyer
            <br />
            Johann-Breuker-Platz 7
            <br />
            46244 Bottrop
          </p>

          <div className="legalDivider" />

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG bin ich als Diensteanbieterin jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder
            nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <div className="legalDivider" />

          <h2>Haftung für Links</h2>
          <p>
            Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren
            Inhalte ich keinen Einfluss habe. Deshalb kann für diese fremden Inhalte
            keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <div className="legalDivider" />

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
            des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Autorin.
          </p>
        </div>

        <div className="legalBack">
          <Link to="/" className="legalBackBtn" aria-label="Zurück zur Startseite">
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>
    </main>
  );
}
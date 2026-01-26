import { Link } from "react-router-dom";

export default function Datenschutz() {
  return (
    <main className="legalPage" aria-labelledby="privacy-title">
      <section className="legalWrap">
        <header className="legalHeader">
          <h1 id="privacy-title">Datenschutzerklärung</h1>
          <p className="legalLead">
            Informationen zum Datenschutz gemäß Art. 13 DSGVO
          </p>
        </header>

        <div className="legalCard">
          <h2>1. Verantwortliche Stelle</h2>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>

          <p>
            <strong>Malstudio Tinkery</strong>
            <br />
            Inhaberin: Alina Hörnschemeyer
            <br />
            Johann-Breuker-Platz 7
            <br />
            46244 Bottrop
            <br />
            Deutschland
          </p>

          <p>
            E-Mail:{" "}
            <a className="legalLink" href="mailto:hallo@malstudio-tinkery.de">
              hallo@malstudio-tinkery.de
            </a>
          </p>

          <div className="legalDivider" />

          <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p>
            Der Schutz deiner persönlichen Daten ist mir ein besonderes Anliegen.
            Ich behandle deine personenbezogenen Daten vertraulich und entsprechend
            der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <p>
            Personenbezogene Daten sind alle Daten, mit denen du persönlich
            identifiziert werden kannst.
          </p>

          <div className="legalDivider" />

          <h2>3. Erhebung von Daten beim Besuch der Website</h2>
          <p>
            Beim Aufrufen dieser Website werden durch den Hosting-Provider automatisch
            Informationen in sogenannten Server-Logfiles erhoben und gespeichert.
            Diese Informationen umfassen:
          </p>

          <p>
            – IP-Adresse
            <br />
            – Datum und Uhrzeit der Anfrage
            <br />
            – Browsertyp und Browserversion
            <br />
            – verwendetes Betriebssystem
            <br />
            – Referrer-URL
          </p>

          <p>
            Diese Daten dienen ausschließlich der technischen Überwachung und
            Verbesserung der Website und lassen keine direkten Rückschlüsse auf
            deine Person zu.
          </p>

          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
          </p>

          <div className="legalDivider" />

          <h2>4. Buchungssystem Reservino</h2>
          <p>
            Auf dieser Website ist ein externes Buchungssystem des Anbieters
            <strong> Reservino </strong> eingebunden.
          </p>

          <p>
            Wenn du über das Buchungstool einen Termin buchst, werden die von dir
            eingegebenen personenbezogenen Daten (z. B. Name, E-Mail-Adresse,
            ggf. Telefonnummer und Buchungsdaten) direkt an Reservino übermittelt
            und dort verarbeitet.
          </p>

          <p>
            Die Verarbeitung der Daten erfolgt zur Durchführung der Terminbuchung
            und zur Erfüllung eines Vertrages.
          </p>

          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
          </p>

          <p>
            Weitere Informationen zur Datenverarbeitung durch Reservino findest du unter:
            <br />
            <a
              className="legalLink"
              href="https://www.reservino.com/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.reservino.com/datenschutz
            </a>
          </p>

          <div className="legalDivider" />

          <h2>5. Social Media Links (Instagram & Pinterest)</h2>
          <p>
            Auf dieser Website sind Links zu sozialen Netzwerken integriert
            (Instagram und Pinterest).
          </p>

          <p>
            Wenn du einen dieser Links anklickst, wirst du direkt zur jeweiligen
            Plattform weitergeleitet. Dabei können personenbezogene Daten (z. B.
            deine IP-Adresse) an den jeweiligen Anbieter übermittelt werden.
          </p>

          <p>
            Die Nutzung dieser Links erfolgt im Interesse einer ansprechenden
            Darstellung meines Angebots.
          </p>

          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
          </p>

          <p>Weitere Informationen findest du in den Datenschutzerklärungen der jeweiligen Anbieter:</p>

          <p>
            Instagram:{" "}
            <a
              className="legalLink"
              href="https://privacycenter.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://privacycenter.instagram.com
            </a>
            <br />
            Pinterest:{" "}
            <a
              className="legalLink"
              href="https://policy.pinterest.com/de/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policy.pinterest.com/de/privacy-policy
            </a>
          </p>

          <div className="legalDivider" />

          <h2>6. Kontaktaufnahme per E-Mail</h2>
          <p>
            Wenn du mir per E-Mail Anfragen zukommen lässt, werden deine Angaben aus
            der E-Mail inklusive der von dir angegebenen Kontaktdaten gespeichert,
            um deine Anfrage zu bearbeiten.
          </p>

          <p>Diese Daten werden nicht ohne deine Einwilligung weitergegeben.</p>

          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
          </p>

          <div className="legalDivider" />

          <h2>7. Deine Rechte</h2>
          <p>Du hast jederzeit das Recht auf:</p>

          <p>
            – Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)
            <br />
            – Berichtigung unrichtiger Daten (Art. 16 DSGVO)
            <br />
            – Löschung deiner Daten (Art. 17 DSGVO)
            <br />
            – Einschränkung der Verarbeitung (Art. 18 DSGVO)
            <br />
            – Datenübertragbarkeit (Art. 20 DSGVO)
            <br />
            – Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
          </p>

          <p>
            Hierzu genügt eine formlose E-Mail an:
            <br />
            <a className="legalLink" href="mailto:hallo@malstudio-tinkery.de">
              hallo@malstudio-tinkery.de
            </a>
          </p>

          <div className="legalDivider" />

          <h2>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>

          <p>
            Zuständige Aufsichtsbehörde:
            <br />
            Landesbeauftragte für Datenschutz und Informationsfreiheit NRW
            <br />
            Kavalleriestraße 2–4
            <br />
            40213 Düsseldorf
            <br />
            <a
              className="legalLink"
              href="https://www.ldi.nrw.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ldi.nrw.de
            </a>
          </p>

          <div className="legalDivider" />

          <h2>9. Aktualität dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung hat den Stand Januar 2026.
            Durch die Weiterentwicklung der Website oder gesetzliche Änderungen
            kann eine Anpassung erforderlich werden.
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
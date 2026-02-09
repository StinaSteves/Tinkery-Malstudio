import { useId, useState } from "react";

const FAQS = [
  {
    q: "Wie läuft das Keramikbemalen bei euch ab?",
    a: (
      <>
        <p><strong>Step 1:</strong> Reserviere deine Malzeit bequem über unser Buchungstool. Unsere Malzeiten finden von Mittwoch bis Sonntag statt.</p>

        <p><strong>Step 2:</strong> Komm zur gebuchten Zeit zu uns. Du erhältst eine kurze Einführung und suchst dir anschließend deine Wunschkeramik aus. Bitte desinfiziere dir vorab die Hände. Die ausgewiesenen Preise sind Komplettpreise – es entstehen keine zusätzlichen Kosten.</p>

        <p><strong>Step 3:</strong> Wähle Farben und Pinsel aus und lege direkt los. Auf den Tischen stehen Wasserbehälter zum Auswaschen der Pinsel bereit. Bitte markiere deine Keramik auf der Unterseite eindeutig (z. B. mit Initialen) und trage diese Kennzeichnung auch auf dem Abholzettel ein.</p>

        <p><strong>Step 4:</strong> Wir stellen dir zahlreiche Hilfsmittel und Techniken zur Verfügung – von Schablonen bis zu Siebdruckmotiven. Unsere Technikanleitungen helfen dir dabei, und bei Fragen sind wir jederzeit für dich da.</p>

        <p><strong>Step 5:</strong> Du hast bis zu 2,5 Stunden Zeit, deine Keramik zu bemalen. Anschließend gibst du sie bei uns zum Brennen ab und bezahlst. Bitte beachte: Bei uns ist ausschließlich Kartenzahlung möglich.</p>

        <p><strong>Step 6:</strong> Deine Keramik wird getrocknet, transparent glasiert und bei ca. 1.000 °C gebrannt. Nach etwa einer Woche kannst du sie bei uns abholen. Bitte bringe dafür deinen Abholzettel sowie eine Tasche für den Transport mit. Deine Keramik wird bis zu 2 Monate bei uns aufbewahrt.</p>
      </>
    ),
  },

  {
    q: "Was passiert, wenn meine Keramik beim Brennen beschädigt wird?",
    a: (
      <>
        <p>
          Wir behandeln deine Keramik mit größter Sorgfalt. Dennoch kann es in sehr seltenen Fällen vorkommen, dass
          Keramik beim Brennvorgang beschädigt wird.
        </p>
        <p>
          Sollte dies passieren, kannst du die gleiche Keramik kostenfrei erneut bemalen. Alternativ stellen wir dir
          einen Gutschein in Höhe des Keramikpreises aus.
        </p>
        <p>
          Kleine Haarrisse können gelegentlich entstehen und gelten nicht als Qualitätsmangel. Sie sind ein
          natürlicher Effekt des Brennvorgangs in Kombination mit bleifreien Glasuren.
        </p>
      </>
    ),
  },

  {
    q: "Was kostet das Keramikbemalen? Gibt es eine Kursgebühr?",
    a: (
      <p>
        Der Preis richtet sich nach der ausgewählten Keramik. Unsere Preise liegen zwischen 15 € und 59 €,
        durchschnittlich bei etwa 25–30 €. Alle Materialien, Glasuren und Brennvorgänge sind im Preis enthalten.
        Eine zusätzliche Kurs- oder Teilnahmegebühr gibt es nicht.
      </p>
    ),
  },

  {
    q: "Ab welchem Alter dürfen Kinder teilnehmen?",
    a: (
      <p>
        Kinder jeden Alters sind herzlich willkommen. Kinder unter 12 Jahren dürfen jedoch nur in Begleitung
        eines Erwachsenen teilnehmen. Bitte beachte, dass Begleitpersonen aufgrund begrenzter Plätze ebenfalls
        Keramik bemalen.
      </p>
    ),
  },

  {
    q: "Gibt es Angebote für Gruppen, Geburtstage oder Firmenevents?",
    a: (
      <>
        <p>
          Sehr gerne richten wir (Kinder-)Geburtstage, Junggesellenabschiede und Firmenevents bei uns aus.
          Bitte beachte, dass wir keinen separaten Eventraum haben.
        </p>
        <p>
          Wenn du eine Malzeit für eine größere Gruppe buchen möchtest, schreib uns bitte eine E-Mail an{" "}
          <a href="mailto:hallo@malstudio-tinkery.de">hallo@malstudio-tinkery.de</a> mit folgenden Angaben:
        </p>
        <ul>
          <li>Dein Name</li>
          <li>Voraussichtliche Personenzahl</li>
          <li>Gewünschtes Datum und Uhrzeit</li>
          <li>Anlass der Feier</li>
        </ul>
        <p>
          Kindergeburtstage bieten wir ausschließlich mittwochs und donnerstags an.
        </p>
      </>
    ),
  },

  {
    q: "Kann ich Keramik mit nach Hause nehmen und dort bemalen?",
    a: (
      <>
        <p>
          Ja, du kannst deine Keramik auch ganz entspannt zu Hause bemalen. Dafür kommst du mittwochs oder donnerstags
          zu unseren Öffnungszeiten vorbei und stellst dir eine individuelle <em>Maltüte to go</em> zusammen.
        </p>
        <p>
          Pro Keramik erhältst du bis zu 60 ml Farbe sowie drei Pinsel. Die Farbe wird in Tiegel abgefüllt und kann
          mitgenommen werden. Für jede Rohkeramik erheben wir ein Pfand von 15 €.
        </p>
        <p>
          Bringst du die bemalte Keramik inklusive Zubehör (Pinsel und Farbtiegel) innerhalb von 7 Tagen vollständig
          und sauber zurück, wird das Pfand vollständig mit dem Keramikpreis verrechnet.
        </p>
        <p>
          Die fertig gebrannte Keramik kann nach etwa 7 Tagen abgeholt werden.
        </p>
      </>
    ),
  },

  {
    q: "Wie sind eure Öffnungszeiten?",
    a: (
      <>
        <p>
          Unsere Öffnungszeiten entsprechen gleichzeitig den Malzeiten. Wir haben von Mittwoch bis Sonntag geöffnet:
        </p>
        <ul>
          <li><strong>Mittwoch – Freitag:</strong> 13:00–15:30 Uhr · 16:00–18:30 Uhr</li>
          <li><strong>Samstag:</strong> 10:00–12:30 Uhr · 13:30–16:00 Uhr</li>
        </ul>
        <p>
          Bitte beachte: In den ersten 30 Minuten nach Beginn einer Malzeit findet unsere Einführung statt.
          Möchtest du lediglich Keramik abholen oder hast Fragen, komm bitte etwa 30 Minuten später vorbei,
          damit wir uns ausreichend Zeit für dich nehmen können.
        </p>
      </>
    ),
  },
  {
  q: "Wann kann ich meine fertige Keramik abholen?",
  a: (
    <>
      <p>
        Deine Keramik ist nach <strong>7 Tagen</strong> abholbereit.
        Es erfolgt <strong>keine separate Benachrichtigung</strong> per E-Mail oder Telefon.
      </p>
      <p>
        Wir öffnen jeweils zu Beginn unserer Kurszeiten. Bitte komm möglichst
        <strong> etwa 30 Minuten nach Öffnung</strong>, da wir zuvor noch mit der
        Einführung für unsere Kursteilnehmerinnen und -Teilnehmer beschäftigt sind.
      </p>
    </>
  ),
},

{
  q: "Wie lange habe ich Zeit, meine Keramik abzuholen?",
  a: (
    <p>
      Wir bewahren deine fertig gebrannte Keramik <strong>2 Monate</strong> für dich auf.
      Bitte hole sie innerhalb dieses Zeitraums ab.
    </p>
  ),
},
];

export default function Faq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((current) => (current === i ? null : i));

  return (
    <section id="faq" className="faqWrap" aria-labelledby="faq-title">
      <div className="pageContainer">
        <h2 id="faq-title" className="faqTitle">
          Häufige Fragen
        </h2>

        <div className="faqList">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            const questionId = `${baseId}-faq-q-${i}`;
            const answerId = `${baseId}-faq-a-${i}`;

            return (
              <div className="faqItem" key={item.q} role="group" aria-labelledby={questionId}>
                <button
                  className="faqQuestion"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggle(i)}
                >
                  <span id={questionId}>{item.q}</span>
                  <span className={`faqChevron ${isOpen ? "isOpen" : ""}`} >
                    ▾
                  </span>
                </button>

                <div
                  id={answerId}
                  className={`faqAnswer ${isOpen ? "isOpen" : ""}`}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                >
                  <div className="faqAnswerInner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
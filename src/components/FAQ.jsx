import { useId, useState } from "react";

const FAQS = [
  {
    q: "Wie läuft das Keramik bemalen ab?",
    a: (
      <>
        <p><strong>Step 1:</strong> Reserviere deine Malzeit direkt über unser Buchungstool. Unsere Malzeiten finden jeweils von Mittwoch bis Sonntag statt.</p>
        <p><strong>Step 2:</strong> Komme zur angegebenen Zeit zu uns. Du erhältst eine kurze Einführung und kannst dann deinen Rohling aussuchen. Bitte desinfiziere vorher deine Hände. Bei den gekennzeichneten Preisen handelt es sich um Komplettpreise – es wird nichts zusätzlich berechnet.</p>
        <p><strong>Step 3:</strong> Such dir Farbe und Pinsel aus und leg direkt mit dem Malen los. Mit den Wasserbehältern auf dem Tisch kannst du die Pinsel zwischendurch auswaschen. Bitte kennzeichne deine Keramik auf der Unterseite individuell, z. B. mit deinen Initialien. Bitte vermerke diese Kennzeichnung auf dem Abholzettel, damit wir deine Keramik nach dem Brennen zuordnen können.</p>
        <p><strong>Step 4:</strong> Wir haben viele Hilfsmittel für dich vorbereitet – von Schablonen über verschiedene Techniken ist alles dabei. Schau dir dazu gerne die Technikanleitungen an und sprich uns bei Fragen gerne direkt an!</p>
        <p><strong>Step 5:</strong> Du kannst deine Keramik bis zu 2,5 Stunden bei uns bemalen. Danach kannst du sie direkt bei uns zum Brennen abgeben und bezahlen. Bitte beachte: Es ist ausschließlich Kartenzahlung möglich.</p>
        <p><strong>Step 6:</strong> Wir lassen deine bemalte Keramik gut trocknen. Anschließend wird sie transparent glasiert und bei 1.000 Grad gebrannt. Nach einer Woche kannst du deine fertige Keramik bei uns abholen. Bitte bringe dazu unbedingt den Abholzettel und eine Tasche für den Transport mit. Die Abholzeiten beginnen jeweils 30 Minuten nach dem Beginn der Malzeiten. Deine Keramik wird 2 Monate bei uns aufbewahrt.</p>
      </>
    ),
  },
  {
    q: "Was passiert, wenn meine Keramik beim Brennvorgang beschädigt wird?",
    a: (
      <>
        <p>
          Wir passen mit höchster Sorgfalt auf deine Keramik auf. Leider kann es in sehr seltenen Fällen vorkommen,
          dass etwas kaputt geht. In diesem Fall hast du immer die Möglichkeit, die gleiche Keramik kostenfrei
          nochmals zu bemalen. Falls du das nicht möchtest, stellen wir dir einen Gutschein in Höhe deiner bemalten Keramik aus.
        </p>
        <p>
          Kleine Haarrisse können auftreten und stellen keinen Qualitätsmangel dar. Diese entstehen durch den
          Brennvorgang und die Verwendung bleifreier Glasuren.
        </p>
      </>
    ),
  },
  {
    q: "Was kostet das Keramik bemalen? Was kostet der Kurs?",
    a: (
      <p>
        Der Preis richtet sich nach der Keramik, die ihr euch aussucht. Unsere Preise liegen zwischen 15 und 59 Euro.
        Durchschnittlich kosten unsere Keramiken 25–30 Euro. Alle Materialien, Glasur und Brennvorgänge sind im Preis enthalten.
        Eine zusätzliche Kursgebühr fällt nicht an.
      </p>
    ),
  },
  {
    q: "Ab welchem Alter dürfen Kinder teilnehmen?",
    a: (
      <p>
        Kinder jeden Alters sind willkommen. Kinder unter 12 Jahren dürfen nur in Begleitung malen.
        Bitte beachte, dass Begleitpersonen aufgrund begrenzter Plätze ebenfalls Keramik bemalen.
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
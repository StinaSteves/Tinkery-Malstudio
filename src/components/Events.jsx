import { useId, useState } from "react";

import Valentin from "../../public/img/valentinstagPainting.webp";
import LadysNight from "../../public/img/ladysNight.webp";
import Afterwork from "../../public/img/afterWorkPainting.webp";

const SLIDES = [
  {
    id: 1,
    title: "Valentinstag Special",
    text:
      "Verbringt einen kreativen Abend zu zweit und bemalt gemeinsam eure Keramik. Perfekt für Paare, Freund:innen oder einfach Quality Time.",
    image: Valentin,
    cta: "Jetzt buchen",
    link: "/booking",
  },
  {
    id: 2,
    title: "Ladies Night",
    text:
      "Ein entspannter Abend nur für euch: Keramik bemalen, gute Gespräche und ein Glas Wein in gemütlicher Atmosphäre.",
    image: LadysNight,
    cta: "Jetzt buchen",
    link: "/events",
  },
  {
    id: 3,
    title: "After Work Painting",
    text:
      "Runterkommen nach der Arbeit: Schnapp dir Pinsel und Farben und starte kreativ in den Feierabend.",
    image: Afterwork,
    cta: "Jetzt buchen",
    link: "/booking",
  },
];

export default function Events() {
  const baseId = useId();
  const [index, setIndex] = useState(0);
  const active = SLIDES[index];

  const regionId = `${baseId}-events-region`;
  const titleId = `${baseId}-events-title`;

  const next = () => setIndex((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="events" className="eventsSlider" aria-labelledby={titleId}>
      <h2 id={titleId} className="sr-only">
        Events
      </h2>

      <div className="eventsInner">
        <div className="eventsText">
          <h3 className="eventsTitle" aria-live="polite">
            {active.title}
          </h3>

          <p className="eventsCopy">{active.text}</p>

          <a
            href={active.link}
            className="eventsCTA"
            aria-label={`${active.cta}: ${active.title}`}
          >
            {active.cta}
          </a>
        </div>

        <div
          className="eventsImage"
          role="region"
          aria-roledescription="Karussell"
          aria-label="Event-Slider"
        >
          <div id={regionId}>
            <img src={active.image} alt={active.title} />
          </div>

          <button
            type="button"
            className="navBtn prev"
            onClick={prev}
            aria-label="Vorheriger Slide"
            aria-controls={regionId}
          >
            ‹
          </button>

          <button
            type="button"
            className="navBtn next"
            onClick={next}
            aria-label="Nächster Slide"
            aria-controls={regionId}
          >
            ›
          </button>

          {/* ✅ KEIN tablist – das sind Pagination-Buttons */}
          <div className="dots" aria-label="Slide-Auswahl">
            {SLIDES.map((slide, i) => {
              const isActive = i === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  className={`dot ${isActive ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Slide ${i + 1}: ${slide.title}`}
                  aria-current={isActive ? "true" : undefined}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
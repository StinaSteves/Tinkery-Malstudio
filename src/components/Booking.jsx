export default function Booking() {
  return (
    <section
      id="buchung"
      className="bookingShowcase m-topL"
      aria-labelledby="booking-title"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}img/BG.webp)`,
      }}
    >
      <div className="bookingShowcase__overlay" aria-hidden="true" />

      <div className="bookingShowcase__content">
        <h2 id="booking-title" className="go">
          Termin buchen
        </h2>

        <p className="sr-only" id="booking-desc">
          Buchungstool von Reservino. Das Formular öffnet innerhalb dieser Seite.
        </p>

        <div className="bookingCard m-topL">
          <iframe
            id="reservino-form"
            className="bookingFrame"
            src="https://book.reservino.de/#/iframe/Malstudio-tinkery"
            title="Reservino Buchungsformular für Malstudio Tinkery"
            aria-describedby="booking-desc"
            loading="lazy"
          />

          <noscript>
            <p>
              JavaScript ist deaktiviert. Bitte nutze die Buchung über{" "}
              <a
                href="https://book.reservino.de/#/iframe/Malstudio-tinkery"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservino
              </a>
              .
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}
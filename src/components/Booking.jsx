

export default function Booking() {
  return (
    <section
      id="buchung"
      className="booking m-topL"
      aria-labelledby="booking-title"
    >
      <div className="bookingBG" />

      <div className="bookingContent">
        <h2 id="booking-title" className="go">
          Termin buchen
        </h2>

        <p className="sr-only" id="booking-desc">
          Buchungstool von Reservino. Das Formular öffnet innerhalb dieser Seite.
        </p>

        <div className="m-topL">
          <iframe
            id="reservino-form"
            src="https://book.reservino.de/#/iframe/Malstudio-tinkery"
            width="100%"
            height="920"
            style={{ border: "none", backgroundColor: "transparent" }}
            title="Reservino Buchungsformular für Malstudio Tinkery"
            aria-describedby="booking-desc"
            loading="lazy"
          />

          <noscript>
            <p>
              JavaScript ist deaktiviert. Bitte nutze die Buchung über Reservino:
              {" "}
              <a
                href="https://book.reservino.de/#/iframe/Malstudio-tinkery"
                target="_blank"
                rel="noopener noreferrer"
              >
                Termin online buchen
              </a>
              .
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}
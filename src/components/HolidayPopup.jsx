import { useEffect } from "react";

export default function HolidayPopup({
  title = "Betriebsferien",
  dates = "10.02. – 20.02.",
  message = "Wir haben in diesem Zeitraum geschlossen. Ab dem 21.02. sind wir wieder wie gewohnt für euch da.",
  ctaLabel = "Zum Buchungstool",
  ctaHref = "/#buchung",
  open = true, // ✅ immer offen
  onClose,
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

return (
  <div
    className="holidayModalOverlay"
    role="dialog"
    aria-modal="true"
    aria-labelledby="holidayModalTitle"
    onClick={(e) => {
      // Klick auf Overlay schließt, Klick im Modal nicht
      if (e.target === e.currentTarget) onClose?.();
    }}
  >
    <div className="holidayModal" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className="holidayClose"
        onClick={onClose}
        aria-label="Popup schließen"
      >
        ✕
      </button>

      <h2 id="holidayModalTitle" className="holidayTitle">
        {title}
      </h2>

      <p className="holidayDates">{dates}</p>

      <p className="holidayText">{message}</p>

      <div className="holidayActions">
        <a className="holidayCta" href={ctaHref}>
          {ctaLabel}
        </a>
        <button type="button" className="holidayGhost" onClick={onClose}>
          Schließen
        </button>
      </div>
    </div>
  </div>
);
}
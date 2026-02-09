import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Nav from "./components/Nav.jsx";
import HowTo from "./components/HowTo.jsx";
import Booking from "./components/Booking.jsx";
import Footer from "./components/Footer.jsx";
import Events from "./components/Events.jsx";
import FAQ from "./components/FAQ.jsx";
import Gutschein from "./components/Gutschein.jsx"
import HolidayPopup from "./components/HolidayPopup.jsx";

import Impressum from "./Pages/Impressum.jsx";
import Datenschutz from "./Pages/Datenschutz.jsx";
import AGB from "./Pages/AGB.jsx"

import "./App.css";
import "./mobile.css";

function Home() {
  const [showHoliday, setShowHoliday] = useState(true);

  return (
    <>
      {/* <HolidayPopup
        open={showHoliday}
        onClose={() => setShowHoliday(false)}
        title="Betriebsferien"
        dates="10.02. – 20.02."
        message="Wir haben Betriebsferien."
        ctaHref="/#buchung"
        ctaLabel="Zum Buchungstool"
      /> */}

      <HowTo />
      <Booking />
      <Events />
      <Gutschein/>
      <FAQ />
    </>
  );
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <Nav />

      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
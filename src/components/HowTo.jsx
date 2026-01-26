import keramikMobile from "../../public/img/keramikVase-mobile.webp";
import keramikS from "../../public/img/keramikVase-S.webp";
import keramikL from "../../public/img/keramikVase-L.webp";

import pinsel from "../../public/img/keramikBemalen.webp";
import brennen from "../../public/img/keramikBrennofen.webp";

export default function HowTo() {
  return (
    <section id="so-gehts" aria-labelledby="howto-title">
      <h2 id="howto-title" className="go">
        So geht&apos;s
      </h2>

      <div className="expImg">
        {/* Schritt 1 */}
        <div className="sImg">
          <article className="howCard" aria-labelledby="how-step-1-title">
            <picture>
              <source srcSet={keramikMobile} media="(max-width: 480px)" />
              <source srcSet={keramikS} media="(max-width: 1024px)" />
              <img
                src={keramikL}
                alt="Rohkeramik-Vasen zum Bemalen"
                width="1440"
                height="2160"
                loading="lazy"
                decoding="async"
              />
            </picture>

            <div className="stepTag">
              <h3 className="stepTitle">Schritt 1</h3>
            </div>

            <div className="howPanel">
              <p>
                Wähle dein Lieblingsstück aus über 100 verschiedenen Rohkeramiken – von Tellern,
                Tassen und Schalen bis hin zu Vasen und Dekoration
              </p>

              <h3 id="how-step-1-title" className="title-big">
                <span className="word-left">Keramik</span>
                <br />
                <span className="word-middle">&</span>
                <br />
                <span className="word-right">Farben</span>
              </h3>
            </div>
          </article>
        </div>

        {/* Schritt 2 */}
        <div className="sImg">
          <article className="howCard" aria-labelledby="how-step-2-title">
            <img src={pinsel} alt="Pinsel und Schablonen zum Keramikbemalen" loading="lazy" decoding="async" />

            <div className="stepTag">
              <h3 className="stepTitle">Schritt 2</h3>
            </div>

            <div className="howPanel">
              <p>
                Suche dir deine Malutensilien zusammen. Wir halten verschiedene Materialien für dich bereit,
                z. B. Pinsel in verschiedenen Größen, Siebdruckmotive und Schablonen.
              </p>

              <h3 id="how-step-2-title" className="title-big">
                <span className="word-left">Schablone</span>
                <br />
                <span className="word-middle">&</span>
                <br />
                <span className="word-right">Pinsel</span>
              </h3>
            </div>
          </article>
        </div>

        {/* Schritt 3 */}
        <div className="sImg">
          <article className="howCard" aria-labelledby="how-step-3-title">
            <img src={brennen} alt="Brennofen für glasierte Keramik" loading="lazy" decoding="async" />

            <div className="stepTag">
              <h3 className="stepTitle">Schritt 3</h3>
            </div>

            <div className="howPanel">
              <p>
                Wir übernehmen den Rest! Deine Keramik wird von uns glasiert und gebrannt,
                damit sie haltbar und lebensmittelecht wird.
              </p>

              <h3 id="how-step-3-title" className="title-big">
                <span className="word-left">Glasieren</span>
                <br />
                <span className="word-middle">&</span>
                <br />
                <span className="word-right">Brennen</span>
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
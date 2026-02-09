import hintergrund from "../../public/img/GutscheinMint.png";


export default function Gutschein() {
  return (
    <section
    id="gutschein"
      className="gutscheinSection"
      style={{ backgroundImage: `url(${hintergrund})` }}
    >
      <div className="gutscheinOverlay">
        <p className="gutscheinText">
          Gutscheine können vor Ort im Laden erworben werden
        </p>
      </div>
    </section>
  );
}
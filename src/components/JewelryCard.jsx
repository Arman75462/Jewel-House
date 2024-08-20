import "./styles/JewelryCard.css";

export default function JewelryCard({ cardTitle, imageSrc }) {
  return (
    <div className="JewelryCard">
      <img src={imageSrc} alt="wait" className="JewelryCard__image" />
      <p className="JewelryCard__title">{cardTitle}</p>
      <button className="JewelryCard__more-info-button">More info</button>
    </div>
  );
}

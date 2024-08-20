import "./styles/JewelryCard.css";

export default function JewelryCard({ cardTitle, imageSrc }) {
  return (
    <div className="JewelryCard">
      <img src={imageSrc} alt="wait" className="JewelryCard__image" />
      <h3 className="JewelryCard__title">{cardTitle}</h3>
    </div>
  );
}

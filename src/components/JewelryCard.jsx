import "./styles/JewelryCard.css";
import { Link } from "react-router-dom";

export default function JewelryCard({ cardTitle, imageSrc, jewelryCardId }) {
  return (
    <div className="JewelryCard">
      <img src={imageSrc} alt="wait" className="JewelryCard__image" />
      <h3 className="JewelryCard__title">{cardTitle}</h3>
      <Link
        to={`/shop/${jewelryCardId}`}
        className="JewelryCard__more-info-link"
      >
        More info
      </Link>
    </div>
  );
}

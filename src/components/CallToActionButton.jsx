import { Link } from "react-router-dom";
import "./styles/CallToActionButton.css";

export default function CallToActionButton({
  className = null,
  children,
  link,
}) {
  return (
    <Link to={link}>
      <button type="button" className={`CallToActionButton ${className}`}>
        {children}
      </button>
    </Link>
  );
}

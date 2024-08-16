import { NavLink } from "react-router-dom";
import "./styles/Navigation.css";

export default function Navigation({ className, handleHamburgerMenuClick }) {
  return (
    <nav className="Navigation">
      <ul className={className}>
        <li className="Navigation__item">
          <NavLink
            to="/"
            className="Navigation__link"
            onClick={handleHamburgerMenuClick}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
        </li>
        <li className="Navigation__item">
          <NavLink
            to="/shop"
            className="Navigation__link"
            onClick={handleHamburgerMenuClick}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Shop
          </NavLink>
        </li>
        <li className="Navigation__item">
          <NavLink
            to="/about"
            className="Navigation__link"
            onClick={handleHamburgerMenuClick}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

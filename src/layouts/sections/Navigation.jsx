import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navigation.css";
import shoppingBagIcon from "/src/assets/shoppingBagIcon.webp";
import { ItemCountContext } from "/src/contexts/ItemCountContext.jsx";

export default function Navigation({ className, handleHamburgerMenuClick }) {
  const { itemsCount } = useContext(ItemCountContext);

  const totalItemsInCart = Object.values(itemsCount).reduce(
    (acc, curr) => acc + curr,
    0
  );

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
        <li className="Navigation__item">
          <NavLink to="/cart" onClick={handleHamburgerMenuClick}>
            {/* Div contains the image, because images cannot have ::after and ::before pseudo-elements */}
            <div
              className="Navigation__shopping-bag-container"
              style={{ "--totalItemsInCart": `"${totalItemsInCart}"` }}
            >
              <img
                src={shoppingBagIcon}
                alt="Shopping bag showing item count."
                className="Navigation__shopping-bag"
              />
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

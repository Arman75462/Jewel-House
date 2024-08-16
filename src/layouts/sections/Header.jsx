import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu.jsx";
import Navigation from "./Navigation.jsx";
import "./styles/Header.css";

export default function Header() {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 700);

  useEffect(() => {
    function handleResize() {
      setIsScreenLarge(window.innerWidth > 700);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleHamburgerMenuClick() {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <header className="Header">
      <p className="Header__initials">Jewel House</p>

      {isScreenLarge ? (
        <Navigation
          setIsMenuOpen={setIsMenuOpen}
          className="Navigation__list-big"
          handleHamburgerMenuClick={handleHamburgerMenuClick}
        />
      ) : (
        menuOpen && (
          <Navigation
            className="Navigation__list-small"
            handleHamburgerMenuClick={handleHamburgerMenuClick}
          />
        )
      )}

      {!isScreenLarge ? (
        <HamburgerMenu
          menuOpen={menuOpen}
          handleHamburgerMenuClick={handleHamburgerMenuClick}
        />
      ) : null}
    </header>
  );
}

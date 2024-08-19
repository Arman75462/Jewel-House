import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu.jsx";
import Navigation from "./Navigation.jsx";
import "./styles/Header.css";

export default function Header() {
  const largeScreenBreakpoint = 750;

  const [menuOpen, setIsMenuOpen] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(
    window.innerWidth > largeScreenBreakpoint
  );

  useEffect(() => {
    function handleResize() {
      setIsScreenLarge(window.innerWidth > largeScreenBreakpoint);
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
      <h1 className="Header__title">Jewel House</h1>

      {/* Display the standard header navigation when the screen width is 750px or wider. Otherwise, show the alternate header that occupies half the page. */}
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

      {/* Show the hamburger menu on screens smaller than 750px to display the alternative header (which takes up half the page). For larger screens, do not display the hamburger menu. */}
      {!isScreenLarge ? (
        <HamburgerMenu
          menuOpen={menuOpen}
          handleHamburgerMenuClick={handleHamburgerMenuClick}
        />
      ) : null}
    </header>
  );
}

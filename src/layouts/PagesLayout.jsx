import { Outlet } from "react-router-dom";
import Header from "/src/sections/Header.jsx";
import Footer from "/src/sections/Footer.jsx";

export default function PagesLayout() {
  return (
    <div className="PagesLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

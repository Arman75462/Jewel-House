import { Outlet } from "react-router-dom";
import Header from "./sections/Header.jsx";
import "./styles/PagesLayout.css";

export default function PagesLayout() {
  return (
    <div className="PagesLayout">
      <Header />
      <Outlet />
    </div>
  );
}

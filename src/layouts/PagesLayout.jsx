import { Outlet } from "react-router-dom";
import Header from "./sections/Header.jsx";
import ItemCountProvider from "/src/contexts/ItemCountContext.jsx";
import "./styles/PagesLayout.css";

export default function PagesLayout() {
  return (
    <div className="PagesLayout">
      <ItemCountProvider>
        <Header />
        <Outlet />
      </ItemCountProvider>
    </div>
  );
}

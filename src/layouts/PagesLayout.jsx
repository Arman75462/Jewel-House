import { Outlet } from "react-router-dom";
import Header from "./sections/Header.jsx";
import ItemsInCartDataProvider from "/src/contexts/ItemsInCartDataContext.jsx";
import "./styles/PagesLayout.css";

export default function PagesLayout() {
  return (
    <div className="PagesLayout">
      <ItemsInCartDataProvider>
        <Header />
        <Outlet />
      </ItemsInCartDataProvider>
    </div>
  );
}

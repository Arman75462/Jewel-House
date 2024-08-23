import AboutPage from "/src/pages/AboutPage.jsx";
import CartPage from "/src/pages/CartPage.jsx";
import HomePage from "/src/pages/HomePage.jsx";
import ShopPage from "/src/pages/ShopPage.jsx";
import ErrorPage from "/src/pages/ErrorPage.jsx";
import JewelryInfoPage from "/src/pages/JewelryInfoPage.jsx";
import PagesLayout from "/src/layouts/PagesLayout.jsx";

const routes = [
  {
    path: "/",
    element: <PagesLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/:jewelryId", element: <JewelryInfoPage /> },
    ],
  },
];

export default routes;

import CallToActionButton from "../components/CallToActionButton";
import "./styles/HomePage.css";

export default function HomePage() {
  return (
    <main className="HomePage page-appearance-animation">
      <div className="page-container HomePage__container">
        <h2 className="HomePage__title">Treat yourself to timeless style.</h2>
        <CallToActionButton link="/shop">Shop now</CallToActionButton>
      </div>
    </main>
  );
}

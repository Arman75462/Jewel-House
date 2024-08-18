import CallToActionButton from "../components/CallToActionButton";
import "./styles/ErrorPage.css";

export default function ErrorPage() {
  return (
    <section className="ErrorPage page-appearance-animation">
      <div className="page-container ErrorPage__container">
        <p className="ErrorPage__error-message">
          <span style={{ color: "red" }}>Error 404. Page not found.</span> You
          are not supposed to be here!
        </p>
        <p className="ErrorPage__cta-message">
          But don't worry <span className="gradient-text">beautiful</span>,
          treasures await you on our shopping page 💍.
        </p>

        <CallToActionButton link="/shop">Shop now</CallToActionButton>
      </div>
    </section>
  );
}

import "./styles/AboutPage.css";
import CallToActionButton from "../components/CallToActionButton";

export default function AboutPage() {
  return (
    <section className="AboutPage page-appearance-animation">
      <div className="page-container AboutPage__container">
        <p className="AboutPage__intro">
          Welcome! Please note, this is a personal project and not a real online
          store.
        </p>
        <p className="AboutPage__message">
          While you can't buy any products, feel free to explore our shopping
          page as part of the experience. Enjoy the journey, and{" "}
          <span className="gradient-text">thank you</span> for stopping by!
        </p>

        <CallToActionButton link="/shop">Shop now</CallToActionButton>
      </div>
    </section>
  );
}

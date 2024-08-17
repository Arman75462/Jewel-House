import { Link } from "react-router-dom";
import "./styles/ErrorPage.css";

export default function ErrorPage() {
  return (
    <section className="ErrorPage page-appearance-animation">
      <p>You are not suppsoed to be here... click the link dummy</p>
      <Link to="/">Return to home page</Link>
    </section>
  );
}

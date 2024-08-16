import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section>
      <p>You are not suppsoed to be here... click the link dummy</p>
      <Link to="/">Return to home page</Link>
    </section>
  );
}

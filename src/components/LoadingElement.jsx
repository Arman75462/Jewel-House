import "./styles/LoadingElement.css";

export default function LoadingElement() {
  return (
    // Using a wrapper, becaue without it the LoadingElement wont center due to its animation using transform.
    <div className="LoadingElement-wrapper">
      <div className="LoadingElement"></div>
    </div>
  );
}

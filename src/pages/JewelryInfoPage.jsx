import "./styles/JewelryInfoPage.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingElement from "../components/LoadingElement.jsx";

export default function JewelryInfoPage() {
  const [jewelryArrayData, setJewelryArrayData] = useState(null);
  const { jewelryId } = useParams();

  useEffect(() => {
    const data = sessionStorage.getItem("jewelryArrayData");

    if (data) {
      // Assuming the data is a JSON string, parse it
      setJewelryArrayData(JSON.parse(data));
    }
  }, []);

  // Show loading spinner while data is being fetched
  if (!jewelryArrayData) {
    return <LoadingElement />;
  }

  // Find the specific jewelry item based on jewelryId
  const jewelry = jewelryArrayData?.find(
    (item) => item.id === Number(jewelryId)
  );

  return (
    <div className="JewelryInfoPage">
      asdasd: {jewelryId}{" "}
      <Link to="/shop" className="go-back-link">
        Go Back
      </Link>
      <p>{jewelry.price}$</p>
      <p>{jewelry.description}</p>
      <img src={jewelry.image} />
      <p>{jewelry.rating.rate}</p>
      <p>{jewelry.rating.count}</p>
    </div>
  );
}

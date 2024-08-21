import { useEffect, useState } from "react";
import LoadingElement from "../components/LoadingElement.jsx";
import JewelryCard from "../components/JewelryCard.jsx";
import "./styles/ShopPage.css";

export default function ShopPage() {
  const [jewelryArrayData, setJewelryArrayData] = useState();
  const [errorState, setErrorState] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category")
      .then((APIresponse) => {
        if (APIresponse.status >= 400) {
          throw new Error(`Server error: ${APIresponse.status}`);
        }
        return APIresponse.json();
      })

      .then((APIdata) => setJewelryArrayData(APIdata))

      // Handle errors that occur during fetch or JSON parsing
      .catch((error) => setErrorState(error))

      // Remove LoadingElement once fetch is complete (wether successful or not)
      .finally(() => setLoadingState(false));
  }, []);

  // Show loading spinner while data is being fetched
  if (loadingState) return <LoadingElement />;

  // Display error message if there was an issue with the fetch
  if (errorState)
    return (
      <div className=" ShopPage__error-container">
        <p className="ShopPage__error-message-intro">
          Oops! Something went wrong.
        </p>
        <p className="ShopPage__error-message">
          We're unable to load the products at the moment. Please try again
          later or explore other parts of our site.
          <span className="gradient-text"> Thank you</span> for your patience!
        </p>
      </div>
    );

  return (
    <section className="ShopPage page-appearance-animation">
      <div className="page-container">
        <h2 className="ShopPage__title">
          Timeless Elegance: Shop Our Jewelry Collection
        </h2>
        <div className="ShopPage__JewelryCard-container">
          {jewelryArrayData.map((jewelry) => (
            <JewelryCard
              imageSrc={jewelry.image}
              cardTitle={jewelry.title}
              key={jewelry.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

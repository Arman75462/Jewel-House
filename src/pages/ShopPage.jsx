import { useEffect, useState } from "react";
import LoadingElement from "../components/LoadingElement.jsx";
import JewelryCard from "../components/JewelryCard.jsx";
import "./styles/ShopPage.css";

export default function ShopPage() {
  const [jewelryArrayData, setJewelryArrayData] = useState();
  const [errorState, setErrorState] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((APIresponse) => {
        if (APIresponse.status >= 400) {
          setErrorState(true); // Set the error state and reject the promise
          return Promise.reject("Server error"); // Reject the promise to skip the following then blocks
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
  if (loadingState === true) return <LoadingElement />;

  // Display error message if there was an issue with the fetch
  if (errorState === true)
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

  console.log(jewelryArrayData);

  return (
    <section className="ShopPage page-appearance-animation">
      <h2>Shop page</h2>
      <JewelryCard
        imageSrc={jewelryArrayData[0].image}
        cardTitle={jewelryArrayData[0].title}
      />
    </section>
  );
}

import "./styles/JewelryInfoPage.css";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingElement from "../components/LoadingElement.jsx";
import { ItemCountContext } from "/src/contexts/ItemCountContext.jsx";

export default function JewelryInfoPage() {
  const { itemsCount, updateItemCount } = useContext(ItemCountContext);
  const { jewelryId } = useParams();

  // Get data directly from sessionStorage once
  const jewelryArrayData = JSON.parse(
    sessionStorage.getItem("jewelryArrayData")
  );

  // Find the specific jewelry item based on jewelryId
  const jewelry = jewelryArrayData?.find(
    (item) => item.id === Number(jewelryId)
  );

  // Get the item count for this specific jewelry item from the context
  const itemCount = itemsCount[jewelryId] || 0; // Default to 0 if undefined

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="JewelryInfoPage">
      {jewelryArrayData ? (
        <div className="page-container">
          {" "}
          <Link to="/shop" className="JewelryInfoPage__go-back-link">
            Go Back
          </Link>
          <div className="JewelryInfoPage__flex-container">
            <img src={jewelry.image} className="JewelryInfoPage__item-image" />

            <div className="JewelryInfoPage__item-info-container">
              <h3 className="JewelryInfoPage__item-title">{jewelry.title}</h3>
              <p className="JewelryInfoPage__item-price">${jewelry.price}</p>
              <span className="JewelryInfoPage__item-quantity-container">
                <button
                  className="JewelryInfoPage__button JewelryInfoPage__button--item-quantity"
                  onClick={() =>
                    updateItemCount(jewelryId, Math.max(itemCount - 1, 0))
                  }
                >
                  -
                </button>
                <p className="JewelryInfoPage__item-quantity">{itemCount}</p>
                <button
                  className="JewelryInfoPage__button JewelryInfoPage__button--item-quantity"
                  onClick={() => updateItemCount(jewelryId, itemCount + 1)}
                >
                  +
                </button>
              </span>
              <p className="JewelryInfoPage__item-description">
                {jewelry.description}
              </p>

              <Link
                to="/cart"
                className="JewelryInfoPage__button JewelryInfoPage__button--go-to-cart-button"
              >
                Go to cart
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <LoadingElement />
      )}
    </div>
  );
}

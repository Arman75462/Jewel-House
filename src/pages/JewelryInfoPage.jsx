import "./styles/JewelryInfoPage.css";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingElement from "../components/LoadingElement.jsx";
import { ItemCountContext } from "/src/contexts/ItemCountContext.jsx";

export default function JewelryInfoPage() {
  const [jewelryArrayData, setJewelryArrayData] = useState(null);
  const { itemsCount, updateItemCount } = useContext(ItemCountContext);
  const { jewelryId } = useParams();

  useEffect(() => {
    const data = sessionStorage.getItem("jewelryArrayData");

    if (data) {
      // Assuming the data is a JSON string, parse it
      setJewelryArrayData(JSON.parse(data));
    }
  }, []);

  // Show loading spinner while data is being fetched
  if (!jewelryArrayData) return <LoadingElement />;

  // Find the specific jewelry item based on jewelryId
  const jewelry = jewelryArrayData?.find(
    (item) => item.id === Number(jewelryId)
  );

  // Get the item count for this specific jewelry item from the context
  const itemCount = itemsCount[jewelryId] || 0; // Default to 0 if undefined

  return (
    <div className="JewelryInfoPage">
      <div className="page-container">
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
    </div>
  );
}

import "./styles/JewelryInfoPage.css";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingElement from "../components/LoadingElement.jsx";
import { ItemsInCartDataContext } from "/src/contexts/ItemsInCartDataContext.jsx";

export default function JewelryInfoPage() {
  const { itemsInCartData, updateItemCount } = useContext(
    ItemsInCartDataContext
  );
  const { jewelryId } = useParams();

  // Get data directly from sessionStorage once
  const jewelryArrayData = JSON.parse(
    sessionStorage.getItem("jewelryArrayData")
  );

  // Find the specific jewelry item based on jewelryId
  const jewelry = jewelryArrayData?.find(
    (item) => item.id === Number(jewelryId)
  );

  // Get the item count and details for this specific jewelry item from the context
  const itemData = itemsInCartData[jewelryId] || { itemCount: 0 };

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="JewelryInfoPage">
      {jewelryArrayData ? (
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
                    updateItemCount(
                      jewelry,
                      Math.max(itemData.itemCount - 1, 0)
                    )
                  }
                >
                  -
                </button>
                <p className="JewelryInfoPage__item-quantity">
                  {itemData.itemCount}
                </p>
                <button
                  className="JewelryInfoPage__button JewelryInfoPage__button--item-quantity"
                  onClick={() =>
                    updateItemCount(jewelry, itemData.itemCount + 1)
                  }
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

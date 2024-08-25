import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsInCartDataContext } from "/src/contexts/ItemsInCartDataContext.jsx";
import "./styles/CartPage.css";

export default function CartPage() {
  const { itemsInCartData, updateItemCount, totalItemsInCart } = useContext(
    ItemsInCartDataContext
  );

  const taxRate = 0.1;

  const subtotal = Object.values(itemsInCartData).reduce((acc, item) => {
    return acc + item.price * item.itemCount;
  }, 0);

  const tax = subtotal * taxRate;

  const total = subtotal + tax;

  return (
    <section className="CartPage page-appearance-animation">
      <div className="page-container">
        <h2 className="CartPage__title">Shopping bag</h2>

        {totalItemsInCart > 0 ? null : <p>Cart is empty.</p>}

        <div className="CartPage__flex-container">
          {/* CART-ITEMS */}
          <div className="CartPage__cart-items-container">
            {Object.values(itemsInCartData).map((item) =>
              /* If an item has a qty of 0, make it disappear. Else, show it. */
              item.itemCount === 0 ? null : (
                <div className="CartPage__cart-items" key={item.id}>
                  <img
                    src={item.image}
                    alt="Beautiful jewelry"
                    className="CartPage__item-image"
                  />

                  <p className="CartPage__item-title">{item.title}</p>

                  <span className="CartPage__update-item-count-container">
                    <button
                      className="CartPage__button CartPage__button--item-quantity"
                      onClick={() =>
                        updateItemCount(item, Math.max(item.itemCount - 1, 0))
                      }
                    >
                      -
                    </button>
                    <p className="CartPage__item-quantity">{item.itemCount}</p>
                    <button
                      className="CartPage__button CartPage__button--item-quantity"
                      onClick={() => updateItemCount(item, item.itemCount + 1)}
                    >
                      +
                    </button>
                  </span>

                  <p className="CartPage__item-price">
                    ${(item.itemCount * item.price).toFixed(2)}
                  </p>
                </div>
              )
            )}
          </div>

          {/* ORDER-SUMMARY */}
          <div className="CartPage__order-summary">
            <div className="CartPage__summary-header">
              <h3 className="CartPage__order-summary-title">Order summary</h3>

              <div className="CartPage__subtotal-container">
                <p className="CartPage__subtotal-title">
                  Subtotal ({totalItemsInCart} items)
                </p>
                <p className="CartPage__subtotal">${subtotal.toFixed(2)}</p>
              </div>
              <div className="CartPage__tax-container">
                <p className="CartPage__tax-title">Tax (10%)</p>
                <p className="CartPage__tax">${tax.toFixed(2)}</p>
              </div>
            </div>

            <div className="CartPage__summary-footer">
              <div className="CartPage__total-price-container">
                <h3>Total</h3>
                <p className="CartPage__total-price"> ${total.toFixed(2)}</p>
              </div>

              <Link
                to="/about"
                className="CartPage__button CartPage__button--checkout"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

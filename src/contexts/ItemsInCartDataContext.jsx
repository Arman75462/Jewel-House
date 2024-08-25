import { createContext, useState } from "react";

export const ItemsInCartDataContext = createContext();

export default function ItemsInCartDataProvider({ children }) {
  const [itemsInCartData, setItemsInCartData] = useState({});

  function updateItemCount(item, count) {
    setItemsInCartData((prevItems) => {
      const updatedItems = {
        ...prevItems,
        [item.id]: {
          ...item,
          itemCount: count,
        },
      };

      return updatedItems;
    });
  }

  // Calculate the total item count using reduce
  const totalItemsInCart = Object.values(itemsInCartData).reduce(
    (acc, item) => acc + item.itemCount,
    0
  );

  return (
    <ItemsInCartDataContext.Provider
      value={{ itemsInCartData, updateItemCount, totalItemsInCart }}
    >
      {children}
    </ItemsInCartDataContext.Provider>
  );
}

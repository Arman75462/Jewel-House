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

  return (
    <ItemsInCartDataContext.Provider
      value={{ itemsInCartData, updateItemCount }}
    >
      {children}
    </ItemsInCartDataContext.Provider>
  );
}

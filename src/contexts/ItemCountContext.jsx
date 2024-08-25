import { createContext, useState } from "react";

export const ItemCountContext = createContext();

export default function ItemCountProvider({ children }) {
  // State to store the count of each item by its ID
  const [itemsCount, setItemsCount] = useState({});

  // Function to update the count for a specific item
  function updateItemCount(id, count) {
    setItemsCount((prevCounts) => ({ ...prevCounts, [id]: count }));
  }

  return (
    <ItemCountContext.Provider value={{ itemsCount, updateItemCount }}>
      {children}
    </ItemCountContext.Provider>
  );
}

import { createContext, useState } from "react";

export const ItemCountContext = createContext();

export default function ItemCountProvider({ children }) {
  const [itemCount, setItemCount] = useState(0);

  return (
    <ItemCountContext.Provider value={{ itemCount, setItemCount }}>
      {children}
    </ItemCountContext.Provider>
  );
}

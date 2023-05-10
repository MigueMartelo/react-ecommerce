import React, { createContext, useState } from 'react';

type ShoppingCartContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

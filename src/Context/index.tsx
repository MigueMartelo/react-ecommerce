import React, { createContext, useState } from 'react';

type ShoppingCartContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
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
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

import React, { createContext, useState } from 'react';
import { Product } from '../interfaces';

type ShoppingCartContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  productToShow: Product | null;
  setProductToShow: React.Dispatch<React.SetStateAction<Product | null>>;
};

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  // Shopping Cart * Counter
  const [counter, setCounter] = useState(0);

  // Product Detail * Open/Close product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail * Show product detail
  const [productToShow, setProductToShow] = useState<Product | null>(null);

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

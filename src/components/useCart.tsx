import { create } from "zustand";

type Product = {
  id: string;
  productName: string;
  category: string;
  subCategory: string;
  price: string;
  description: string;
};

type Cart = {
  totalCartProduct: number;
  allCartedProducts: Product[];
  cartedProductsIDs: Map<string, boolean>;
  incCartProductNumber: () => void;
  decCartProductNumber: () => void;
  addCartProduct: (productToAdd: Product) => void;
  removeCartProduct: (productToRemove: Product) => void;
};

export const useCart = create<Cart>()((set) => ({
  totalCartProduct: 0,
  allCartedProducts: [],
  cartedProductsIDs: new Map(),
  incCartProductNumber: () =>
    set((state) => ({ totalCartProduct: state.totalCartProduct + 1 })),
  decCartProductNumber: () =>
    set((state) => ({ totalCartProduct: state.totalCartProduct - 1 })),
  addCartProduct: (productToAdd: Product) =>
    set((state) => ({
      ...state,
      allCartedProducts: [...state.allCartedProducts, productToAdd],
    })),
  removeCartProduct: (productToRemove: Product) =>
    set((state) => ({
      ...state,
      allCartedProducts: state.allCartedProducts.filter(
        (product) => product.id !== productToRemove.id
      ),
    })),
}));

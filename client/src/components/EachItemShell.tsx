import React from "react";
import panjabiImage from "../../public/panjabi_sailor.jpg";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useCart } from "../store/useCart";
import Product from "./ProductType";

const EachItemShell = ({ product }: { product: Product }) => {
  const {
    incCartProductNumber,
    decCartProductNumber,
    cartedProductsIDs,
    addCartProduct,
    removeCartProduct,
    allCartedProducts,
  } = useCart();

  const addToCart = (productToAdd: Product) => {
    let duplicate = false;
    allCartedProducts.forEach((product) => {
      if (product.id === productToAdd.id) {
        duplicate = true;
      }
    });
    if (!duplicate) {
      addCartProduct(productToAdd);
      incCartProductNumber();
      cartedProductsIDs.set(productToAdd.id, true);
    }
  };

  const deleteFromCart = (productToRemove: Product) => {
    allCartedProducts.forEach((product) => {
      if (product.id === productToRemove.id) {
        cartedProductsIDs.delete(productToRemove.id);
        decCartProductNumber();
        removeCartProduct(productToRemove);
      }
    });
  };
  return (
    <div className="flex flex-col gap-2" key={product.id}>
      <Image
        src={panjabiImage}
        alt=""
        height={0}
        width={0}
        className="w-full rounded-3xl"
      />

      <div className="flex justify-between">
        <div>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#3f3d56]">
            {product.productName}
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#3f3d56]">
            {product.price}
          </p>
        </div>
        <div className="flex gap-4 items-center pl-2">
          <HeartIcon className="w-4 md:w-5 xl:w-6 text-[#3f3d56] cursor-pointer hover:text-[#536DFE]" />
          <ShoppingBagIcon
            className={`w-4 md:w-5 xl:w-6 cursor-pointer hover:text-[#536DFE] ${
              cartedProductsIDs.get(product.id)
                ? "fill-[#536DFE] text-[#536DFE]"
                : "text-[#3f3d56]"
            }`}
            onClick={
              cartedProductsIDs.get(product.id)
                ? () => deleteFromCart(product)
                : () => addToCart(product)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EachItemShell;

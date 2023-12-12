"use client";
import panjabiImage from "../../public/panjabi_sailor.jpg";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "../store/useCart";
// import { useEffect, useState } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  productName: string;
  category: string;
  subCategory: string;
  price: string;
  description: string;
};

// let allProducts: Product[] = [];

// useEffect

// async function fetchData() {
//   try {
//     const snapshot = await fetch("http://localhost:5000/");
//     const response: Record<string, Product> = await snapshot.json();
//     const responseValues: Product[] = Object.values(response);
//     allProducts = [...responseValues];
//     console.log(allProducts);
//   } catch (err) {
//     console.log(err);
//   }
// }

export default function Home() {
  // fetchData();

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const snapshot = await fetch("http://localhost:5000/");
        const response: Record<string, Product> = await snapshot.json();
        const responseValues: Product[] = Object.values(response);
        setAllProducts([...responseValues]);
        // console.log(allProducts);
      } catch (err) {
        // console.log(err);
      }
    }

    fetchData();
  }, []);

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
    // <div className="flex flex-col gap-4 items-center pt-10 pb-10 pl-5 pr-5 lg:pl-20 lg:pr-20">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pt-10 pb-10 pl-5 pr-5 lg:pl-20 lg:pr-20">
      {allProducts.map((product: Product) => {
        return (
          <div className="flex flex-col gap-2" key={product.id}>
            <Image
              src={panjabiImage}
              alt=""
              height={100}
              width={100}
              className="w-full"
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
      })}
    </div>
    // </div>
  );
}

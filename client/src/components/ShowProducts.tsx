"use client";
import { useEffect, useState } from "react";
import EachItemShell from "@/components/EachItemShell";
import Product from "@/components/ProductType";

const ShowProducts = ({ linkPath }: { linkPath: string }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const snapshot = await fetch(`http://localhost:5000/${linkPath}`);
        const response: Record<string, Product> = await snapshot.json();
        const responseValues: Product[] = Object.values(response);
        setAllProducts([...responseValues]);
      } catch (err) {
        // console.log(err);
      }
    }

    fetchData();
  }, [linkPath]);

  return (
    <div className="flex flex-col gap-10 md:gap-14 xl:gap-20 pt-10 pb-10 pl-5 pr-5 lg:pl-20 lg:pr-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-8 md:gap-10 xl:gap-12">
        {allProducts.map((product: Product) => {
          return <EachItemShell product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ShowProducts;

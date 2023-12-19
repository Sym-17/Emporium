"use client";
import { useEffect, useState } from "react";
import HomePageEachSectionShell from "@/components/HomePageEachSectionShell";
import Product from "@/components/ProductType";

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const snapshot = await fetch("http://localhost:5000/");
        const response: Record<string, Product> = await snapshot.json();
        const responseValues: Product[] = Object.values(response);
        setAllProducts([...responseValues]);
      } catch (err) {
        // console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-10 md:gap-14 xl:gap-20 pt-10 pb-10 pl-5 pr-5 md:pl-10 md:pr-10 lg:pl-24 lg:pr-24">
      <HomePageEachSectionShell
        allProducts={allProducts}
        title="Mens"
        category="men"
        pathForSeeMore="\men"
      />
      <HomePageEachSectionShell
        allProducts={allProducts}
        title="Womens"
        category="women"
        pathForSeeMore="\women"
      />
      <HomePageEachSectionShell
        allProducts={allProducts}
        title="Children"
        category="child"
        pathForSeeMore="\children"
      />
      <HomePageEachSectionShell
        allProducts={allProducts}
        title="Accessories"
        category="other"
        pathForSeeMore="\accessories"
      />
    </div>
  );
}

import React from "react";
import EachItemShell from "./EachItemShell";
import Product from "./ProductType";
import Link from "next/link";

const HomePageEachSectionShell = ({
  allProducts,
  title,
  category,
  pathForSeeMore,
}: {
  allProducts: Product[];
  title: string;
  category: string;
  pathForSeeMore: string;
}) => {
  return (
    <div className="flex flex-col gap-2 md:gap-10">
      <header className="w-full text-center text-sm md:text-lg xl:text-2xl font-semibold mb-3">
        <span className="w-fit p-1 border-b-2 border-b-[#536DFE]">{title}</span>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 xl:gap-12">
        {allProducts.map((product: Product) => {
          if (product.category === category) {
            return <EachItemShell product={product} key={product.id} />;
          }
        })}
      </div>
      <Link href={pathForSeeMore}>
        <footer className="text-[#536DFE] cursor-pointer text-right text-sm md:text-base">
          See more..
        </footer>
      </Link>
    </div>
  );
};

export default HomePageEachSectionShell;

import panjabiImage from "../assets/panjabi_sailor.jpg";

type Product = {
  id: string;
  productName: string;
  category: string;
  subCategory: string;
  price: string;
  description: string;
};

export default function Home() {
  const allProductsString = localStorage.getItem("product");
  const allProductsJSON = allProductsString
    ? JSON.parse(allProductsString)
    : [];

  return (
    <div className="flex flex-col gap-4 items-center pt-10 pb-10 pl-20 pr-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {allProductsJSON.map((product: Product) => {
          return (
            <div className="flex flex-col gap-2" key={product.id}>
              <img src={panjabiImage} alt="" />
              <p className="text-xl">{product.productName}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

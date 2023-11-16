import panjabiImage from "../assets/panjabi_sailor.jpg";
import { HeartIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../components/useCart";

type Product = {
  id: string;
  productName: string;
  category: string;
  subCategory: string;
  price: string;
  description: string;
};

export default function UserCart() {
  const {
    decCartProductNumber,
    removeCartProduct,
    cartedProductsIDs,
    allCartedProducts,
  } = useCart();

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
    <div className="flex flex-col gap-4 items-center pt-10 pb-10 pl-5 pr-5 lg:pl-20 lg:pr-20">
      {allCartedProducts.length === 0 ? (
        <p className="text-2xl lg:text-4xl text-[#536DFE]">
          You don't have any product at cart!
        </p>
      ) : (
        <></>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {allCartedProducts.map((product: Product) => {
          return (
            <div className="flex flex-col gap-2" key={product.id}>
              <img src={panjabiImage} alt="" />
              <div className="flex justify-between">
                <div>
                  <p className="text-xl text-[#3f3d56]">
                    {product.productName}
                  </p>
                  <p>{product.price}</p>
                </div>
                <div className="flex gap-4">
                  <HeartIcon className="w-6 text-[#3f3d56] cursor-pointer hover:text-[#536DFE]" />
                  <ArchiveBoxXMarkIcon
                    className="w-6 cursor-pointer text-[#3f3d56] hover:text-[#536DFE]"
                    onClick={() => deleteFromCart(product)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

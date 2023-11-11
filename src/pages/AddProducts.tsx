import {
  TrashIcon,
  ArrowUpTrayIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

type Product = {
  images: File[];
  name: string;
  category: string;
  subCategory: string;
  price: string;
  description: string;
};

function AddProducts() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [productImages, setProductImages] = useState<File[]>([]);
  const [productImagesError, setProductImagesError] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [categoryError, setCategoryError] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [subCategoryError, setSubCategoryError] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");
  const [productList, setProductList] = useState<Product[]>([]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let loading: boolean = true;

    //Error checking
    if (productName.length > 20) {
      setNameError("Product name cannot more than 20 Charecters!");
      loading = false;
    } else if (productName.length === 0) {
      loading = false;
      setNameError("Product name cannot be empty!");
    }

    if (category.length === 0) {
      loading = false;
      setCategoryError("You have to select one!");
    }

    if (subCategory.length === 0) {
      loading = false;
      setSubCategoryError("You have to select one!");
    }

    if (price.length === 0) {
      loading = false;
      setPriceError("Price cannot be empty!");
    }

    if (description.length === 0) {
      loading = false;
      setDescriptionError("Description cannot be empty!");
    }

    if (description.length != 0) {
      const descriptionWords = description.split(" ");
      if (descriptionWords.length > 10) {
        loading = false;
        setDescriptionError("Description cannot be more than 10 words!");
      }
    }

    if (productImages.length > 4) {
      loading = false;
      setProductImagesError("You cannot upload more than 4 images!");
    } else if (productImages.length === 0) {
      loading = false;
      setProductImagesError("Upload atleast one image of product!");
    }

    if (loading) {
      const product = {
        images: [...productImages],
        name: productName,
        category,
        subCategory,
        price,
        description,
      };
      setProductList([...productList, product]);
      setProductName("");
      setCategory("");
      setSubCategory("");
      setPrice("");
      setDescription("");
      setProductImages([]);
    }
  };

  const inputImageHandle = () => {
    imageInputRef.current?.click();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setProductImagesError("");
    let duplicate: boolean = false;
    let fileTypeMatched: boolean = true;
    let fileSizeMatched: boolean = true;

    const image = event.dataTransfer.files[0];

    //duplicate check
    productImages.filter((productImg) => {
      if (productImg.name === image.name) {
        duplicate = true;
        setProductImagesError("You cannot upload duplicate files!");
      }
    });

    //type check
    if (
      !image.type.startsWith("image/jpeg") &&
      !image.type.startsWith("image/png")
    ) {
      fileTypeMatched = false;
      setProductImagesError("Upload only png, jpeg file!");
    }

    //size check
    if (image.size > 1024000) {
      fileSizeMatched = false;
      setProductImagesError("Maximum image size 1MB!");
    }

    if (!duplicate && fileTypeMatched && fileSizeMatched) {
      setProductImages([...productImages, image]);
    } else setProductImages([...productImages]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const deleteProductImage = (imageName: string) => {
    const newProductImages = productImages.filter((image) => {
      return image.name != imageName;
    });

    setProductImages([...newProductImages]);
    setProductImagesError(" ");
  };

  const addProductName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNameError("");
    setProductName(e.target.value);
  };

  const addCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryError("");
    setCategory(e.target.value);
  };

  const addSubCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubCategoryError("");
    setSubCategory(e.target.value);
  };

  const addPrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPriceError("");
    setPrice(e.target.value);
  };

  const addDescription = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescriptionError("");
    setDescription(e.target.value);
  };

  return (
    <form
      className="flex flex-col w-full p-6 gap-6"
      onSubmit={handleFormSubmit}
    >
      <header className="text-xl font-semibold">Add Product</header>
      <div className="flex flex-row justify-between gap-6">
        <div className="flex flex-col w-1/2 p-4 border-2 rounded-lg gap-4">
          <div className="flex justify-between">
            <header>Add Images</header>
            <p className="p-1 text-xs text-red-600">
              {productImagesError ? productImagesError : ""}
            </p>
          </div>

          <div
            className="flex justify-center w-full border-2 border-dashed rounded-md p-5"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="flex flex-col justify-center items-center">
              <PhotoIcon className="w-36" />
              <div className="flex justify-center items-center gap-2">
                <ArrowUpTrayIcon className="w-8 text-blue-600" />
                <p>
                  Drop your files here or{" "}
                  <span
                    className="text-blue-700 font-medium cursor-pointer"
                    onClick={inputImageHandle}
                  >
                    Browse
                  </span>
                </p>
              </div>
            </div>

            <input
              type="file"
              accept="image/*"
              ref={imageInputRef}
              className="hidden"
            />
          </div>

          <div className="flex flex-col gap-3">
            {productImages.map((image) => {
              return (
                <div
                  className="flex justify-between w-full p-3 border-2 rounded-md"
                  key={image.name}
                >
                  <img src={URL.createObjectURL(image)} className="w-10" />
                  <p>{image.name}</p>
                  <TrashIcon
                    className="w-6 cursor-pointer hover:text-red-600"
                    onClick={() => deleteProductImage(image.name)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 p-4 border-2 rounded-lg flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <header>Product Name</header>
              <p className="p-1 text-xs text-red-600">
                {nameError ? nameError : ""}
              </p>
            </div>
            <input
              type="text"
              className={`w-full p-2 border-2 rounded-md ${
                nameError ? "border-red-400" : ""
              }`}
              value={productName}
              placeholder="Enter your product name"
              onChange={addProductName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <header>Category</header>
              <p className="p-1 text-xs text-red-600">
                {categoryError ? categoryError : ""}
              </p>
            </div>

            <div>
              <select
                className={`w-full p-2 border-2 rounded-md ${
                  categoryError ? "border-red-400" : ""
                }`}
                value={category}
                onChange={addCategory}
              >
                <option value="" disabled hidden aria-hidden>
                  Select a category
                </option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <header>Sub Category</header>
              <p className="p-1 text-xs text-red-600">
                {subCategoryError ? subCategoryError : ""}
              </p>
            </div>

            <select
              className={`w-full p-2 border-2 rounded-md ${
                subCategoryError ? "border-red-400" : ""
              }`}
              value={subCategory}
              onChange={addSubCategory}
            >
              <option value="" hidden disabled>
                Select a sub category
              </option>
              <option value="shoes">Shoes</option>
              <option value="jeans">Jeans</option>
              <option value="shirts">Shirts</option>
              <option value="tShirts">T-Shirts</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <header>Price</header>
              <p className="p-1 text-xs text-red-600">
                {priceError ? priceError : ""}
              </p>
            </div>
            <input
              type="number"
              min={1}
              value={price}
              className={`w-full p-2 border-2 rounded-md ${
                priceError ? "border-red-400" : ""
              }`}
              placeholder="Enter your product price"
              onChange={addPrice}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <header>Description</header>
              <p className="p-1 text-xs text-red-600">
                {descriptionError ? descriptionError : ""}
              </p>
            </div>

            <textarea
              className={`w-full p-2 border-2 rounded-md resize-none ${
                descriptionError ? "border-red-400" : ""
              }`}
              value={description}
              onChange={addDescription}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="">Tags</div>
            <input type="text" className="w-full p-2 border-2 rounded-md" />
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          type="submit"
        >
          Publish Product
        </button>
      </div>
    </form>
  );
}

export default AddProducts;

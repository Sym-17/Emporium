"use client";
import {
  TrashIcon,
  ArrowUpTrayIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

type Product = {
  id: string;
  // images: File[];
  productName: string;
  category: string;
  subCategory: string;
  price: string;
  description: string;
};

function AddProducts() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [productImages, setProductImages] = useState<File[]>([]);
  const [productImagesError, setProductImagesError] = useState<string>("");

  const router = useRouter();

  const schema = z.object({
    productName: z
      .string()
      .min(3, { message: "Name cannot less than 3 charecters!" })
      .max(15, { message: "Name cannot be more than 15 charecters!" }),
    category: z.enum(["men", "women"], {
      errorMap: () => ({ message: "Please select a sub category!" }),
    }),
    // category: z.enum(["men", "women"]).refine(
    //   (value) => {
    //     if (value != "men" && value != "women") return false;
    //     else return true
    //   },
    //   { message: "hi" }
    // ),
    subCategory: z.enum(["shoes", "jeans", "shirts", "tshirts"], {
      errorMap: () => ({ message: "Please select a sub category!" }),
    }),
    price: z
      .number()
      .min(100, { message: "Minimum price is 100$" })
      .max(10000, { message: "Maximum price is 10000$" }),
    description: z
      .string()
      .min(1, { message: "You have to give a description!" })
      .refine(
        (value) => {
          const wordCount = value.split(" ").length;
          if (wordCount < 6) return true;
          else return false;
        },
        { message: "Description must be within 5 words!" }
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(schema),
  });

  const submitForm = (data: Product) => {
    // // data.images = [...productImages];
    // const id = nanoid(4);
    // data.id = id;

    // const oldProductJSON = localStorage.getItem("product");

    // const oldProductString = oldProductJSON ? JSON.parse(oldProductJSON) : [];

    // const newData = [...oldProductString, data];

    // const jsonString = JSON.stringify(newData);

    // localStorage.setItem("product", jsonString);
    // navigate("/");

    // data.images = [...productImages];

    const id = nanoid(4);
    data.id = id;

    async function postData() {
      const res = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      router.push("/");
    }
    postData();
  };

  const addImage = (image: File) => {
    setProductImagesError("");
    let duplicate: boolean = false;
    let fileTypeMatched: boolean = true;
    let fileSizeMatched: boolean = true;

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

  const inputImageHandle = () => {
    imageInputRef.current?.click();
  };

  const inputImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      const image = event.target.files[0];
      addImage(image);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const image = event.dataTransfer.files[0];
    addImage(image);
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

  return (
    <form
      className="flex flex-col w-full p-6 gap-6"
      onSubmit={handleSubmit(submitForm)}
    >
      <header className="text-xl font-semibold">Add Product</header>
      <div className="flex flex-col md:flex-row  justify-between gap-6">
        <div className="flex flex-col w-full md:w-1/2 p-4 border-2 rounded-lg gap-4">
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
              onChange={inputImage}
              className="hidden"
            />
          </div>

          <div className="flex flex-col gap-3">
            {productImages.map((image) => {
              return (
                <div
                  className="flex justify-between w-full p-3 border-2 rounded-md gap-1 md:gap-5"
                  key={image.name}
                >
                  <Image
                    src={URL.createObjectURL(image)}
                    alt=""
                    width={9}
                    height={16}
                    className="w-10"
                  />
                  <div className="flex flex-col justify-start w-full overflow-hidden">
                    <p>{image.name}</p>
                    <p className="text-blue-500">
                      {Math.round(image.size / 1024)} KB
                    </p>
                  </div>

                  <TrashIcon
                    className="w-6 cursor-pointer hover:text-red-600"
                    onClick={() => deleteProductImage(image.name)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 border-2 rounded-lg flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label>Product Name</label>
              <p className="p-1 text-xs text-red-600">
                {errors.productName ? errors.productName.message : ""}
              </p>
            </div>
            <input
              type="text"
              className={`w-full p-2 border-2 outline-none rounded-md  ${
                errors.productName ? "border-red-400" : ""
              }`}
              placeholder="Enter your product name"
              {...register("productName")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label>Category</label>
              <p className="p-1 text-xs text-red-600">
                {errors.category ? errors.category.message : ""}
              </p>
            </div>

            <div>
              <select
                className={`w-full p-2 border-2 outline-none rounded-md  ${
                  errors.category ? "border-red-400" : ""
                }`}
                {...register("category")}
              >
                <option value="" disabled selected hidden>
                  Select a category
                </option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label>Sub Category</label>
              <p className="p-1 text-xs text-red-600">
                {errors.subCategory ? errors.subCategory.message : ""}
              </p>
            </div>

            <select
              className={`w-full p-2 border-2 outline-none rounded-md  ${
                errors.subCategory ? "border-red-400" : ""
              }`}
              {...register("subCategory")}
            >
              <option value="f" disabled hidden selected>
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
              <label>Price</label>
              <p className="p-1 text-xs text-red-600">
                {errors.price ? errors.price.message : ""}
              </p>
            </div>
            <input
              type="number"
              className={`w-full p-2 border-2 outline-none rounded-md  ${
                errors.price ? "border-red-400" : ""
              }`}
              placeholder="Enter your product price"
              {...register("price", { valueAsNumber: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label>Description</label>
              <p className="p-1 text-xs text-red-600">
                {errors.description ? errors.description.message : ""}
              </p>
            </div>

            <textarea
              className={`w-full p-2 border-2 outline-none resize-none rounded-md  ${
                errors.description ? "border-red-400" : ""
              }`}
              {...register("description")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Tags</label>
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

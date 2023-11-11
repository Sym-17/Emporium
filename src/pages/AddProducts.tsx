import {
  TrashIcon,
  ArrowUpTrayIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import ReactSVG from "../assets/react.svg";

function AddProducts() {
  return (
    <>
      <form className="flex flex-col w-full p-6 gap-6">
        <header className="text-xl font-semibold">Add Product</header>
        <div className="flex flex-row justify-between gap-6">
          <div className="flex flex-col w-1/2 p-4 border-2 rounded-lg gap-4">
            <header>Add Images</header>
            <div className="flex justify-center w-full border-2 border-dashed rounded-md p-5">
              <div className="flex flex-col justify-center items-center">
                <PhotoIcon className="w-36" />
                <div className="flex justify-center items-center gap-2">
                  <ArrowUpTrayIcon className="w-8 text-blue-600" />
                  <p>
                    Drop your files here or{" "}
                    <span className="text-blue-700 font-medium cursor-pointer">
                      Browse
                    </span>
                  </p>
                </div>
              </div>

              <input type="file" className="hidden" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between w-full p-3 border-2 rounded-md">
                <img src={ReactSVG} className="w-10" />
                <p>Image 1</p>
                <TrashIcon className="w-6" />
              </div>
              <div className="flex justify-between w-full p-3 border-2 rounded-md">
                <img src={ReactSVG} className="w-10" />
                <p>Image 2</p>
                <TrashIcon className="w-6" />
              </div>
              <div className="flex justify-between w-full p-3 border-2 rounded-md">
                <img src={ReactSVG} className="w-10" />
                <p>Image 3</p>
                <TrashIcon className="w-6" />
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4 border-2 rounded-lg flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="">Product Name</div>
              <input type="text" className="w-full p-2 border-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="">Category</div>
              <select className="w-full p-2 border-2 rounded-md">
                <option value="">Men</option>
                <option value="">Women</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <div className="">Sub Category</div>
              <select className="w-full p-2 border-2 rounded-md">
                <option value="">Shoes</option>
                <option value="">Jeans</option>
                <option value="">Shirts</option>
                <option value="">T-Shirts</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <div className="">Price</div>
              <input
                type="number"
                min={1}
                className="w-full p-2 border-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="">Description</div>
              <textarea className="w-full p-2 border-2 rounded-md resize-none" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="">Tags</div>
              <input type="text" className="w-full p-2 border-2 rounded-md" />
            </div>
          </div>
        </div>
        <div className="ml-auto">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Publish Product
          </button>
        </div>
      </form>
    </>
  );
}

export default AddProducts;

import { Link } from "react-router-dom";
import {
  UserIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Nav() {
  return (
    <div>
      <nav className="flex justify-between items-center pl-5 pr-5 lg:pl-20 lg:pr-20 pt-5 pb-5 border-b-2 border-gray-100">
        <Link to="/home">
          <header className="text-4xl lg:text-5xl text-[#536DFE] cursor-pointer">
            eMporiuM
          </header>
        </Link>
        {window.innerWidth >= 1024 ? (
          <div className="flex justify-between gap-10">
            <Link to="/">
              <p className="text-xl text-[#3f3d56] cursor-pointer border-b-2 border-b-transparent hover:border-b-[#536DFE]">
                Mens
              </p>
            </Link>
            <Link to="/">
              <p className="text-xl text-[#3f3d56] cursor-pointer border-b-2 border-b-transparent hover:border-b-[#536DFE]">
                Ladies
              </p>
            </Link>
            <Link to="/">
              <p className="text-xl text-[#3f3d56] cursor-pointer border-b-2 border-b-transparent hover:border-b-[#536DFE]">
                Childrens
              </p>
            </Link>
            <Link to="/">
              <p className="text-xl text-[#3f3d56] cursor-pointer border-b-2 border-b-transparent hover:border-b-[#536DFE]">
                Accessories
              </p>
            </Link>
          </div>
        ) : (
          <div></div>
        )}

        <div className="flex gap-1 lg:gap-3">
          <div className="flex justify-between bg-slate-50 rounded-3xl">
            <MagnifyingGlassIcon className="w-10 p-2 lg:w-14 lg:p-4 text-[#536DFE] cursor-pointer" />
            {window.innerWidth >= 1024 ? (
              <input
                type="text"
                className="pr-2 pt-2 pb-2 bg-transparent outline-none text-[#3f3d56]"
                placeholder="Search"
              />
            ) : (
              <></>
            )}
          </div>
          <Link to="/login">
            <UserIcon className="w-10 p-2 lg:w-14 lg:p-4 text-[#3f3d56] bg-slate-50 rounded-3xl" />
          </Link>
          <Link to="/">
            <ShoppingCartIcon className="w-10 p-2 lg:w-14 lg:p-4 text-[#3f3d56] bg-slate-50 rounded-3xl" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

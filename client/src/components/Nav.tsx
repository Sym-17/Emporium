"use client";
import {
  UserIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../store/useCart";
import Link from "next/link";
import { useState } from "react";

type navTitle = {
  title: string;
  link: string;
};

const navTitles: navTitle[] = [
  {
    title: "Mens",
    link: "/men",
  },
  {
    title: "Womens",
    link: "/women",
  },
  {
    title: "Childrens",
    link: "/children",
  },
  {
    title: "Accessories",
    link: "/accessories",
  },
];

export default function Nav() {
  const { totalCartProduct } = useCart();
  const [openSideBar, setOpenSideBar] = useState(false);

  const showNavTitles = (textColor: string, textSize: string) => {
    return navTitles.map(({ title, link }) => {
      return (
        <Link href={link} key={title}>
          <p
            className={`${textSize} ${textColor} cursor-pointer border-b-2 border-b-transparent hover:border-b-[#536DFE]`}
            onClick={() => setOpenSideBar(false)}
          >
            {title}
          </p>
        </Link>
      );
    });
  };

  return (
    <div>
      {openSideBar ? (
        <div className="fixed w-full min-h-screen flex md:hidden z-50 max-h-screen overflow-hidden">
          <div className="flex flex-col gap-2 bg-black p-5 w-2/5 min-h-screen">
            {showNavTitles("text-white", "text-xs")}
          </div>
          <div
            className="w-full bg-black/50"
            onClick={() => setOpenSideBar(false)}
          ></div>
        </div>
      ) : (
        <></>
      )}
      <nav className="flex justify-between items-center pl-5 pr-5 md:pl-10 md:pr-10 lg:pl-24 lg:pr-24 pt-5 pb-5 border-b-2 border-gray-100">
        <Bars3CenterLeftIcon
          className="w-5 md:hidden"
          onClick={() => setOpenSideBar(true)}
        />

        <Link href="/">
          <header className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#536DFE] cursor-pointer">
            eMporiuM
          </header>
        </Link>

        <div className="hidden md:flex justify-between gap-5 xl:gap-7 2xl:gap-10">
          {showNavTitles("text-[#3f3d56]", "text-sm xl:text-base 2xl:text-lg")}
        </div>

        <div className="flex gap-1 items-center lg:gap-1">
          <div className="flex justify-between w-3/4 bg-slate-50 rounded-3xl">
            <MagnifyingGlassIcon className="w-9 md:w-10 2xl:w-14 p-2 2xl:p-4  text-[#536DFE] cursor-pointer" />
            <div className="hidden lg:flex justify-center">
              <input
                type="text"
                className="bg-transparent pr-5 outline-none text-[#3f3d56] text-xs 2xl:text-sm"
                placeholder="Search"
              />
            </div>
          </div>
          <Link href="/login">
            <UserIcon className="w-9 md:w-10 2xl:w-14 p-2 2xl:p-4 text-[#3f3d56] bg-slate-50 rounded-3xl hover:text-[#536DFE]" />
          </Link>
          <div className="relative">
            <Link href="/user-cart">
              <ShoppingCartIcon className="w-9 md:w-10 2xl:w-14 p-2 2xl:p-4 text-[#3f3d56] bg-slate-50 rounded-3xl hover:text-[#536DFE]" />
            </Link>
            <p className="text-[8px] 2xl:text-xs text-[#536DFE] font-extrabold absolute top-5 md:top-6 2xl:top-8 left-[26px] md:left-[30px] 2xl:left-10">
              {" "}
              {totalCartProduct}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

// ... (your imports remain unchanged)

// export default function Nav() {
//   const { totalCartProduct } = useCart();
//   const [openSideBar, setOpenSideBar] = useState(false);

//   const toggleSidebar = () => {
//     setOpenSideBar(!openSideBar);
//     // document.body.classList.toggle("overflow-hidden", openSideBar);
//   };

//   const showNavTitles = (textColor: string, textSize: string) => {
//     return navTitles.map(({ title, link }) => {
//       return (
//         <Link href={link} key={title}>
//           <p
//             className={`${textSize} ${textColor} cursor-pointer border-b-2 border-b-transparent hover:border-b-[#536DFE]`}
//             onClick={() => {
//               setOpenSideBar(false);
//               // document.body.classList.remove("overflow-hidden");
//             }}
//           >
//             {title}
//           </p>
//         </Link>
//       );
//     });
//   };

//   return (
//     <div>
//       {openSideBar && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
//           <div
//             className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
//             onClick={toggleSidebar}
//           ></div>
//           <div className="flex flex-col gap-2 bg-black p-5 w-2/5 min-h-screen text-white">
//             {showNavTitles("text-white", "text-xs")}
//           </div>
//         </div>
//       )}

//       <nav className="flex justify-between items-center pl-5 pr-5 lg:pl-20 lg:pr-20 pt-5 pb-5 border-b-2 border-gray-100">
//         <Bars3CenterLeftIcon
//           className="w-5 md:hidden"
//           onClick={toggleSidebar}
//         />

//         <Link href="/">
//           <header className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#536DFE] cursor-pointer">
//             eMporiuM
//           </header>
//         </Link>

//         <div className="hidden md:flex justify-between gap-5 xl:gap-7 2xl:gap-10">
//           {showNavTitles("text-[#3f3d56]", "text-sm xl:text-base 2xl:text-lg")}
//         </div>

//         <div className="flex gap-1 items-center lg:gap-1">
//           <div className="flex justify-between w-3/4 bg-slate-50 rounded-3xl">
//             <MagnifyingGlassIcon className="w-9 md:w-10 2xl:w-14 p-2 2xl:p-4  text-[#536DFE] cursor-pointer" />
//             <div className="hidden lg:flex justify-center">
//               <input
//                 type="text"
//                 className="bg-transparent outline-none text-[#3f3d56] text-xs 2xl:text-sm"
//                 placeholder="Search"
//               />
//             </div>
//           </div>
//           <Link href="/login">
//             <UserIcon className="w-9 md:w-10 2xl:w-14 p-2 2xl:p-4 text-[#3f3d56] bg-slate-50 rounded-3xl hover:text-[#536DFE]" />
//           </Link>
//           <div className="relative">
//             <Link href="/user-cart">
//               <ShoppingCartIcon className="w-9 md:w-10 2xl:w-14 p-2 2xl:p-4 text-[#3f3d56] bg-slate-50 rounded-3xl hover:text-[#536DFE]" />
//             </Link>
//             <p className="text-[8px] 2xl:text-xs text-[#536DFE] font-extrabold absolute top-5 md:top-6 2xl:top-8 left-[26px] md:left-[30px] 2xl:left-10">
//               {" "}
//               {totalCartProduct}
//             </p>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import LoginSVG from "../assets/login.svg";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
      {window.innerWidth >= 1024 ? (
        <Image
          src={LoginSVG}
          alt=""
          className="w-1/2 p-40"
          width={1}
          height={1}
        />
      ) : (
        <></>
      )}

      <div className="flex flex-col w-full lg:w-1/2 p-10 lg:p-28 gap-5 lg:border-l-2 lg:border-l-gray-200">
        <div className="flex flex-col gap-2">
          <header className="text-lg font-medium">Email</header>
          <input
            className="p-3 w-full border-2 border-gray-100 rounded-lg outline-none"
            type="Email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <header>Password</header>
          <input
            className="p-3 w-full border-2 border-gray-100 rounded-lg outline-none"
            type="password"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
          type="submit"
        >
          Log In
        </button>
        <div className="flex flex-col items-center">
          <p className="text-sm">
            Forget your password?{" "}
            <span className="text-blue-500 cursor-pointer">Register Here!</span>
          </p>
          <Link href="/add-products">
            <p className="text-blue-500 cursor-pointer text-sm">Admin Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import LoginSVG from "../../public/login.svg";
import SignupSVG from "../../public/signup.svg";
import Link from "next/link";
import TextInputLoginSignup from "./TextInputLoginSignup";

type LoginSignupProps = {
  pageTitle: string;
  buttonTitle: string;
  buttonBottonText: string;
};

export default function LoginSignup({
  pageTitle,
  buttonTitle,
  buttonBottonText,
}: LoginSignupProps) {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
      <Image
        src={pageTitle === "login" ? LoginSVG : SignupSVG}
        alt=""
        className="w-full lg:w-1/2 p-10 lg:p-40"
        width={1}
        height={1}
      />

      <div className="flex flex-col w-full lg:w-1/2 p-10 lg:p-28 gap-5 lg:border-l-2 lg:border-l-gray-200">
        {pageTitle === "signup" ? (
          <TextInputLoginSignup title="Name" inputType="text" />
        ) : (
          <></>
        )}
        <TextInputLoginSignup title="Email" inputType="Email" />
        <TextInputLoginSignup title="Password" inputType="password" />
        {pageTitle === "signup" ? (
          <TextInputLoginSignup title="Confirm Password" inputType="password" />
        ) : (
          <></>
        )}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
          type="submit"
        >
          {buttonTitle}
        </button>
        <div className="flex flex-col items-center">
          <p className="text-xs">
            {buttonBottonText}
            <Link href="">
              <span className="text-blue-500 cursor-pointer">
                {pageTitle === "login" ? "Click here!" : ""}
              </span>
            </Link>
          </p>
          <div className="flex gap-3">
            <Link href={pageTitle === "signup" ? "/login" : "/signup"}>
              <p className="text-blue-500 cursor-pointer text-xs">
                {pageTitle === "signup" ? "Log In" : "Register"}
              </p>
            </Link>
            <Link href="/add-products">
              <p className="text-blue-500 cursor-pointer text-xs">
                Admin Login
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

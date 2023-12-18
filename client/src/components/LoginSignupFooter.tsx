import React from "react";
import Link from "next/link";

const LoginSignupFooter = ({
  buttonBottomText,
  pageTitle,
}: {
  buttonBottomText: string;
  pageTitle: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xs">
        {buttonBottomText}
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
          <p className="text-blue-500 cursor-pointer text-xs">Admin Login</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginSignupFooter;

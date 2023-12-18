"use client";
import Image from "next/image";
import LoginSVG from "../../../public/login.svg";
import TextInputShell from "../../components/TextInputShell";
import LoginSignupButton from "../../components/LoginSignupButton";
import LoginSignupFooter from "../../components/LoginSignupFooter";

export default function LoginSignup() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
      <Image
        src={LoginSVG}
        alt=""
        className="w-full lg:w-1/2 p-10 lg:p-40"
        width={1}
        height={1}
      />

      <div className="flex flex-col w-full lg:w-1/2 p-10 lg:p-28 gap-5 lg:border-l-2 lg:border-l-gray-200">
        <TextInputShell title="Email" error={false} errorMessage="">
          <input
            className={`w-full text-sm md:text-base xl:text-lg outline-none`}
            type="Email"
          />
        </TextInputShell>
        <TextInputShell title="Password" error={false} errorMessage="">
          <input
            className={`w-full text-sm md:text-base xl:text-lg outline-none`}
            type="password"
          />
        </TextInputShell>

        <LoginSignupButton buttonTitle="Log In" />
        <LoginSignupFooter
          buttonBottomText="Forget Your Password? "
          pageTitle="login"
        />
      </div>
    </div>
  );
}

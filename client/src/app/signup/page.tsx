"use client";
import Image from "next/image";
import SignupSVG from "../../../public/signup.svg";
import LoginSignupButton from "../../components/LoginSignupButton";
import LoginSignupFooter from "../../components/LoginSignupFooter";
import TextInputShell from "../../components/TextInputShell";

import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type User = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const router = useRouter();

  const schema = z
    .object({
      userName: z
        .string()
        .min(3, { message: "Enter your name!" })
        .max(15, { message: "Enter max 15 charecters!" }),
      email: z.string().email({ message: "Enter a valid email address!" }),
      password: z
        .string()
        .min(5, { message: "Min length 5 charecters!" })
        .max(15, { message: "Max length 15 charecters!" }),
      confirmPassword: z
        .string()
        .min(5, { message: "Min length 5 charecters!" })
        .max(15, { message: "Max length 15 charecters!" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(schema),
  });

  const submitUserInfo = (data: User) => {
    async function postData() {
      const mainData = {
        userName: data.userName,
        email: data.email,
        password: data.password,
      };

      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mainData),
      });
      router.push("/login");
    }
    postData();
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
      <Image
        src={SignupSVG}
        alt=""
        className="w-full lg:w-1/2 p-10 lg:p-40"
        width={1}
        height={1}
      />

      <form
        className="flex flex-col w-full lg:w-1/2 p-10 lg:p-28 gap-5 lg:border-l-2 lg:border-l-gray-200"
        onSubmit={handleSubmit(submitUserInfo)}
      >
        <TextInputShell
          title="Name"
          error={errors.userName ? true : false}
          errorMessage={errors.userName?.message}
        >
          <input
            className={`w-full text-sm md:text-base xl:text-lg outline-none`}
            type="text"
            {...register("userName")}
          />
        </TextInputShell>
        <TextInputShell
          title="Email"
          error={errors.email ? true : false}
          errorMessage={errors.email?.message}
        >
          <input
            className={`w-full text-sm md:text-base xl:text-lg outline-none`}
            type="text"
            {...register("email")}
          />
        </TextInputShell>
        <TextInputShell
          title="Password"
          error={errors.password ? true : false}
          errorMessage={errors.password?.message}
        >
          <input
            className={`w-full text-sm md:text-base xl:text-lg outline-none`}
            type="password"
            {...register("password")}
          />
        </TextInputShell>
        <TextInputShell
          title="Confirm Password"
          error={errors.confirmPassword ? true : false}
          errorMessage={errors.confirmPassword?.message}
        >
          <input
            className={`w-full text-sm md:text-base xl:text-lg outline-none`}
            type="password"
            {...register("confirmPassword")}
          />
        </TextInputShell>

        <LoginSignupButton buttonTitle="Sign Up" />
        <LoginSignupFooter
          buttonBottomText="Already Registered? "
          pageTitle="signup"
        />
      </form>
    </div>
  );
}

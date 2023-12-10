import Link from "next/link";
import LinkedInIcon from "./LinkedInIcon";
import Image from "next/image";
import GithubIcon from "./GithubIcon";
import IconShell from "./IconShell";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-gray-800 p-1 w-full border-t-2 border-t-gray-300">
      <div className="flex-col justify-center gap-0 text-white w-5/6 sm:w-2/3 md:w-7/12 xl:w-1/2">
        <div className="flex justify-center items-center gap-2 border-gray-400 border-b-2 w-full">
          <h1 className="text-center text-xs lg:text-sm text-gray-300">
            Contact Us
          </h1>
          <IconShell link="mailto:sayemsami7@gmail.com">
            <EnvelopeIcon className="text-gray-300" />
          </IconShell>
          <IconShell link="https://www.linkedin.com/in/md-samiullah-sayem/">
            <LinkedInIcon footerOrNot="true" />
          </IconShell>
          <IconShell link="https://github.com/Sym-17">
            <GithubIcon />
          </IconShell>
        </div>
        <p className="text-[8px] lg:text-[10px] text-center mt-3 text-gray-300">
          © 2023 https://emporium-opal.vercel.app/ | Powered by: Sym-17
          <br />
          Copyright: Any unauthorized use or reproduction of this content for
          commercial purposes is strictly prohibited and constitutes copyright
          infringement liable to legal action.
        </p>
      </div>
    </footer>
  );
}

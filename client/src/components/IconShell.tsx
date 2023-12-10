import Link from "next/link";
import React from "react";

type IconShellProps = {
  children: JSX.Element;
  link: string;
};

const IconShell = ({ children, link }: IconShellProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-5 lg:w-10 cursor-pointer lg:p-1 border-2 border-transparent hover:border-gray-300 rounded-xl"
    >
      {children}
    </Link>
  );
};

export default IconShell;

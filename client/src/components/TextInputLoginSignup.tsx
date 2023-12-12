import React from "react";

const TextInputLoginSignup = ({
  title,
  inputType,
}: {
  title: string;
  inputType: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <header className="text-sm md:text-base xl:text-lg font-medium">
        {title}
      </header>
      <input
        className="p-3 w-full text-sm md:text-base xl:text-lg border-2 border-gray-100 rounded-lg outline-none"
        type={inputType}
      />
    </div>
  );
};

export default TextInputLoginSignup;

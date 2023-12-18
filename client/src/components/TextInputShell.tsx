import React, { PropsWithChildren } from "react";

const TextInputShell = ({
  children,
  title,
  error,
  errorMessage,
}: PropsWithChildren<{
  title: string;
  error: boolean;
  errorMessage: string | undefined;
}>) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <header className="text-sm md:text-base xl:text-lg font-medium">
          {title}
        </header>
        {error ? (
          <p className="text-[8px] md:text-[10px] xl:text-xs text-red-400 font-semibold">
            {errorMessage}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div
        className={`p-3 w-full text-sm md:text-base xl:text-lg border-2  ${
          error ? "border-red-400" : "border-gray-100"
        } rounded-lg outline-none`}
      >
        {children}
      </div>
    </div>
  );
};

export default TextInputShell;

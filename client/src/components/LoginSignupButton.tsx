import React from "react";

const LoginSignupButton = ({ buttonTitle }: { buttonTitle: string }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
      type="submit"
    >
      {buttonTitle}
    </button>
  );
};

export default LoginSignupButton;

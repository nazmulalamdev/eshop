import React from "react";

const Button = ({
  text,
  bg = "#FF624C",
  paddingX = "40px",
  paddingY = "16px",
}) => {
  return (
    <>
      <button
        className={`bg-[${bg}] rounded-[10px] text-white font-[Montserrat] font-bold text-xl`}
        style={{ padding: `${paddingY} ${paddingX} ` }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

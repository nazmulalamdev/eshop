import React from "react";

// const Button = ({
//   text,
//   bg = "#FF624C",
//   paddingX = "40px",
//   paddingY = "16px",
//   border = "none",
// }) => {
//   return (
//     <>
//       <button
//         className={`bg-[${bg}] rounded-[10px] text-white font-[Montserrat] font-bold text-xl cursor-pointer`}
//         style={{ padding: `${paddingY} ${paddingX} ` }}
//       >
//         {text}
//       </button>
//     </>
//   );
// };

const Button = ({
  text,
  bg = "#FF624C",
  paddingX = "40px",
  paddingY = "16px",
  border = "none",
  color = "white",
}) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        padding: `${paddingY} ${paddingX}`,
        border,
        color,
        borderRadius: "10px",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: "20px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;

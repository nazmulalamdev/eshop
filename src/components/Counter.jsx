import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(1);

  let handleClick = (type) => {
    if (type == "minus") {
      if (count >= 0) {
        count--;
        setCount(count);
      }
    } else {
      count++;
      setCount(count);
    }
  };
  return (
    <>
      <div>
        <button onClick={() => handleClick("minus")}>-</button>
        <input type="text" value={count} className="w-[35px] text-center" />
        <button onClick={() => handleClick("plus")}>+</button>
      </div>
    </>
  );
};

export default Counter;

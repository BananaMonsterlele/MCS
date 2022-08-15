import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="">
      <div className="ml-2.5">
        <h3 className="text-3xl my-4 m-0 p-0">{info.name}</h3>
        <p>{info.desc}</p>
      </div>
      <div className="flex items-center mb-[50px] mt-8">
        <button
          className="bg-white text-black border-[1px] border-solid border-gray-400 px-5 py-1 min-w-[50px] text-base rounded cursor-pointer transition-opacity ease-out delay-200 shadow-md mx-2.5 hover:opacity-80 disabled:opacity-40 disabled:cursor-[disabled] active:translate-y-px"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="text-base m-0 p-0">{total ? total : ""}</h3>
        <button className="bg-white text-black border-[1px] border-solid border-gray-400 px-5 py-1 min-w-[50px] text-base rounded cursor-pointer transition-opacity ease-out delay-200 shadow-md mx-2.5 hover:opacity-80 disabled:opacity-40 disabled:cursor-[disabled] active:translate-y-px" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}

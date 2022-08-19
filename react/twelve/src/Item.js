import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="ml-2.5 mt-2.5">
      <img src={info.image} alt={info.name} />
      <div className="ml-2.5">
        <h2 className="text-3xl my-4 m-0 p-0">{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="flex items-center mb-[50px] mt-8">
        <button
          className="bg-white text-black border-[1px] border-solid border-gray-400 px-5 py-1 min-w-[50px] text-base rounded cursor-pointer transition-opacity ease-out delay-200 shadow-md mx-2.5 hover:opacity-80 disabled:opacity-40 disabled:cursor-[disabled] active:translate-y-px"
          disabled={total === 0}
          onClick={handleLessClick}
        >
          –
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="bg-white text-black border-[1px] border-solid border-gray-400 px-5 py-1 min-w-[50px] text-base rounded cursor-pointer transition-opacity ease-out delay-200 shadow-md mx-2.5 hover:opacity-80 disabled:opacity-40 disabled:cursor-[disabled] active:translate-y-px" onClick={handleMoreClick}>
          +
        </button>
      </div>
    </div>
  );
}

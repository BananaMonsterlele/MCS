import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="bg-white text-black border-[1px] border-solid border-gray-400 px-5 py-1 min-w-[50px] text-base rounded cursor-pointer transition-opacity ease-out delay-200 shadow-md mx-2.5 hover:opacity-80 disabled:opacity-40 disabled:cursor-[disabled] active:translate-y-px"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
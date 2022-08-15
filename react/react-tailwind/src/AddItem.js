import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="m-2.5 rounded-md border-solid border-2 border-gray-300 px-3 py-2.5 text-base"
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="m-2.5 rounded-md border-solid border-2 border-gray-300 px-3 py-2.5 text-base"
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <input type="submit" className="m-2.5 bg-baby-blue text-white border-0 px-5 py-4 min-w-[150px] text-base rounded cursor-pointer transition-opacity ease-out delay-100 shadow-md hover:opacity-80 disabled:opacity-40 disabled:cursor-[disabled] active:translate-y-px" value="Добавить" />
      </div>
    </form>
  );
}

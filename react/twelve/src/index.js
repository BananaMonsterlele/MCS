import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button className="bg-white text-black border-[1px] border-solid border-gray-400 px-5 py-1 min-w-[50px] text-base rounded cursor-pointer transition-opacity ease-out delay-200 shadow-md mx-2.5 mb-10 hover:opacity-80 disabled:opacity-40 disabled:cursor-[disabled] active:translate-y-px" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-3xl my-4 ml-2.5 p-0">Нужно залогиниться!</h2>
        <button className="bg-white text-black border-[1px] border-solid border-gray-400 px-5 py-1 min-w-[50px] text-base rounded cursor-pointer transition-opacity ease-out delay-200 shadow-md mx-2.5 hover:opacity-80 disabled:opacity-40 disabled:cursor-[disabled] active:translate-y-px" onClick={() => setLogin(true)}>
          Войти
        </button>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));

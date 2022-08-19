import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import "./index.css";
import useFetch from "./useFetch.js";

export default function Shop() {
  const [items, setItems] = useState([]);

  const { loader, memoGet } = useFetch();

  useEffect(() => {
    memoGet("https://covid-shop-mcs.herokuapp.com/")
      .then((data) => {
        setItems(data);
      })
      .catch(console.error);
  }, [memoGet]);

  return (
    <div>
      {loader ? "Идет загрузка..." : ""}
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}

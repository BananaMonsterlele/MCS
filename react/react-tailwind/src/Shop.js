import React, { useState } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");
  const [loader, setLoader] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: uuid(),
        name: name,
        desc: desc
      }
    ]);
    setName("");
    setDesc("");
    setValid("");

    setLoader(true);

    fetch("https://covid-shop-mcs.herokuapp.com", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        name: name,
        desc: desc
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(setLoader(false))
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="font-sans ml-2.5">
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      <div>{items.length === 0 && <p>Добавьте первый товар</p>}</div>
      {loader && <p>Подождите, идет отправка данных на сервер</p>}
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </div>
  );
}

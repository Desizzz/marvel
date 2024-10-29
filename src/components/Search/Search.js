import CartItem from "../CartItem/CartItem";
import Chapter from "../Сhapter/Сhapter";
import "./Search.css";
import React, { useState } from "react";

export default function Search(props) {
  const [inp, setInp] = useState();

  return (
    <>
      <input
        onChange={(e) => setInp(e.target.value)}
        type="text"
        className="inp-search"
        placeholder="Search"
      />
      <button>бум</button>
      {inp && (
        <div className="search-div">
          {props.items
            .filter((item) => {
              let title;
              if (item.title) title = item.title;
              if (item.name) title = item.name;
              if (
                title
                  .toLowerCase()
                  .replace(/[.,!()?-]/g, "")
                  .includes(inp.toLowerCase().replace(/[.,!()?-]/g, ""))
              )
                return item;
            })
            .map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
        </div>
      )}
    </>
  );
}

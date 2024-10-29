import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../CartItem/CartItem";
import "./Сhapter.css";
import Search from "../Search/Search";
import Footer from "../Footer/footer";

export default function Chapter(props) {
  const [items, setItem] = useState([]);
  const [limit, setLimit] = useState(12);
  let [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/${props.info}?limit=${limit}
      &offset=${(page - 1) * limit}
      &apikey=4eea66252dd86d0e8c238acfc6828ebc`,
        {
          _limit: limit,
          _offset: page * limit,
        }
      )
      .then((res) => setItem(res.data.data.results));
  }, [page]);

  return (
    <>
      <Search items={items} info={props.info} />
      <div className="div-charter">
        {items.map((item) => (
          <div>
            <CartItem
              likes={props.likes}
              setLike={props.setLike}
              item={item}
              key={item.id}
              bool={props.likes.some((obj) => obj.id == item.id)}
              setNotLike={props.setNotLike}
            />
          </div>
        ))}
      </div>
      {/* {page.map((item) => (
        <h1>{item}</h1>
      ))} */}
      <button onClick={() => setPage(page - 1)}>prev</button>
      <button onClick={() => setPage(page + 1)}>last</button>
      <Footer />
    </>
  );
}

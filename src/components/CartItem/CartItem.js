import { useState } from "react";
import "./CartItem.css";
import { Link, useNavigate } from "react-router-dom";

export default function CartItem(props) {
  const [bigItem, setBigItem] = useState(false);
  const router = useNavigate();
  let chapter = "";

  if (props.item.name) chapter = "characters";
  if (props.item.hasOwnProperty("digitalId")) chapter = "comics";
  if (props.item.comics && !props.item.name) chapter = "series";
  return (
    <div className="div-item">
      <img
        className="img-item"
        src={props.item.thumbnail.path + "/landscape_incredible.jpg"}
      />
      <button
        onClick={() => {
          if (props.bool == false)
            props.setLike((prev) => [...prev, { ...props.item }]);
          if (props.bool == true) props.setNotLike(props.item);
          console.log(props.likes);
        }}
      >
        {props.bool ? "ахуенчик" : "не нрав"}
      </button>
      {console.log(props.item)}
      <button
        onClick={() => router(`/BigItem/${chapter}/${props.item.id}`)}
      ></button>
      <h2>
        {props.item.title}
        {props.item.name}
      </h2>
      <p>{props.item.description}</p>
    </div>
  );
}

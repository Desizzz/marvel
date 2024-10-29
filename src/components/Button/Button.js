import { useState } from "react";
import "./Button.css";
export default function Button(props) {
  const [active, setActive] = useState();
  return (
    <button
      type="button"
      onClick={() => {
        setActive(!active);
        props.setTab(props.children);
      }}
      className={active && " active"}
    >
      {props.children}
    </button>
  );
}

import { useEffect, useState } from "react";
import "./BigItem.css";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function BigItem(props) {
  const [item, setItem] = useState();
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/${params.chapter}/${params.id}?apikey=4eea66252dd86d0e8c238acfc6828ebc`
      )
      .then((response) =>
        setItem((prev) => (prev = response.data.data.results[0]))
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="div-BigItem">
      {item ? (
        <>
          <h1>
            {console.log(item)}
            {item.title} {item.name}
          </h1>
          <img src={item.thumbnail.path + "/landscape_incredible.jpg"}></img>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

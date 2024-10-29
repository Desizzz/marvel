import { useState } from "react";
import "../App.css";
import Header from "../components/Header/Header";
import Blocks from "../components/Blocks";
import Chapter from "../components/Сhapter/Сhapter";
import Favourites from "../components/Favourites/Favourites";
import Footer from "../components/Footer/footer";
function Base() {
  const [tab, setTab] = useState();
  let [likes, setLike] = useState([]);

  const setNotLike = (item) => {
    let newLikes = likes.filter((like) => like.id !== item.id);
    likes = [];
    setLike(newLikes);
  };

  return (
    <>
      <Header setTab={setTab} />
      {!tab && (
        <div style={{ marginBottom: "96px", marginTop: "96px" }}>
          <Blocks />
        </div>
      )}
      {console.log(likes)}
      {tab === "comics" && (
        <Chapter
          likes={likes}
          setNotLike={setNotLike}
          setLike={setLike}
          info={tab}
        />
      )}
      {tab === "characters" && (
        <Chapter
          likes={likes}
          setNotLike={setNotLike}
          setLike={setLike}
          info={tab}
        />
      )}
      {tab === "series" && (
        <Chapter
          likes={likes}
          setNotLike={setNotLike}
          setLike={setLike}
          info={tab}
        />
      )}
      {tab === "favourites" && (
        <Favourites setNotLike={setNotLike} likes={likes} />
      )}

      <Footer />
    </>
  );
}

export default Base;
import CartItem from "../CartItem/CartItem";
import "./Favourites.css";
export default function Favourites(props) {
  return (
    <>
      <div className="favourites-div">
        <h1>characters:</h1>
        {props.likes && (
          <div className="search-div no-hr">
            {props.likes.map((like) => {
              if (like.name)
                return (
                  <CartItem
                    bool={true}
                    key={like.id}
                    likes={props.likes}
                    item={like}
                    setNotLike={props.setNotLike}
                  />
                );
            })}
          </div>
        )}
        <h1>comics:</h1>
        {props.likes && (
          <div className="search-div no-hr">
            {props.likes.map((like) => {
              if (like.hasOwnProperty("digitalId"))
                return (
                  <CartItem
                    bool={true}
                    key={like.id}
                    likes={props.likes}
                    item={like}
                    setNotLike={props.setNotLike}
                  />
                );
            })}
          </div>
        )}
        <h1>series:</h1>
        {props.likes && (
          <div className="search-div no-hr">
            {props.likes.map((like) => {
              if (like.comics && !like.name)
                return (
                  <CartItem
                    bool={true}
                    key={like.id}
                    likes={props.likes}
                    item={like}
                    setNotLike={props.setNotLike}
                  />
                );
            })}
          </div>
        )}
      </div>
    </>
  );
}

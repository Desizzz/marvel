import "./Header.module.css";
import marvel_logo from "../../marvel_logo.svg";
import Button from "../Button/Button";
export default function Header(props) {
  return (
    <header>
      <img src={marvel_logo} />
      <nav>
        <Button setTab={() => props.setTab("characters")}>Characters</Button>
        <Button setTab={() => props.setTab("comics")}>Comics</Button>
        <Button setTab={() => props.setTab("series")}>Series</Button>
        <Button setTab={() => props.setTab("favourites")}>Favourites</Button>
      </nav>
    </header>
  );
}

import "./Footer.module.css";
import marvel_logo from "../../marvel_logo.svg";
export default function Footer() {
  return (
    <footer>
      <img src={marvel_logo}></img>
      <p>Data provided by Marvel. ©2024 MARVEL</p>
      <a target="_blank" href="https://vk.com/desisss">
        developer.marvel.com
      </a>
    </footer>
  );
}

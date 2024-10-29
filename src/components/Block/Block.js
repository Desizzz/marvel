import "./Block.css";
export default function Block(props) {
  return (
    <div className="block">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

import Block from "./Block/Block";
import { styled } from "styled-components";
import Footer from "./Footer/footer";

export const Div = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1496px;
`;

export default function Blocks() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>All Marvel characters</h1>
        <p style={{ textAlign: "center" }}>
          You can find any series, character or comic from the marvel universe
        </p>
      </div>
      <Div>
        <Block
          title={"Any characters"}
          content={
            "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
          }
        />
        <Block
          title={"Any comics"}
          content={
            "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
          }
        />
        <Block
          title={"Any series"}
          content={
            "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
          }
        />
        <Block
          title={"Shows characters from comics/series"}
          content={
            "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
          }
        />
        <Block
          title={"Dark theme"}
          content={
            "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
          }
        />
        <Block
          title={"Ability to add to favorites"}
          content={
            "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
          }
        />
      </Div>
    </>
  );
}

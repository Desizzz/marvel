import React from "react";
import Base from "./components/Base";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BigItem from "./components/BigItem/BigItem";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/BigItem/:chapter/:id" element={<BigItem />} />
          <Route path="/" element={<Base />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

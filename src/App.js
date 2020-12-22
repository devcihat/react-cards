import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import CARD_LIST from "./data/card_list";
import CardComp from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <div className="container">
        <div className="row">
          {CARD_LIST.map((item, index) => {
            return <CardComp id={index} item={item} like={item.like} />;
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

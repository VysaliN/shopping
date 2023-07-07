import React, { useState } from "react";
import apple from "./images/apple.JPEG";
import straw from "./images/strawberry.JPEG";
import grapes from "./images/grapes.JPEG";
import pineApple from "./images/pineApple.JPEG";
import orange from "./images/orange.JPEG";
import kiwi from "./images/kiwi.JPEG";
import banana from "./images/banana.JPEG";
import pomegranate from "./images/pomegranate.JPEG";

const Fruits = () => {
  const [item, setItem] = useState(0);

  const totalProducts = () => {
    setItem(item + 1);
  };

  return (
    <div>
      <center>
        <h1>Fruits</h1>
        <button>cart({item})</button>
      </center>
      <div className="shopping">
        <div className="shopping1">
          <img src={apple} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.50</span>
          </h4>
          <button onClick={totalProducts}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping2">
          <img src={straw} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.100</span>
          </h4>
          <button onClick={totalProducts}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping3">
          <img src={grapes} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.50</span>
          </h4>
          <button onClick={totalProducts}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping4">
          <img src={pineApple} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.150</span>
          </h4>
          <button onClick={totalProducts}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping5">
          <img src={orange} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.40</span>
          </h4>
          <button onClick={totalProducts}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping6">
          <img src={kiwi} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.80</span>
          </h4>
          <button onClick={totalProducts}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping7">
          <img src={banana} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.80</span>
          </h4>
          <button onClick={totalProducts}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping8">
          <img src={pomegranate} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.80</span>
          </h4>
          <button onClick={totalProducts}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>
      </div>
    </div>
  );
};

export default Fruits;

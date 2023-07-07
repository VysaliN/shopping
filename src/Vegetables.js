import React, { useState } from "react";
import tomato from "./images/tomato.JPEG";
import onion from "./images/onion.JPEG";
import potato from "./images/potato.JPEG";
import carrot from "./images/carrot.JPEG";
import veg1 from "./images/veg1.JPEG";
import veg2 from "./images/veg2.JPEG";
import veg3 from "./images/veg3.JPEG";
import veg4 from "./images/veg4.JPEG";

const Fruits = () => {
  const [item1, setItem1] = useState(0);
  const totalProducts1 = () => {
    setItem1(item1 + 1);
  };

  return (
    <div>
      <center>
        <h1>Vegetables</h1>
        <button>cart({item1})</button>
      </center>
      <div className="shopping">
        <div className="shopping1">
          <img src={tomato} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.50</span>
          </h4>
          <button onClick={totalProducts1}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping2">
          <img src={onion} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.100</span>
          </h4>
          <button onClick={totalProducts1}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping3">
          <img src={potato} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.50</span>
          </h4>
          <button onClick={totalProducts1}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping4">
          <img src={carrot} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.150</span>
          </h4>
          <button onClick={totalProducts1}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping5">
          <img src={veg1} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.40</span>
          </h4>
          <button onClick={totalProducts1}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping6">
          <img src={veg2} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.80</span>
          </h4>
          <button onClick={totalProducts1}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping7">
          <img src={veg3} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.80</span>
          </h4>
          <button onClick={totalProducts1}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping8">
          <img src={veg4} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.80</span>
          </h4>
          <button onClick={totalProducts1}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>
      </div>
    </div>
  );
};

export default Fruits;

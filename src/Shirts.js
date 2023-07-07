import React, { useState } from "react";
import shirt1 from "./images/shirt1.JPEG";
import shirt2 from "./images/shirt2.JPEG";
import shirt3 from "./images/shirt3.JPEG";
import shirt4 from "./images/shirt4.JPEG";
import shirt5 from "./images/shirt5.JPEG";
import shirt6 from "./images/shirt6.JPEG";
import shirt7 from "./images/shirt7.JPEG";
import shirt8 from "./images/shirt8.JPEG";

const Shirts = () => {
  const [item2, setItem2] = useState(0);
  const totalProducts2 = () => {
    setItem2(item2 + 1);
  };
  return (
    <div>
      <center>
        <h1>Shirts</h1>
        <button>cart({item2})</button>
      </center>
      <div className="shopping">
        <div className="shopping1">
          <img src={shirt1} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.50</span>
          </h4>
          <button onClick={totalProducts2}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping2">
          <img src={shirt2} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.100</span>
          </h4>
          <button onClick={totalProducts2}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping3">
          <img src={shirt3} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.50</span>
          </h4>
          <button onClick={totalProducts2}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping4">
          <img src={shirt4} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.150</span>
          </h4>
          <button onClick={totalProducts2}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping5">
          <img src={shirt5} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.40</span>
          </h4>
          <button onClick={totalProducts2}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping6">
          <img src={shirt6} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.80</span>
          </h4>
          <button onClick={totalProducts2}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping7">
          <img src={shirt7} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.80</span>
          </h4>
          <button onClick={totalProducts2}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>

        <div className="shopping8">
          <img src={shirt8} height="200px" width="250px" alt="image" />
          <h4>
            Price:<span>Rs.80</span>
          </h4>
          <button onClick={totalProducts2}>AddCart</button>
          <button onClick={() => alert("confirm to buy")}>buy</button>
        </div>
      </div>
    </div>
  );
};

export default Shirts;

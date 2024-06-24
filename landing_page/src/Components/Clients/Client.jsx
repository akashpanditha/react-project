import React from "react";
import "./Client.css";

function Client() {
  return (
    <>
      <h1>OUR CLIENTS</h1>

      <div className="client">
        <div className="img-client">
          <img src="image/c1.png" alt="" />
        </div>
        <div className="img-client">
          <img src="image/c2.png" alt="" />
        </div>
        <div className="img-client">
          <img src="image/c3.png" alt="" />
        </div>
        <div className="img-client">
          <img src="image/c4.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Client;

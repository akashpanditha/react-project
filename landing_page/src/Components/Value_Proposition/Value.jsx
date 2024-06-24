import React from "react";
import "./Value.css";
function Value() {
  return (
    <>
      <div className="value-start">
        <h2 className="h2-value">Value Proposition</h2>
        <p className="p-value">
          In a constantly evolving market, we ensure your needs are met with
          smart solutions that cater to your exact needs. We deliver 100%
          customer satisfaction through three core principles.
        </p>
      </div>

      <div className="value-end">
        <div id="id1">
          <div className="img1val">
            <div className="valueimg">
              <img src="/image/Vector.png" alt="vector" />
            </div>
          </div>

          <h2 className="h2-text">Quality and Innovation</h2>
          <p className="val-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            corporis, animi accusantium harum voluptatibus qui pariatur, cum
            quas quod dolorem necessitatibus veritatis sed nemo, iure maiores
            repudiandae. Quisquam, adipisci aperiam.
          </p>
        </div>

        <div id="id2">
          <div className="img1val">
            <div className="valueimg">
              <img src="image/carbon.png" alt="carbon" />
            </div>
          </div>

          <h2 className="h2-text">Sustainability and Efficiency</h2>
          <p className="val-text">
            We promote environmental responsibility with eco-friendly options
            while providing the most efficient solutions for your packing needs.
          </p>
        </div>

        <div id="id3">
          <div className="img1val">
            <div className="valueimg">
              <img src="image/Vector2.png" alt="Vector2" />
            </div>
          </div>

          <h2 className="h2-text">Customer-Centric Approach</h2>
          <p className="val-text">
            We provide tailored solutions, dedicated service, and prompt
            delivery to help our customers run operations smoothly.
          </p>
        </div>
      </div>
    </>
  );
}

export default Value;

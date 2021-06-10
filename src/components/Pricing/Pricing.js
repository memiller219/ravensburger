import React from "react";
import './Pricing.css'
import { CircleFill} from 'react-bootstrap-icons'

const Pricing = ({ price, stock }) => {
  return (
    <>
      <div>
        <CircleFill className="circle"/>
        {stock}
        <div style={{ float: "right", fontSize: "2em", fontWeight: "bold" }}>
       ${`${price}`.split(" ")[0]} 
        </div>
      </div>
      <br />
    </>
  );
};

export default Pricing;

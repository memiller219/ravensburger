import React from "react";
import { Button } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";

const Wishlist = () => {
  return (
    <>
      <Button variant="outline-primary" block>
        <Heart /> Add to Wishlist
      </Button>
      <hr />
    </>
  );
};

export default Wishlist;

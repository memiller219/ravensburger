import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "./Product.css";
import { ZoomIn } from "react-bootstrap-icons";
import Carousel from "react-elastic-carousel";
import CarouselImage from "../CarouselImage/CarouselImage";
import Pricing from "../Pricing/Pricing";
import Points from "../Points/Points";
import images from "../data";
import Wishlist from "../Wishlist/Wishlist";

import axios from "axios";

const Product = () => {

  const [product, setProduct] = useState({});


// @desc Fetch Product Data
// @route GET /api/2.0/us/15964
// @access Public
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        "https://edu.ravensburger.com/api/2.0/us/15964"
      );
      setProduct(data.product);
    };
    fetchProduct();
  }, []);


// Retrieving COST & STOCK data from API call.
  const cost = ((product.productResponse || {})["ns2:RestProduct"] || {})[
    "ns2:base_price"
  ];
  const stock = ((product.productResponse || {})["ns2:RestProduct"] || {})[
    "ns2:stock_status"
  ];


  
  return (
    <Card>
      <Row>
        <Col md={6}>
          <Card.Body>
            <Carousel>
              {images.map((image, idx) => {
                return <CarouselImage key={idx} src={image} />;
              })}
            </Carousel>
            <div>
              <ZoomIn className="search" />
            </div>
          </Card.Body>
        </Col>
        <Col md={5} className="py-4">
          <Card.Title style={{ fontWeight: "bolder", fontSize: "1.7em" }}>
            {product.ueberschrift}
          </Card.Title>
          <a className="typePuzzle" href="/shop">
            {product.kat2s}
          </a>
          <Points />
          <Pricing price={cost} stock={stock} />
          <p style={{ float: "right", fontSize: ".8em" }}>
            excl. tax, excl. Shipping Cost
          </p>
          <br />
          <hr />
          <Wishlist />
        </Col>
      </Row>
    </Card>
  );
};

export default Product;

import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import './CarouselImage.css'

const CarouselImage = ({ src }) => {
  return (
    <Row className="py-4 carouselImage">
      <Col>
        <Image src={src}></Image>
      </Col>
    </Row>
  );
};

export default CarouselImage;

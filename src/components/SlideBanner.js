import React from "react";
import { Carousel } from "react-bootstrap";
import {banner} from '../assets'

export default function SlideBanner() {
  return (
    <>
      <Carousel style={wrapBanner}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="hmmmm"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

const wrapBanner = {
    padding: '24px 0'
}

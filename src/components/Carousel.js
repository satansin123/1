import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyCarousel.css';

const MyCarousel = () => {
  const img1 = require('./mission.png');
  const img2 = require('./mis.png');
  const img3 = require('./idk.png');

  useEffect(() => {
    // Preload images
    [img1, img2, img3].forEach((image) => {
      new Image().src = image;
    });
  }, []);

  return (
    <Carousel className="custom-carousel p-3 p-md-6">
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;

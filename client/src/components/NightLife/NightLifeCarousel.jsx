import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function NightLifeCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [nightLife] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
  ]);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {nightLife.map((nightLife, index) => (
          <PictureCarouselCard {...nightLife} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default NightLifeCarousel;

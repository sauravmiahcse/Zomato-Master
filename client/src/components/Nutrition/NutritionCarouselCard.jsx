import React from "react";

function NutritionCard({ image, title }) {
  return (
    <>
      <div className="rounded-md w-24 h-full px-3 md:px-4 md:w-56">
        <img
          src={image}
          alt="nutrition"
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div>
        <h3 className="text-sm my-1 text-center font-light md:text-xl">
          {title}
        </h3>
      </div>
    </>
  );
}

function NutritionCarouselCard(props) {
  return (
    <div className="h-full">
      <NutritionCard {...props} />
    </div>
  );
}

export default NutritionCarouselCard;

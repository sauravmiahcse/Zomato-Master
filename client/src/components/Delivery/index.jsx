import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Component
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector((store) => store.restaurant.restaurants);

  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants);
  }, [reduxState.restaurants]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in NCR(Delhi)
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;

// NOTE: Redux data reference
// {
//   restaurants: {
//       restaurants: [
//           {
//               "_id": "61619f4fa8bb5a753a157e5c",
//               "name": "Domino's Pizza",
//               "city": "NCR",
//               "address": "61/34, 1st Floor, New Rohtak Road, Karol Bagh, New Delhi",
//               "mapLocation": "28.6581637791,77.1935084090",
//               "cuisine": [
//                   "Pizza",
//                   "Fast Food",
//                   "Desserts",
//                   "Beverages"
//               ],
//               "restaurantTimings": "11am - 11pm",
//               "contactNumber": 918130039690,
//               "website": "dominos.com",
//               "popularDishes": [
//                   "Farmhouse",
//                   "Veg Extravaganza",
//                   "Garlic Breadsticks"
//               ],
//               "averageCost": 300,
//               "amenties": [
//                   "Parking",
//                   "AC",
//                   "Rest Room",
//                   "Free WIFI"
//               ],
//               "menuImages": "6161a397a8bb5a753a157e5d",
//               "menu": "6166f8b0db8b2b72dd9de1d4",
//               "reviews": [
//                   "61619f4fa8bb5a753a157e5c"
//               ],
//               "photos": "6161a397a8bb5a753a157e5d"
//           },

//       ]
//   }
// }

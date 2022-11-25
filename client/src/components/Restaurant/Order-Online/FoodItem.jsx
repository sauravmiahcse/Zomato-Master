import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getFood } from "../../../redux/reducers/food/food.action";
import { getImage } from "../../../redux/reducers/image/image.action";
import { addToCart } from "../../../redux/reducers/cart/cart.action";

function FoodItem(props) {
  const [food, setFood] = useState({});

  const dispatch = useDispatch();
  const reduxState = useSelector((globalState) => globalState.cart.cart);

  useEffect(() => {
    dispatch(getFood(props._id))
      .then((data) => {
        setFood(data.payload.foods);
        dispatch(getImage(data.payload.foods.photos)).then((data) => {
          const { images } = data.payload;
          images.length &&
            setFood((prev) => ({ ...prev, image: images[0].location }));
        });
        return data.payload.foods;
      })
      .then((data) => {
        console.log(data);
        reduxState.forEach((each) => {
          if (each._id === data._id) {
            setFood((prev) => ({ ...prev, isAddedToCart: true }));
          }
        });
      });
  }, [reduxState]);

  const addFoodToCart = () => {
    dispatch(addToCart({ ...food, quantity: 1, totalPrice: food.price }));
    setFood((prev) => ({ ...prev, isAddedToCart: true }));
  };

  return (
    <>
      <div className="flex items-start gap-2">
        {food?.name && (
          <div className="flex items-start gap-4 w-full p-1">
            {food?.image && (
              <div className="w-3/2 h-24 w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden">
                <img
                  src={food?.image}
                  alt="food item"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{food?.name}</h3>
                <button
                  onClick={addFoodToCart}
                  disabled={food?.isAddedToCart}
                  className="md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg"
                >
                  {food.isAddedToCart ? (
                    "Added"
                  ) : (
                    <>
                      <AiOutlinePlus /> Add
                    </>
                  )}
                </button>
              </div>
              <ReactStars count={5} value={props?.rating} />
              <h5>${food?.price}</h5>
              <p>{food?.description}</p>
            </div>
            <div className="hidden md:block w-2/12">
              <button
                onClick={addFoodToCart}
                disabled={food?.isAddedToCart}
                className="flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg"
              >
                {food.isAddedToCart ? (
                  "Added"
                ) : (
                  <>
                    <AiOutlinePlus /> Add
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FoodItem;

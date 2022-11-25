import React from "react";
import { BsTrashFill } from "react-icons/bs";

// redux
import { useDispatch } from "react-redux";
import {
  DeleteCart,
  increteQuantity,
  decrementQuantity,
} from "../../redux/reducers/cart/cart.action";

function FoodItem(props) {
  const dispatch = useDispatch();

  const deleteFoodFromCart = () => dispatch(DeleteCart(props._id));

  const increment = () => dispatch(increteQuantity(props._id));

  const decrement = () => {
    if (props.quantity === 1) return;
    dispatch(decrementQuantity(props._id));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h5>{props.name}</h5>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <small>${parseInt(props.price) * parseInt(props.quantity)}</small>
            <div className="px-1 bg-zomato-400 text-white rounded flex items-center gap-1">
              <button
                onClick={decrement}
                className="p-1 bg-zomato-400 text-white rounded"
              >
                -
              </button>
              <small>{props.quantity}</small>
              <button
                onClick={increment}
                className="p-1 bg-zomato-400 text-white rounded"
              >
                +
              </button>
            </div>
          </div>
          <BsTrashFill
            onClick={deleteFoodFromCart}
            className="text-zomato-400 text-lg md:text-xl"
          />
        </div>
      </div>
    </>
  );
}

export default FoodItem;

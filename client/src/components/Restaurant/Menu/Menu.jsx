import React, { useState, useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../../../redux/reducers/image/image.action";

// components
import MenuCollection from "../MenuCollection";

function Menu() {
  const dispatch = useDispatch();
  const [menus, setMenu] = useState([]);
  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    if (reduxState)
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        console.log(images);
        setMenu(images);
      });
  }, [reduxState]);

  return (
    <div className="flex flex-wrap gap-3">
      <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
    </div>
  );
}

export default Menu;

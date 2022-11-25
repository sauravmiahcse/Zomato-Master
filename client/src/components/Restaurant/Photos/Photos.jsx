import React, { useState, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../../../redux/reducers/image/image.action";

// component
import PhotoCollection from "./PhotoCollection";

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState)
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        console.log(images);
        setPhotos(images);
      });
  }, [reduxState]);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            openViewer={openViewer}
            index={index}
            image={photo}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
  );
}

export default Photos;

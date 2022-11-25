import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

function MenuCollection(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={props.image}
          currentIndex={currentImage}
          displayScroll={false}
          onClose={closeViewer}
        />
      )}
      <div
        className="w-32 h-32 md:w-48 flex flex-col md:h-48"
        onClick={openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.image[0]}
            alt="menu"
            className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
          />
        </div>
        <div>
          <strong>{props.menuTitle}</strong>
          <p>{props.pages} Pages</p>
        </div>
      </div>
    </>
  );
}

export default MenuCollection;

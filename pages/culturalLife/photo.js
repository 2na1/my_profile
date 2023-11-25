import React, { useState } from "react";

const Photo = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const toggleGallery = (folder) => {
    setShowGallery(!showGallery);
    setSelectedFolder(folder);

    // Dynamically load gallery images based on the selected folder
    const numberOfImages = 12; // Adjust this value as needed
    const galleryImagePaths = Array.from(
      { length: numberOfImages },
      (_, index) => `/images/${folder}/${index + 1}.jpg`
    );
    setGalleryImages(galleryImagePaths);
  };

  // Updated representative photo names and categories with folder structure
  const representativePhotos = [
    { name: "main_travel", category: "여행", folder: "travel" },
    { name: "main_daily", category: "일상", folder: "daily" },
    { name: "main_friends", category: "친구", folder: "friends" },
  ];

  // Calculate the number of images per row
  const imagesPerRow = 3;

  return (
    <div>
      {showGallery ? (
        // Render all images in the selected folder when showGallery is true
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {galleryImages.map((imagePath, index) => (
            <div
              key={index + 1}
              style={{ flexBasis: `calc(33.33% - 16px)`, margin: "8px" }}
            >
              <img
                alt={`${selectedFolder}_${index + 1}`}
                src={imagePath}
                style={{ width: "100%", height: "auto" }}
                onClick={() =>
                  console.log(`Clicked on image ${selectedFolder}_${index + 1}`)
                }
              />
            </div>
          ))}
        </div>
      ) : (
        // Render representative photos when showGallery is false
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {representativePhotos.map((photo) => (
            <div
              key={photo.name}
              style={{
                flexBasis: `calc(33.33% - 16px)`,
                margin: "8px",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                alt={photo.name}
                src={`/images/${photo.folder}/${photo.name}.jpg`}
                style={{
                  width: "400px",
                  height: "450px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
                onClick={() => toggleGallery(photo.folder)}
              />
              <p>{photo.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photo;

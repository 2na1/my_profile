import React, { useState } from "react";

const ConcertImage = ({ alt, src, description }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        display: "inline-block",
        width: "calc(25% - 16px)", // 25% for four images in a row with 16px margin
        marginTop: "50px",
      }}
    >
      <img
        alt={alt}
        src={src}
        style={{
          width: "198px",
          height: "352px",
          objectFit: "cover",
        }}
      />
      {tooltipVisible && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <h4>{description}</h4>
          {/* 추가 정보를 표시하는 부분 */}
        </div>
      )}
    </div>
  );
};

const Concert = () => {
  const concertImages = [
    {
      alt: "pds",
      src: "/images/consert/1.JPG",
      description: "PDS",
    },
    {
      alt: "GMF2022",
      src: "/images/consert/2.JPG",
      description: "selectShop",
    },
    { alt: "BMF", src: "/images/consert/3.JPG", description: "PerfectDay8" },
    {
      alt: "GMF2022",
      src: "/images/consert/4.JPG",
      description: "selectShop2",
    },
    { alt: "BMF", src: "/images/consert/5.JPG", description: "HAND" },
    {
      alt: "GMF2022",
      src: "/images/consert/6.JPG",
      description: "selcetShop3",
    },
    {
      alt: "GMF2022",
      src: "/images/consert/7.jpg",
      description: "BMF2022",
    },
    {
      alt: "GMF2022",
      src: "/images/consert/8.jpg",
      description: "TVT CLUB",
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {concertImages.map((image) => (
        <ConcertImage key={image.alt} {...image} />
      ))}
    </div>
  );
};

export default Concert;

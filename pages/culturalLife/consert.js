import React, { useState } from "react";

const Concert = () => {
  const [tooltipInfo, setTooltipInfo] = useState(null);

  const handleMouseEnter = (alt) => {
    setTooltipInfo(alt);
  };

  const handleMouseLeave = () => {
    setTooltipInfo(null);
  };

  return (
    <div>
      <div
        onMouseEnter={() => handleMouseEnter("pds")}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative", display: "inline-block" }}
      >
        <img
          alt="pds"
          src="path/to/pds.jpg"
          style={{ width: "100px", height: "100px" }}
        />
        {tooltipInfo === "pds" && (
          <div
            style={{
              position: "absolute",
              top: "100%", // Position below the image
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <h4>please don't stop your singing</h4>
            {/* 기타 이미지에 대한 정보를 표시하는 부분을 추가 */}
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => handleMouseEnter("BMF")}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative", display: "inline-block" }}
      >
        <img
          alt="BMF"
          src="path/to/BMF2022.jpg"
          style={{ width: "100px", height: "100px" }}
        />
        {tooltipInfo === "BMF" && (
          <div
            style={{
              position: "absolute",
              top: "100%", // Position below the image
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <h4>BMF2022</h4>
            {/* 기타 이미지에 대한 정보를 표시하는 부분을 추가 */}
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => handleMouseEnter("GMF2022")}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative", display: "inline-block" }}
      >
        <img
          alt="GMF2022"
          src="path/to/GMF2022.jpg"
          style={{ width: "100px", height: "100px" }}
        />
        {tooltipInfo === "GMF2022" && (
          <div
            style={{
              position: "absolute",
              top: "100%", // Position below the image
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <h4>GMF2022</h4>
            {/* 기타 이미지에 대한 정보를 표시하는 부분을 추가 */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Concert;

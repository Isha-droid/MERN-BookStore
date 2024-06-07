import React, { useState } from 'react';
import './BannerCard.css'; // Add your styles as needed

const BannerCard = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // Replace with your color array
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const nextColor = () => {
    const nextIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextIndex);
  };

  const prevColor = () => {
    const prevIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    setCurrentColorIndex(prevIndex);
  };

  return (
    <div className="color-slider-container">
      <button onClick={prevColor}>Previous</button>
      <div className="color-box" style={{ backgroundColor: colors[currentColorIndex] }}></div>
      <button onClick={nextColor}>Next</button>
    </div>
  );
};

export default BannerCard;

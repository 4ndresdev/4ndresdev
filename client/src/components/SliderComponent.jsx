import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import styles from "../styles/Slider.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SliderComponent = ({ images }) => {
  const [count, setCount] = useState(0);

  const handleBack = () => {
    setCount(count - 1);
  };

  const handleNext = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.imagesContainer}>
      {count > 0 && (
        <button className={styles.btn} onClick={handleBack}>
          <KeyboardArrowLeftIcon />
        </button>
      )}
      <CardMedia
        loading="lazy"
        component="img"
        height="350"
        image={images[count]}
        alt="Paella dish"
      />
      {count < images.length - 1 && (
        <button className={styles.btn} onClick={handleNext}>
          <KeyboardArrowRightIcon fontSize="small" />
        </button>
      )}
    </div>
  );
};

export default SliderComponent;

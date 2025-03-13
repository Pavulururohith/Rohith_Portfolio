
"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles, activeIndex, totalSlides }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} ${activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => swiper.slidePrev()}
        disabled={activeIndex === 0}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={`${btnStyles} ${activeIndex === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => swiper.slideNext()}
        disabled={activeIndex === totalSlides - 1}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
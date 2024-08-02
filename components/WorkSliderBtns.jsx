"use client";

import { useSwiper } from "swiper/react";
import { PiCareLeftBold, PiCareRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper(); // Get Swiper instance

    return (
        <div className={containerStyles}>
            <button 
                className={btnStyles}
                onClick={() => swiper.slidePrev()} // Slide to previous slide
            >
                <PiCareLeftBold className={iconStyles} />
            </button>
            <button 
                className={btnStyles}
                onClick={() => swiper.slideNext()} // Slide to next slide
            >
                <PiCareRightBold className={iconStyles} />
            </button>
        </div>
    );
};

export default WorkSliderBtns;

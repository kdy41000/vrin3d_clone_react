import React, { useRef, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

function SlickSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const { t } = useTranslation();

  return (
    <div>
      <Slider {...settings} ref={slickRef}>
        <div className="sc-ixwxwp iOqOm slick-img1">
          <div className="MuiStack-root sc-eRkUKV bPygHU css-lmzl00">
            <span className="sc-kOztfk kGphZh">
              {t(`section-7.slick.title-1`)}
            </span>
            <img
              alt=""
              src="/assets/arrow_outward-dd85a638.svg"
              className="sc-fZZUCQ dkbGUp"
            />
          </div>
          <div className="sc-coJKny kgNvuP"></div>
        </div>
        <div className="sc-ixwxwp iOqOm slick-img2">
          <div className="MuiStack-root sc-eRkUKV bPygHU css-lmzl00">
            <span className="sc-kOztfk kGphZh">
              {t(`section-7.slick.title-2`)}
            </span>
            <img
              alt=""
              src="/assets/arrow_outward-dd85a638.svg"
              className="sc-fZZUCQ dkbGUp"
            />
          </div>
          <div className="sc-coJKny kgNvuP"></div>
        </div>
        <div className="sc-ixwxwp iOqOm slick-img3">
          <div className="MuiStack-root sc-eRkUKV bPygHU css-lmzl00">
            <span className="sc-kOztfk kGphZh">
              {t(`section-7.slick.title-3`)}
            </span>
            <img
              alt=""
              src="/assets/arrow_outward-dd85a638.svg"
              className="sc-fZZUCQ dkbGUp"
            />
          </div>
          <div className="sc-coJKny kgNvuP"></div>
        </div>
      </Slider>
      <div className="MuiStack-root sc-hGQVsf hacWiT css-1x4jos1">
        <div
          style={{ cursor: "pointer" }}
          className="s-prev"
          onClick={previous}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="18" cy="18" r="18" fill="white"></circle>
            <path
              d="M20.7 11.7002L14.4 18.0002L20.7 24.3002"
              stroke="#6F757B"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <div style={{ cursor: "pointer" }} className="s-next" onClick={next}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.8"
              cx="18"
              cy="18"
              r="18"
              transform="matrix(-1 0 0 1 36 0)"
              fill="white"
            ></circle>
            <path
              d="M15.3 11.7002L21.6 18.0002L15.3 24.3002"
              stroke="#6F757B"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="sc-cLwiB AvqPW"></div>
    </div>
  );
}

export default SlickSlide;

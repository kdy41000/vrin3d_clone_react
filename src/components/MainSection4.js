import React from "react";
import { Stack, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import SlickSlide from "./SlickSlide";

function MainSection4() {
  const { t } = useTranslation();

  let intervalImage;

  const handleMouseEnter = (e) => {
    const children = e.target.children;
    if (e.currentTarget.querySelector(".hcwUHC"))
      e.currentTarget.querySelector(".hcwUHC").style.display = "none";
    if (e.currentTarget.querySelector(".dJMMkK"))
      e.currentTarget.querySelector(".dJMMkK").style.display = "block";
    if (e.currentTarget.querySelector(".lgTkxA"))
      e.currentTarget.querySelector(".lgTkxA").style.display = "block";
    if (e.currentTarget.querySelector(".JYxKw")) {
      document.getElementById("left-leave").style.display = "block";
      document.getElementById("left-enter").style.display = "none";
      document.getElementById("right-leave").style.display = "none";
      document.getElementById("right-enter").style.display = "block";

      e.currentTarget.querySelector(".JYxKw").style.display = "none";
      const imageFadeInElements =
        e.currentTarget.querySelectorAll(".image-fade-in");
      const imageCount = imageFadeInElements.length;
      let currentIndex = 0;

      imageFadeInElements.forEach((element, index) => {
        if (index === 0) {
          element.style.display = "block";
          element.style.opacity = 1;
        } else {
          element.style.display = "none";
          element.style.opacity = 0;
        }
      });

      const changeImage = () => {
        imageFadeInElements[currentIndex].style.display = "none";
        setTimeout(() => {
          imageFadeInElements[currentIndex].style.opacity = 0;
        }, 100);

        currentIndex = (currentIndex + 1) % imageCount;

        imageFadeInElements[currentIndex].style.display = "block";
        setTimeout(() => {
          imageFadeInElements[currentIndex].style.opacity = 1;
        }, 100);
      };

      intervalImage = setInterval(changeImage, 2000);

      const resetImage = () => {
        clearInterval(intervalImage);
        currentIndex = 0;
        imageFadeInElements.forEach((element, index) => {
          if (index === 0) {
            element.style.display = "block";
            element.style.opacity = 1;
          } else {
            element.style.display = "none";
            element.style.opacity = 0;
          }
        });
        intervalImage = setInterval(changeImage, 2000);
      };

      imageFadeInElements[imageCount - 1].addEventListener(
        "transitionend",
        resetImage
      );

      e.preventDefault();
    } else {
      document.getElementById("left-leave").style.display = "none";
      document.getElementById("left-enter").style.display = "block";
      document.getElementById("right-leave").style.display = "block";
      document.getElementById("right-enter").style.display = "none";
    }

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.classList.contains("jrbumP")) {
        child.style.display = "none";
      }
      if (child.classList.contains("hcvMQI")) {
        child.style.display = "block";
      }
    }
  };

  const handleMouseLeave = (e) => {
    const children = e.target.children;
    if (e.currentTarget.querySelector(".hcwUHC"))
      e.currentTarget.querySelector(".hcwUHC").style.display = "block";
    if (e.currentTarget.querySelector(".dJMMkK"))
      e.currentTarget.querySelector(".dJMMkK").style.display = "none";
    if (e.currentTarget.querySelector(".lgTkxA"))
      e.currentTarget.querySelector(".lgTkxA").style.display = "none";
    if (e.currentTarget.querySelector(".JYxKw")) {
      document.getElementById("left-leave").style.display = "block";
      document.getElementById("left-enter").style.display = "none";
      document.getElementById("right-leave").style.display = "block";
      document.getElementById("right-enter").style.display = "none";

      e.currentTarget.querySelector(".JYxKw").style.display = "block";
      clearInterval(intervalImage);
      const imageFadeInElements =
        e.currentTarget.querySelectorAll(".image-fade-in");

      imageFadeInElements.forEach((element, index) => {
        if (index === 0) {
          element.style.opacity = 1;
          element.style.display = "block";
        } else {
          element.style.opacity = 0;
          element.style.display = "none";
        }
      });
      e.preventDefault();
    } else {
      document.getElementById("left-leave").style.display = "block";
      document.getElementById("left-enter").style.display = "none";
      document.getElementById("right-leave").style.display = "block";
      document.getElementById("right-enter").style.display = "none";
    }

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.classList.contains("jrbumP")) {
        child.style.display = "block";
      }
      if (child.classList.contains("hcvMQI")) {
        child.style.display = "none";
      }
    }
  };
  return (
    <div className="sc-dUHCvS hWanvO">
      <Container maxWidth="lg" class="sc-ldxSJF YkRGM css-1qsxih2">
        <Stack class="css-1ofqig9">
          <span className="sc-kgwNGc iYLZqw">One-stop solution</span>
          <span className="sc-bgykYu cGMuKF">{t(`section-6.title-1`)}</span>
          <Stack
            className="sc-cAgXWe jUjhju css-j7qwjs"
            style={{ flexDirection: "row" }}
          >
            <Stack
              className="sc-fZcpmv fJMZdC third-section-stack css-j7qwjs"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Stack className="sc-jURsZH cgTCNi css-1b6n4o1">
                <span className="sc-ldGsRC jrbumP" id="left-leave">
                  <div>{t(`section-6.left-box-1.content-1`)}</div>
                  <div>{t(`section-6.left-box-1.content-2`)}</div>
                  <div>{t(`section-6.left-box-1.content-3`)}</div>
                </span>
                <span className="sc-fqLEZF hcvMQI" id="left-enter">
                  <div>{t(`section-6.left-box-2.content-1`)}</div>
                  <div>{t(`section-6.left-box-2.content-2`)}</div>
                </span>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <path
                      d="M18.7208 37.5996L16.8008 35.6796L33.1208 19.3596H18.2408V16.6396H37.7608V36.1596H35.0408V21.2796L18.7208 37.5996Z"
                      fill="#F3EEFF"
                    ></path>
                    <circle
                      cx="28"
                      cy="28"
                      r="27.3333"
                      stroke="#F3EEFF"
                      stroke-width="1.33333"
                    ></circle>
                  </g>
                </svg>
              </Stack>
              <img
                src={require("../assets/home_C-1_PC_ko-093e56a1.png")}
                alt=""
                className="sc-eCKhVa hcwUHC"
              />
              <img
                id="video-image"
                src={require("../assets/home_C-3_PC-52386fbc.png")}
                alt=""
                className="sc-kfldBZ dJMMkK"
              />
              <video
                loop
                muted
                playsInline
                autoPlay
                className="sc-eNdSxs lgTkxA"
              >
                <source
                  src={`${process.env.PUBLIC_URL}/video/home_2_PC-f15f3e50.mp4`}
                  type="video/mp4"
                />
              </video>
            </Stack>
            <Stack
              className="sc-fZcpmv fJMZdC third-section-stack css-j7qwjs"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Stack className="sc-jURsZH cgTCNi css-1b6n4o1">
                <span className="sc-ldGsRC jrbumP" id="right-leave">
                  <div>{t(`section-6.right-box-1.content-1`)}</div>
                  <div>{t(`section-6.right-box-1.content-2`)}</div>
                  <div>{t(`section-6.right-box-1.content-3`)}</div>
                  <div>{t(`section-6.right-box-1.content-4`)}</div>
                </span>
                <span className="sc-fqLEZF hcvMQI" id="right-enter">
                  <div>{t(`section-6.right-box-2.content-1`)}</div>
                  <div>{t(`section-6.right-box-2.content-2`)}</div>
                </span>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <path
                      d="M18.7208 37.5996L16.8008 35.6796L33.1208 19.3596H18.2408V16.6396H37.7608V36.1596H35.0408V21.2796L18.7208 37.5996Z"
                      fill="#F3EEFF"
                    ></path>
                    <circle
                      cx="28"
                      cy="28"
                      r="27.3333"
                      stroke="#F3EEFF"
                      stroke-width="1.33333"
                    ></circle>
                  </g>
                </svg>
              </Stack>
              <img
                src={require("../assets/home_C-2_PC_ko-5168634f.png")}
                alt=""
                className="sc-fgrUxn JYxKw"
              />
              <img
                width="100%"
                src={require("../assets/home_bag_1-016e6c5c.png")}
                alt=""
                className="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
              <img
                width="100%"
                src={require("../assets/home_bag_2-ec220ca9.png")}
                alt=""
                class="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
              <img
                width="100%"
                src={require("../assets/home_bag_3-58b0e494.png")}
                alt=""
                class="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
              <img
                width="100%"
                src={require("../assets/home_bag_4-b1fee5e3.png")}
                alt=""
                class="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
              <img
                width="100%"
                src={require("../assets/home_bag_5-b77afbdd.png")}
                alt=""
                class="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
              <img
                width="100%"
                src={require("../assets/home_bag_6-78494c33.png")}
                alt=""
                class="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
              <img
                width="100%"
                src={require("../assets/home_bag_7-dc30c20d.png")}
                alt=""
                class="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
              <img
                width="100%"
                src={require("../assets/home_bag_8-38aed96a.png")}
                alt=""
                class="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
              <img
                width="100%"
                src={require("../assets/home_bag_9-5e42e9c2.png")}
                alt=""
                class="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
              <img
                width="100%"
                src={require("../assets/home_bag_10-3c83f6b4.png")}
                alt=""
                class="sc-iPFVka BZqer image-fade-in"
                style={{ opacity: 0 }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>

      {/* todo */}
      <div className="sc-dUHCvS hWanvO" style={{ backGroundColor: "white" }}>
        <div className="MuiContainer-root MuiContainer-maxWidthLg sc-loa-dtU axTPc css-1qsxih2">
          <div className="MuiStack-root css-j7qwjs">
            <span className="sc-kgwNGc iYLZqw">
              Various contents with VRIN 3D
            </span>
            <span className="sc-bgykYu cGMuKF">{t(`section-7.title-1`)}</span>
            <span className="sc-eFtCoL dlqOMK">
              <div>{t(`section-7.content-1`)}</div>
              <div>{t(`section-7.content-2`)}</div>
            </span>
            <img
              src={require("../assets/home_D-1_PC-0b362984.png")}
              alt=""
              className="sc-loAfXr ifPUKW"
            />
          </div>
          <div className="sc-fWsUSK bTztWh">
            <SlickSlide />
          </div>
        </div>
        <div id="apply-demo" className="sc-hsnwiE Xjwek">
          <div className="MuiStack-root css-j7qwjs">
            <span className="sc-hdNKyF gyNaRg">{t(`section-8.title-1`)}</span>
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium sc-jUHRLO gQtbHN css-1ps8hc1"
              tabindex="0"
              type="button"
            >
              <span className="sc-jGigbP jlusTb">{t(`header.startfree`)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection4;

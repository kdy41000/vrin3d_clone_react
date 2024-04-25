import React from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "./Section";

function MainSection2() {
  const { t } = useTranslation();
  return (
    <Section id="section2" videoSource="/assets/home_content_3_PC-706ebb88.mp4">
      <Stack class="css-opkp0k">
        <Stack class="sc-mYrQG dULNKs css-j7qwjs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <circle cx="12.5" cy="12" r="3" fill="#BDC1C7"></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <circle cx="12.5" cy="12" r="3" fill="#BDC1C7"></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M19.2251 7.9499L18.3001 5.7999L16.0501 4.7999L18.3001 3.8499L19.2251 1.7749L20.1501 3.8499L22.4001 4.7999L20.1501 5.7999L19.2251 7.9499ZM19.2251 22.1999L18.3001 20.1249L16.0501 19.1499L18.3001 18.1749L19.2251 15.9999L20.1501 18.1749L22.4001 19.1499L20.1501 20.1249L19.2251 22.1999ZM8.9001 18.1749L6.9251 13.9249L2.6001 11.9749L6.9251 10.0499L8.9001 5.8249L10.8751 10.0499L15.2001 11.9749L10.8751 13.9249L8.9001 18.1749ZM8.9001 15.3749L10.0251 13.0499L12.4001 11.9749L10.0251 10.9249L8.9001 8.5999L7.7751 10.9249L5.3751 11.9749L7.7751 13.0499L8.9001 15.3749Z"
              fill="#5D6CFA"
            ></path>
          </svg>
        </Stack>
        <Stack class="css-j7qwjs">
          <div className="sc-cewOFt izNBef">
            <span className="sc-ibLmZI gSYnps">{t(`section-4.title-1`)}</span>
            <span className="sc-ibLmZI gSYnps">{t(`section-4.title-2`)}</span>
          </div>
          <span className="sc-eUcPmD hBRKvA">{t(`section-4.content-1`)}</span>
        </Stack>
      </Stack>
    </Section>
  );
}

export default MainSection2;

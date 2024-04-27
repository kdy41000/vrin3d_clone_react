import React from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "./Section";

function MainSection1() {
  const { t } = useTranslation();
  return (
    <Section id="section1" videoSource="video/home_content_2_PC-c0a5dbbe.mp4">
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
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              d="M5.9 30C4.96667 30 4.16667 29.6667 3.5 29C2.83333 28.3333 2.5 27.5333 2.5 26.6V24.2667H4V26.6C4 27.1333 4.18333 27.5833 4.55 27.95C4.91667 28.3167 5.36667 28.5 5.9 28.5H8.23333V30H5.9ZM24.7667 29.7667V28.2667H27.1C27.6333 28.2667 28.0833 28.0889 28.45 27.7333C28.8167 27.3778 29 26.9222 29 26.3667V24.0333H30.5V26.3667C30.5 27.3222 30.1667 28.1278 29.5 28.7833C28.8333 29.4389 28.0333 29.7667 27.1 29.7667H24.7667ZM15.7333 24.4333L16.5 24.9L17.2667 24.4333V16.5L24 12.6667V11.7333L23.2333 11.2667L16.5 15.1667L9.76667 11.2667L9 11.7333V12.6667L15.7333 16.5V24.4333ZM2.5 7.73333V5.4C2.5 4.46667 2.83333 3.66667 3.5 3C4.16667 2.33333 4.96667 2 5.9 2H8.23333V3.5H5.9C5.36667 3.5 4.91667 3.68333 4.55 4.05C4.18333 4.41667 4 4.86667 4 5.4V7.73333H2.5ZM29 7.73333V5.4C29 4.86667 28.8167 4.41667 28.45 4.05C28.0833 3.68333 27.6333 3.5 27.1 3.5H24.7667V2H27.1C28.0333 2 28.8333 2.33333 29.5 3C30.1667 3.66667 30.5 4.46667 30.5 5.4V7.73333H29ZM15.5 26.0667L8.4 21.9C8.11111 21.7444 7.88333 21.5167 7.71667 21.2167C7.55 20.9167 7.46667 20.6 7.46667 20.2667V11.9667C7.46667 11.6333 7.55 11.3167 7.71667 11.0167C7.88333 10.7167 8.11111 10.4778 8.4 10.3L15.5333 6.1C15.8222 5.94444 16.1444 5.86667 16.5 5.86667C16.8556 5.86667 17.1778 5.94444 17.4667 6.1L24.6 10.3C24.8889 10.4778 25.1167 10.7167 25.2833 11.0167C25.45 11.3167 25.5333 11.6333 25.5333 11.9667V20.2667C25.5333 20.6 25.45 20.9167 25.2833 21.2167C25.1167 21.5167 24.8778 21.7444 24.5667 21.9L17.4 26.0667C17.0889 26.2444 16.7667 26.3333 16.4333 26.3333C16.1 26.3333 15.7889 26.2444 15.5 26.0667V26.0667Z"
              fill="currentColor"
            ></path>
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
        </Stack>
        <Stack class="css-j7qwjs">
          <div className="sc-cewOFt izNBef">
            <span className="sc-ibLmZI gSYnps">{t(`section-3.title-1`)}</span>
            <span className="sc-ibLmZI gSYnps">{t(`section-3.title-1`)}</span>
          </div>
          <span className="sc-eUcPmD hBRKvA">{t(`section-3.content-1`)}</span>
        </Stack>
      </Stack>
    </Section>
  );
}

export default MainSection1;

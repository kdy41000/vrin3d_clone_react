import React from "react";
import { Stack, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

function MainSection3() {
  const { t } = useTranslation();
  return (
    <div id="action" className="sc-dUHCvS hWanvO">
      <Container maxWidth="lg" class="sc-ejiplN ifTTTI css-1qsxih2">
        <Stack className="css-j7qwjs">
          <span className="sc-kgwNGc iYLZqw">The simplest way to generate</span>
          <span className="sc-bgykYu cGMuKF">{t(`section-5.title-1`)}</span>
          <span className="sc-eFtCoL dlqOMK">
            <div>{t(`section-5.content-1`)}</div>
            <div>{t(`section-5.content-2`)}</div>
          </span>
          <Stack class="sc-bdGqwM YIVMF css-m1ydac">
            <Stack
              class="sc-eCBHNd ciNAkd video-text css-j7qwjs"
              style={{
                opacity: 0,
                animation:
                  "1s ease-in-out 0s 1 normal forwards running easeinout",
              }}
            >
              <div class="css-csffzd">
                <span className="sc-hHuvUW fUSxHr">80%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                >
                  <path
                    d="M25.4672 7.0828L29.427 7.0828L29.427 40.7411L44.7713 25.3969L47.5761 28.2017L27.4471 48.3307L7.31817 28.2017L10.123 25.3969L25.4672 40.7411L25.4672 7.0828Z"
                    fill="#3737CC"
                  ></path>
                </svg>
              </div>
              <span className="sc-lgpNln iqBcgl">
                {t(`section-5.bottom-1.title`)}
              </span>
              <span className="sc-hECBto caYDuJ">
                {t(`section-5.bottom-1.content`)}
              </span>
            </Stack>
            <Stack
              class="sc-eCBHNd ciNAkd video-text css-j7qwjs"
              style={{
                opacity: 0,
                animation:
                  "1s ease-in-out 0.5s 1 normal forwards running easeinout",
              }}
            >
              <Stack class="css-csffzd">
                <span className="sc-hHuvUW fUSxHr">4H</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                >
                  <path
                    d="M25.4672 7.0828L29.427 7.0828L29.427 40.7411L44.7713 25.3969L47.5761 28.2017L27.4471 48.3307L7.31817 28.2017L10.123 25.3969L25.4672 40.7411L25.4672 7.0828Z"
                    fill="#3737CC"
                  ></path>
                </svg>
              </Stack>
              <span className="sc-lgpNln iqBcgl">
                {t(`section-5.bottom-2.title`)}
              </span>
              <span className="sc-hECBto caYDuJ">
                {t(`section-5.bottom-2.content`)}
              </span>
            </Stack>
            <Stack
              class="sc-eCBHNd ciNAkd video-text css-j7qwjs"
              style={{
                opacity: 0,
                animation:
                  "1s ease-in-out 1s 1 normal forwards running easeinout",
              }}
            >
              <Stack class="css-csffzd">
                <span className="sc-hHuvUW fUSxHr">90%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                >
                  <path
                    d="M25.4672 7.0828L29.427 7.0828L29.427 40.7411L44.7713 25.3969L47.5761 28.2017L27.4471 48.3307L7.31817 28.2017L10.123 25.3969L25.4672 40.7411L25.4672 7.0828Z"
                    fill="#3737CC"
                  ></path>
                </svg>
              </Stack>
              <span className="sc-lgpNln iqBcgl">
                {t(`section-5.bottom-3.title`)}
              </span>
              <span className="sc-hECBto caYDuJ">
                {t(`section-5.bottom-3.content`)}
              </span>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default MainSection3;

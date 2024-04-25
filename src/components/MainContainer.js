import React from "react";
import { Button, Stack, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

function MainContainer() {
  const { t } = useTranslation();

  return (
    <div id="no-sticky" className="sc-fccsbN lhhxdU">
      <Container maxWidth="lg" className="sc-hSWzoW cieJKV css-1qsxih2">
        <Stack className="sc-hEwNEX bRHYvC css-1ofqig9">
          <Stack className="sc-eFzqdc hOmEkG css-j7qwjs">
            <span className="sc-eqZEtd kOUWmN">{t(`section-1.title-1`)}</span>
            <span className="sc-hhTLGm eptCnI">
              <div> {t(`section-1.content-1`)}</div>
              <div> {t(`section-1.content-2`)}</div>
            </span>
            <Button
              color="primary"
              variant="text"
              type="button"
              tabIndex="0"
              style={{
                maxWidth: "326px",
                padding: "16px",
                marginTop: "56px",
                borderRadius: "6px",
                backgroundColor: "rgb(55, 55, 204)",
                color: "rgb(255, 255, 255)",
              }}
            >
              <span className="sc-gKkQJw bPjlAi">{t(`header.startfree`)}</span>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default MainContainer;

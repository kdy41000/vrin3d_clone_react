import React, { useState, useRef, useEffect } from "react";
import { Button, ButtonBase, Stack, SvgIcon } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n";
import CheckIcon from "@mui/icons-material/Check";

function Header({ headerChange, isOpen, setIsOpen }) {
  const { t } = useTranslation();
  const [lang, setLang] = useState("ko");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.id !== "lang_btn"
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };

  const onClickLang = (e) => {
    i18n.changeLanguage(e);
    setLang(e);
  };

  return (
    <>
      {!headerChange ? (
        <div
          id="header"
          className="sc-lfpBtY eoOPJI"
          style={{ height: "70px" }}
        >
          <div className="sc-hniSBJ hWtlko">
            <Stack
              class="css-1xjqnmi"
              style={{ height: "100%", textAlign: "center" }}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label="Go Back to Homepage"
              >
                <svg
                  width="76"
                  viewBox="0 0 77 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.107 0.130859L11.8734 17.9937L17.6399 0.130859H23.7391L15.5423 23.87H8.17363L0 0.130859H6.107Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M38.9987 23.8466L33.8298 14.895H32.5121V23.8466H26.7391V0.136575H36.6064C38.2571 0.0826855 39.8978 0.410461 41.3989 1.09401C42.6283 1.66919 43.6536 2.5999 44.3403 3.76392C45.0108 4.95134 45.3493 6.29505 45.3207 7.65592C45.3658 9.23966 44.8588 10.7903 43.8853 12.0461C42.8226 13.3243 41.3493 14.201 39.7125 14.5292L45.3913 23.87L38.9987 23.8466ZM32.5121 10.9719H36.0966C37.0097 11.0379 37.9143 10.76 38.6301 10.1935C38.9107 9.89608 39.1255 9.54365 39.2606 9.15889C39.3956 8.77413 39.4481 8.36557 39.4145 7.95949C39.4419 7.55746 39.3865 7.15409 39.2517 6.77401C39.1168 6.39393 38.9053 6.04511 38.6301 5.74884C37.9269 5.17036 37.0221 4.89063 36.1123 4.97044H32.5121V10.9719Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M53.4783 0.130859V23.87H48.3913V0.130859H53.4783Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M76.8261 23.87H71.2842L62.0202 9.29606V23.87H56.4783V0.130859H62.0202L71.2842 14.8373V0.130859H76.8261V23.87Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <Stack class="sc-cBBoAX VTpEl css-u4p24i">
                <span className="sc-gqQcRE fAeOni">{t(`header.pricing`)}</span>
                <div className="sc-eASzkH bPRdgG">
                  <ButtonBase
                    color="primary"
                    variant="text"
                    type="button"
                    tabIndex="0"
                    style={{
                      width: "90px",
                      height: "32px",
                      color: "rgb(255, 255, 255)",
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      lineHeight: "140%",
                      letterSpacing: "0px",
                    }}
                    id="lang_btn"
                    onClick={toggleDropdown}
                  >
                    {lang === "ko" ? "KOR" : "ENG"}
                    <div className="sc-fwYByi bqkDKP">
                      <SvgIcon
                        fontSize="medium"
                        className="css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="KeyboardArrowDownIcon"
                      >
                        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                      </SvgIcon>
                    </div>
                  </ButtonBase>
                  {isOpen && (
                    <div className="sc-jcMrvc bzbxRS" ref={dropdownRef}>
                      <div
                        className="sc-crfUGE llUqmn"
                        onClick={() => onClickLang("ko")}
                      >
                        <span
                          className={lang === "ko" ? "sc-jOuVnl bTFJXB" : ""}
                        >
                          KOR
                        </span>
                        {lang === "ko" && (
                          <div className="sc-eTAqjO lhyoeO">
                            <CheckIcon className="sc-cUEfUY inCNjg" />
                          </div>
                        )}
                      </div>
                      <div
                        className="sc-crfUGE llUqmn"
                        onClick={() => onClickLang("en")}
                      >
                        <span
                          className={lang === "en" ? "sc-jOuVnl bTFJXB" : ""}
                        >
                          ENG
                        </span>
                        {lang === "en" && (
                          <div className="sc-eTAqjO lhyoeO">
                            <CheckIcon className="sc-cUEfUY inCNjg" />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <span className="sc-cyJtZp cdaNAz">{t(`header.login`)}</span>
                <Button
                  color="primary"
                  variant="text"
                  type="button"
                  tabIndex="0"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 20px",
                    borderRadius: "4px",
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(55, 55, 204)",
                  }}
                >
                  <span className="sc-klyaaC bIBXRU">
                    {t(`header.startfree`)}
                  </span>
                </Button>
              </Stack>
            </Stack>
          </div>
        </div>
      ) : (
        <div
          id="apply-header"
          className="sc-gkTHIF dgxqgY"
          style={{ height: "70px" }}
        >
          <div className="sc-SMwDY hnvsag">
            <Stack
              class="MuiStack-root css-1xjqnmi"
              style={{ height: "100%", textAlign: "center" }}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label="Go Back to Homepage"
              >
                <svg
                  width="76"
                  viewBox="0 0 77 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.107 0.130859L11.8734 17.9937L17.6399 0.130859H23.7391L15.5423 23.87H8.17363L0 0.130859H6.107Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M38.9987 23.8466L33.8298 14.895H32.5121V23.8466H26.7391V0.136575H36.6064C38.2571 0.0826855 39.8978 0.410461 41.3989 1.09401C42.6283 1.66919 43.6536 2.5999 44.3403 3.76392C45.0108 4.95134 45.3493 6.29505 45.3207 7.65592C45.3658 9.23966 44.8588 10.7903 43.8853 12.0461C42.8226 13.3243 41.3493 14.201 39.7125 14.5292L45.3913 23.87L38.9987 23.8466ZM32.5121 10.9719H36.0966C37.0097 11.0379 37.9143 10.76 38.6301 10.1935C38.9107 9.89608 39.1255 9.54365 39.2606 9.15889C39.3956 8.77413 39.4481 8.36557 39.4145 7.95949C39.4419 7.55746 39.3865 7.15409 39.2517 6.77401C39.1168 6.39393 38.9053 6.04511 38.6301 5.74884C37.9269 5.17036 37.0221 4.89063 36.1123 4.97044H32.5121V10.9719Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M53.4783 0.130859V23.87H48.3913V0.130859H53.4783Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M76.8261 23.87H71.2842L62.0202 9.29606V23.87H56.4783V0.130859H62.0202L71.2842 14.8373V0.130859H76.8261V23.87Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <Stack class="MuiStack-root css-1lnp4vl">
                <span className="sc-gopcNe bHggXf">{t(`header.vrin3d`)}</span>
                <Button
                  color="primary"
                  variant="text"
                  type="button"
                  tabIndex="0"
                  style={{
                    padding: "8px 20px",
                    borderRadius: "4px",
                    backgroundColor: "rgb(55, 55, 204)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  <span className="sc-klyaaC bIBXRU">
                    {t(`header.startfree`)}
                  </span>
                </Button>
              </Stack>
            </Stack>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

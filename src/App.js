import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import MainSection0 from "./components/MainSection0";
import MainSection1 from "./components/MainSection1";
import MainSection2 from "./components/MainSection2";
import MainSection3 from "./components/MainSection3";
import MainSection4 from "./components/MainSection4";

function App() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(null);

  const [headerChange, setHeaderChange] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll(".sc-gvLeZx.fJCXLf");
      let activeIndex = null;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
          activeIndex = index;
        }
      });

      const rect = document.getElementById("section0").getBoundingClientRect();
      if (rect.top < 0) {
        setHeaderChange(true);
      } else {
        setHeaderChange(false);
      }

      setActiveSectionIndex(activeIndex);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const contentSections = document.querySelectorAll(
      ".sc-cPzCod.nmnyx.content"
    );

    contentSections.forEach((section, index) => {
      if (activeSectionIndex === index) {
        section.style.position = "fixed";
      } else {
        section.style.position = "absolute";
      }
    });
  }, [activeSectionIndex]);

  return (
    <div className="App">
      <Header
        headerChange={headerChange}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <MainContainer />
      <MainSection0 />
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
    </div>
  );
}

export default App;

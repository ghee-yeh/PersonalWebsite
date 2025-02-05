"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import NavBar from "./_components/NavBar";
import Title from "./_components/Title";
import volcano from "../public/volcano.jpg";
import Frame from "./_components/Frame";
import Footer from "./_components/Footer";
import Spotify from "./_components/Spotify";
import translation from "./_internationalization/translation.json";
export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (window) {
      const savedLanguage = localStorage.getItem("language") || "en";
      setLanguage(savedLanguage);
    }

    const elements = 10;
    for (let i = 0; i < elements; i++) {
      setTimeout(() => {
        setIsVisible((prev) => ({ ...prev, [i]: true }));
      }, i * 100);
    }
  }, []);

  const fadeInStyle = (index) => ({
    opacity: isVisible[index] ? 1 : 0,
    transition: "opacity 0.5s ease-in",
    color: "var(--primary)",
  });

  return (
    <div className={styles.container}>
      <div style={fadeInStyle(0)}>
        <NavBar />
      </div>
      <div style={fadeInStyle(1)}>
        <Title />
      </div>
      <div className="b2" style={fadeInStyle(2)}>
        {translation[language].paragraph_1}
      </div>
      <div className="b2" style={fadeInStyle(3)}>
        {translation[language].paragraph_2a}{" "}
        <a
          href="https://posthog.com/blog/what-is-a-product-engineer"
          target="_blank"
        >
          {translation[language].paragraph_2b}
        </a>
        .
      </div>
      <div style={fadeInStyle(4)}>
        <Frame
          src={volcano}
          date={<div className="b3">2021</div>}
          caption={
            <div className="b3">
              <a
                href="https://en.wikipedia.org/wiki/Volc%C3%A1n_Tajumulco"
                target="_blank"
              >
                {translation[language].paragraph_3a}
              </a>{" "}
              {translation[language].paragraph_3b}
            </div>
          }
        />
      </div>
      <div className="b2" style={fadeInStyle(5)}>
        {translation[language].paragraph_4}
      </div>
      <div className="b2" style={fadeInStyle(6)}>
        {translation[language].paragraph_5a}{" "}
        <a href="experience">{translation[language].paragraph_5b}</a>.
      </div>
      <div style={fadeInStyle(6)}>
        <Spotify />
      </div>
      <div className="b2" style={fadeInStyle(7)}>
        {translation[language].paragraph_7a}{" "}
        <a href="favorites">{translation[language].paragraph_7b}</a>{" "}
        {translation[language].paragraph_7c}
      </div>
      <div style={fadeInStyle(8)}>
        <Footer />
      </div>
    </div>
  );
}

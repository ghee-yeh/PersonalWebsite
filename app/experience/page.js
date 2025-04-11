"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import NavBar from "../_components/NavBar";
import Footer from "../_components/Footer";
import ExperienceCard from "./_components/ExperienceCard";
import habitat from "../../public/habitat.jpg";
import traveler from "../../public/traveler.jpg";
import picnic from "../../public/picnic.webp";
import sivar from "../../public/sivar.jpeg";
import ftsl from "../../public/ftsl.jpeg";
import amazon from "../../public/amazon.jpeg";
import translation from "../_internationalization/translation.json";

export default function Experience() {
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
    <div
      className={styles.container}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div style={fadeInStyle(0)}>
        <NavBar />
      </div>
      <div
        style={{
          flex: 1,
          gap: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="b1" style={{ ...fadeInStyle(1), fontWeight: "bold" }}>
            {translation[language].experience}
          </div>
          <div style={fadeInStyle(2)}>
            <ExperienceCard
              company="Amazon"
              position={translation[language].software_engineer}
              description={translation[language].amazon_description}
              year={`2025 - ${translation[language].present}`}
              image={amazon}
              url="https://aws.amazon.com/"
            />
          </div>
          <div style={fadeInStyle(3)}>
            <ExperienceCard
              company="Habitat App"
              position={translation[language].co_founder}
              description={translation[language].habitat_app}
              year={`2022 - ${translation[language].present}`}
              image={habitat}
              url="https://www.habitat-app.org"
            />
          </div>
          <div style={fadeInStyle(4)}>
            <ExperienceCard
              company="traveler"
              position={translation[language].co_founder}
              description={translation[language].traveler}
              year="2024"
              image={traveler}
              url="https://www.get-traveler.com/"
            />
          </div>
          <div style={fadeInStyle(5)}>
            <ExperienceCard
              company="Picnic"
              position="Chief Product Officer"
              description={translation[language].picnic}
              year="2021"
              image={picnic}
              url="https://apps.apple.com/ca/app/picnic-dive-into-communities/id1544626265"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="b1" style={{ ...fadeInStyle(4), fontWeight: "bold" }}>
            {translation[language].volunteering}
          </div>
          <div style={fadeInStyle(6)}>
            <ExperienceCard
              company="FTSL"
              position={translation[language].founder}
              description={translation[language].ftsl}
              year="2018 - 2024"
              image={ftsl}
              url="https://www.instagram.com/fundacionftsl/"
            />
          </div>
          <div style={fadeInStyle(7)}>
            <ExperienceCard
              company="SivarLive"
              position={translation[language].co_founder}
              description={translation[language].sivar}
              year="2022"
              image={sivar}
              url="https://www.instagram.com/sivar.live/"
            />
          </div>
        </div>
      </div>
      <div style={fadeInStyle(8)}>
        <Footer />
      </div>
    </div>
  );
}

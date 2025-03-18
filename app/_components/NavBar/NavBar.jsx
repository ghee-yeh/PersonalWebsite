"use client";

import styles from "./style.module.css";
import Polygon from "../Polygon";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const [sides, setSides] = useState(12);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  // Apply theme class to document body
  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  useEffect(() => {
    if (window) {
      const savedLanguage = localStorage.getItem("language") || "en";
      setLanguage(savedLanguage);
    }
  }, []);

  const handlePolygonClick = () => {
    setSides((current) => (current <= 3 ? 12 : current - 1));
  };

  return (
    <div className={styles.container}>
      <div onClick={() => router.push("/")}>
        <Polygon
          size={25}
          sides={sides}
          color={theme === "dark" ? "#ffffff" : "#000000"}
        />
      </div>
      <div className={styles.links}>
        <div
          className="b3"
          onClick={() => {
            const newLang = language === "en" ? "es" : "en";
            setLanguage(newLang);
            if (window) {
              localStorage.setItem("language", newLang);
              window.location.reload();
            }
          }}
        >
          {language === "en" ? "español" : "english"}
        </div>
      </div>
    </div>
  );
}

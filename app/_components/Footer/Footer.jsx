"use client";

import styles from "./style.module.css";
import translation from "../../_internationalization/translation.json";
import { useEffect, useState } from "react";
export default function Footer() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (window) {
      const savedLanguage = localStorage.getItem("language") || "en";
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className={styles.links}>
      {/* <a className="b3" href="https://www.x.com/gee_yer_moh/" target="_blank">
        @gee_yer_moh
      </a> */}

      <a className="b3" href="https://github.com/ghee-yeh" target="_blank">
        github
      </a>
      <a
        className="b3"
        href="https://www.linkedin.com/in/guillermo-avelar/"
        target="_blank"
      >
        linkedin
      </a>
    </div>
  );
}

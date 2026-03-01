"use client";

import styles from "./style.module.css";
import Polygon from "../Polygon";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from 'next-intl';

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [sides, setSides] = useState(12);

  const handlePolygonClick = () => {
    setSides((current) => (current <= 3 ? 12 : current - 1));
  };

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className={styles.container}>
      <div onClick={() => router.push(`/${locale}`)}>
        <Polygon
          size={25}
          sides={sides}
          color="var(--primary)"
        />
      </div>
      <div className={styles.links}>
        <div
          className="b3"
          onClick={switchLocale}
        >
          {locale === "en" ? "español" : "english"}
        </div>
      </div>
    </div>
  );
}

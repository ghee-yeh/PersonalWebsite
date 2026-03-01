"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import styles from "../page.module.css";
import NavBar from "../../_components/NavBar";
import Footer from "../../_components/Footer";
import ExperienceCard from "../../experience/_components/ExperienceCard";
import habitat from "../../../public/habitat.jpg";
import traveler from "../../../public/traveler.jpg";
import sivar from "../../../public/sivar.jpeg";
import ftsl from "../../../public/ftsl.jpeg";
import amazon from "../../../public/amazon.jpeg";
import { staggerContainer, fadeInVariants } from "../../_utils/animations";

export default function Experience() {
  const t = useTranslations();

  return (
    <motion.div
      className={styles.container}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeInVariants}>
        <NavBar />
      </motion.div>
      <div
        style={{
          flex: 1,
          gap: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <motion.div className="b1" style={{ fontWeight: "bold" }} variants={fadeInVariants}>
            {t('experience')}
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <ExperienceCard
              company="Amazon"
              position={t('software_engineer')}
              description={t('amazon_description')}
              year={`2025 - ${t('present')}`}
              image={amazon}
              url="https://aws.amazon.com/"
            />
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <ExperienceCard
              company="Habitat App"
              position={t('co_founder')}
              description={t('habitat_app')}
              year={`2022 - ${t('present')}`}
              image={habitat}
              url="https://www.habitat-app.org"
            />
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <ExperienceCard
              company="traveler"
              position={t('co_founder')}
              description={t('traveler')}
              year="2024"
              image={traveler}
              url="https://www.get-traveler.com/"
            />
          </motion.div>          
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <motion.div className="b1" style={{ fontWeight: "bold" }} variants={fadeInVariants}>
            {t('volunteering')}
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <ExperienceCard
              company="FTSL"
              position={t('founder')}
              description={t('ftsl')}
              year="2018 - 2024"
              image={ftsl}
              url="https://www.instagram.com/fundacionftsl/"
            />
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <ExperienceCard
              company="SivarLive"
              position={t('co_founder')}
              description={t('sivar')}
              year="2022"
              image={sivar}
              url="https://www.instagram.com/sivar.live/"
            />
          </motion.div>
        </div>
      </div>
      <motion.div variants={fadeInVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import styles from "./page.module.css";
import NavBar from "../_components/NavBar";
import Title from "../_components/Title";
import volcano from "../../public/volcano.jpg";
import Frame from "../_components/Frame";
import Footer from "../_components/Footer";
import Spotify from "../_components/Spotify";
import { staggerContainer, fadeInVariants } from "../_utils/animations";

export default function Home() {
  const t = useTranslations();

  return (
    <motion.div 
      className={styles.container}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeInVariants}>
        <NavBar />
      </motion.div>
      <motion.div variants={fadeInVariants}>
        <Title />
      </motion.div>
      <motion.div className="b2" variants={fadeInVariants}>
        {t('paragraph_1')}
      </motion.div>
      <motion.div className="b2" variants={fadeInVariants}>
        {t('paragraph_2a')}{" "}
      </motion.div>
      <motion.div variants={fadeInVariants}>
        <Frame
          src={volcano}
          date={<div className="b3">2021</div>}
          caption={
            <div className="b3">
              <a
                href="https://en.wikipedia.org/wiki/Volc%C3%A1n_Tajumulco"
                target="_blank"
              >
                {t('paragraph_3a')}
              </a>{" "}
              {t('paragraph_3b')}
            </div>
          }
        />
      </motion.div>
      <motion.div className="b2" variants={fadeInVariants}>
        {t('paragraph_4')}
      </motion.div>
      <motion.div className="b2" variants={fadeInVariants}>
        {t('paragraph_5a')}{" "}
        <a href="experience">{t('paragraph_5b')}</a>.
      </motion.div>
      <motion.div variants={fadeInVariants}>
        <Spotify />
      </motion.div>
      <motion.div className="b2" variants={fadeInVariants}>
        {t('paragraph_7a')}{" "}
        <a href="favorites">{t('paragraph_7b')}</a>{" "}
        {t('paragraph_7c')}
      </motion.div>
      <motion.div variants={fadeInVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
}

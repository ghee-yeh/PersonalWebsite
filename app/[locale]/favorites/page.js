"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import styles from "../page.module.css";
import favStyles from "./favorites.module.css";
import NavBar from "../../_components/NavBar";
import Footer from "../../_components/Footer";
import Media from "../../favorites/_components/Media";
import { staggerContainer, fadeInVariants } from "../../_utils/animations";

export default function Favorites() {
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
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          variants={fadeInVariants}
        >
          <div className="b1" style={{ fontWeight: "bold" }}>
            {t('books')}
          </div>
          <div className={favStyles.mediaGrid}>
            <Media
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1580978211i/70551.jpg"
              url="https://www.goodreads.com/book/show/70551.Republic"
            />
            <Media
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1439953323i/98233.jpg"
              url="https://www.goodreads.com/book/show/98233.Founders_at_Work"
            />
            <Media
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1351030933i/41810.jpg"
              url="https://www.goodreads.com/book/show/41810.The_Robots_of_Dawn"
            />
          </div>
          <div className={favStyles.mediaGrid}>
            <Media
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348430512i/13629.jpg"
              url="https://www.goodreads.com/book/show/13629.The_Mythical_Man_Month"
            />
            <Media
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1266716857i/3571715.jpg"
              url="https://www.goodreads.com/book/show/3571715-the-story-of-mathematics"
            />
            <Media
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1335782474i/30013.jpg"
              url="https://www.goodreads.com/book/show/30013.Prelude_to_Foundation"
            />
          </div>
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          variants={fadeInVariants}
        >
          <div className="b1" style={{ fontWeight: "bold" }}>
            {t('songs')}
          </div>
          <div className={favStyles.mediaGrid}>
            <Media
              src="https://i.scdn.co/image/ab67616d0000b27369337b6f76bd7943acdcd192"
              url="https://www.youtube.com/watch?v=e4HfFwVy-h0"
            />
            <Media
              src="https://i.scdn.co/image/ab67616d0000b27303e402534d80a4aee949a950"
              url="https://open.spotify.com/track/47dPsSo7cEDNkvIOSB4O2k?si=13feeaa39c084076"
            />
            <Media
              src="https://i.scdn.co/image/ab67616d0000b2733174a9f789d91a20d3ef14aa"
              url="https://open.spotify.com/track/7E4qUlNYocWix5FKBdw5CN?si=29d9e26fd13e454f"
            />
          </div>
          <div className={favStyles.mediaGrid}>
            <Media
              src="https://i.scdn.co/image/ab67616d00001e0281973b1e448ef835d8aaf077"
              url="https://open.spotify.com/track/1K75F5lMyhGFqbM8HwWSpS?si=d28cc7a3bda34451"
            />
            <Media
              src="https://i.scdn.co/image/ab67616d00001e02af1f63ab36a87d8465ace90e"
              url="https://open.spotify.com/track/123Knw8YTwtauhn4fcbH6L?si=b35e2980ec924b0c6"
            />
            <Media
              src="https://i.scdn.co/image/ab67616d00001e02cf39e4261576717ff4737bb6"
              url="https://open.spotify.com/track/1he20mKw1eq2OVp1BKBlpt?si=2d111fac6ada4730"
            />
          </div>
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          variants={fadeInVariants}
        >
          <div className="b1" style={{ fontWeight: "bold" }}>
            Podcasts
          </div>
          <div className={favStyles.mediaGrid}>
            <Media
              src="https://i.scdn.co/image/ab67656300005f1fc1c2aa46984f4d3e46f2f77e"
              url="https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp?si=5002405aaa694295"
            />
            <Media
              src="https://i.scdn.co/image/ab67656300005f1fa6db7104b56437d9bde89674"
              url="https://open.spotify.com/show/7txiovdzPARhjm18NwMUYj?si=210ac21829b64a96"
            />
            <Media
              src="https://i.scdn.co/image/ab67656300005f1fa4265d76d07449481c61737d"
              url="https://open.spotify.com/show/5gqPlUIyrXZfrRdffYq5Sq?si=ce356bf1b0494ec6"
            />
          </div>
        </motion.div>
      </div>
      <motion.div variants={fadeInVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
}

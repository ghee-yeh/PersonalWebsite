"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import NavBar from "../_components/NavBar";
import Footer from "../_components/Footer";
import Media from "./_components/Media";
import translation from "../_internationalization/translation.json";

export default function Favorites() {

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
            setIsVisible(prev => ({...prev, [i]: true}));
          }, i * 100);
        }
    }, []);
    
      const fadeInStyle = (index) => ({
        opacity: isVisible[index] ? 1 : 0,
        transition: 'opacity 0.5s ease-in',
        color: "var(--primary)"
      });

  return <div className={styles.container} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <div style={fadeInStyle(0)}><NavBar /></div>
    <div style={{ flex: 1, gap: "40px", display: "flex", flexDirection: "column" }}>
      <div style={{display: "flex", flexDirection: "column", gap: "20px", ...fadeInStyle(1)}}>
        <div className="b1" style={{...fadeInStyle(1), fontWeight: "bold"}}>{translation[language].books}</div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Media src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1580978211i/70551.jpg" url="https://www.goodreads.com/book/show/70551.Republic" />
          <Media src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1439953323i/98233.jpg" url="https://www.goodreads.com/book/show/98233.Founders_at_Work" />
          <Media src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1351030933i/41810.jpg" url="https://www.goodreads.com/book/show/41810.The_Robots_of_Dawn" />
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Media src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348430512i/13629.jpg" url="https://www.goodreads.com/book/show/13629.The_Mythical_Man_Month" />
          <Media src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1266716857i/3571715.jpg" url="https://www.goodreads.com/book/show/3571715-the-story-of-mathematics" />
          <Media src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1335782474i/30013.jpg" url="https://www.goodreads.com/book/show/30013.Prelude_to_Foundation" />
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: "20px", ...fadeInStyle(2)}}>
      <div className="b1" style={{...fadeInStyle(4), fontWeight: "bold"}}>{translation[language].songs}</div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Media src="https://i.scdn.co/image/ab67616d0000b27369337b6f76bd7943acdcd192" url="https://www.youtube.com/watch?v=e4HfFwVy-h0" />
        <Media src="https://i.scdn.co/image/ab67616d0000b27303e402534d80a4aee949a950" url="https://open.spotify.com/track/47dPsSo7cEDNkvIOSB4O2k?si=13feeaa39c084076" />
        <Media src="https://i.scdn.co/image/ab67616d0000b2733174a9f789d91a20d3ef14aa" url="https://open.spotify.com/track/7E4qUlNYocWix5FKBdw5CN?si=29d9e26fd13e454f" />
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Media src="https://i.scdn.co/image/ab67616d00001e0281973b1e448ef835d8aaf077" url="https://open.spotify.com/track/1K75F5lMyhGFqbM8HwWSpS?si=d28cc7a3bda34451" />
        <Media src="https://i.scdn.co/image/ab67616d00001e02af1f63ab36a87d8465ace90e" url="https://open.spotify.com/track/123Knw8YTwtauhn4fcbH6L?si=b35e2980ec924b0c6" />
        <Media src="https://i.scdn.co/image/ab67616d00001e02cf39e4261576717ff4737bb6" url="https://open.spotify.com/track/1he20mKw1eq2OVp1BKBlpt?si=2d111fac6ada4730" />
      </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: "20px", ...fadeInStyle(3)}}>
        <div className="b1" style={{...fadeInStyle(7), fontWeight: "bold"}}>Podcasts</div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Media src="https://i.scdn.co/image/ab67656300005f1fc1c2aa46984f4d3e46f2f77e" url="https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp?si=5002405aaa694295" />
        <Media src="https://i.scdn.co/image/ab67656300005f1fa4265d76d07449481c61737d" url="https://open.spotify.com/show/5gqPlUIyrXZfrRdffYq5Sq?si=ce356bf1b0494ec6" />
        <Media src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/97/b9/53/97b953b0-7d37-959b-a5e1-e02032ed1a97/mza_17272148593270701909.jpg/1200x1200bf.webp" url="https://open.spotify.com/show/0hCbmBt7bJVqtvg3aNUsgt?si=4b482cde13c2413b" />
      </div>
      </div>
    </div>
    <div style={fadeInStyle(4)}><Footer /></div>
  </div>;
}
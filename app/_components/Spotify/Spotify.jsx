"use client"

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import styles from './style.module.css';
import Image from 'next/image';
import Bars from './Bars';

const FALLBACK_TRACK = {
  title: "Close to the Edge",
  artist: "Yes",
  image: "https://i.scdn.co/image/ab67616d0000b27303e402534d80a4aee949a950",
  link: "https://open.spotify.com/track/1oJ2a13bVN1RssKIWxKLe2?si=fb2f27c6963c4652"
};

const msToMinutes = (ms, isSpanish) => {
  const minutes = Math.floor(ms / 60000);
  
  if (minutes >= 1440) {
    const days = Math.floor(minutes / 1440);
    return isSpanish ? `hace ${days}d` : `${days}d ago`;
  }
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    return isSpanish ? `hace ${hours}h` : `${hours}h ago`;
  }
  return isSpanish ? `hace ${minutes}m` : `${minutes}m ago`;
}

const findFirstNonExplicitTrack = (tracks) => {
  return tracks?.items?.find(item => !item?.track?.explicit);
};

export default function Spotify() {
  const locale = useLocale();
  const t = useTranslations();
  const [data, setData] = useState(FALLBACK_TRACK);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const response = await fetch('/api/spotify');
        if (!response.ok) return;
        
        const { nowPlayingSong, recentlyPlayedSong } = await response.json();
        
        if (nowPlayingSong?.is_playing && nowPlayingSong?.currently_playing_type === 'track') {
          setData({
            title: nowPlayingSong.item.name,
            artist: nowPlayingSong.item.artists[0].name,
            image: nowPlayingSong.item.album.images[0].url,
            link: nowPlayingSong.item.external_urls.spotify,
          });
          setIsPlaying(true);
        } else {
          const track = findFirstNonExplicitTrack(recentlyPlayedSong);
          if (track) {
            const timeSince = new Date() - new Date(track.played_at);
            setData({
              title: track.track.name,
              artist: track.track.artists[0].name,
              image: track.track.album.images[0].url,
              link: track.track.external_urls.spotify,
              time: msToMinutes(timeSince, locale === 'es')
            });
          }
        }
      } catch (error) {
        console.error('Spotify fetch error:', error);
      }
    };
    
    fetchSpotify();
  }, [locale]);
  
  return (
    <div className={styles.frame}>
      <div className={styles.songContainer}>
        <div className={styles.image}> 
          <Image 
            src={data.image} 
            alt="Album Art" 
            fill
            style={{objectFit: 'cover'}}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={styles.songInfo}>
          <a 
            className="b3" 
            style={{textWrap: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: 'fit-content', maxWidth: '100%'}} 
            href={data.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
          <div className="b3" style={{color: 'var(--tertiary)'}}>{data.artist}</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className="b3">{t('paragraph_6')}</div>
        <div className="b3">{isPlaying ? <Bars /> : data.time}</div>
      </div>  
    </div>
  );
}


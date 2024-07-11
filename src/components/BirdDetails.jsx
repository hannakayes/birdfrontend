import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/BirdDetails.module.css";
const BirdDetails = ({ bird }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleSound = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    } else {
      const audio = new Audio(bird.sound);
      audioRef.current = audio;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setIsPlaying(false);
  };
  useEffect(() => {
    
    return () => {
      stopSound();
    };
  }, [bird]);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{bird.name}</h2>
        <button
          className={`${styles.soundButton} ${isPlaying ? styles.active : ""}`}
          onClick={toggleSound}
        >
          {isPlaying ? "Stop" : "Hear"}
        </button>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardDetails}>
          <div className={styles.detail}>
            <strong>Scientific Name:</strong>{" "}
            <span className={styles.italic}>{bird.latin_name}</span>
          </div>
          <div className={styles.detail}>
            <strong>Habitat:</strong> {bird.habitat}
          </div>
          <div className={styles.detail}>
            <strong>Order:</strong> {bird.order}
          </div>
          <div className={styles.detail}>
            <strong>Family:</strong> {bird.family}
          </div>
          <div className={styles.detail}>
            <strong>Status:</strong> {bird.status}
          </div>
          <div className={styles.detail}>
            <strong>Description:</strong> {bird.description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BirdDetails;
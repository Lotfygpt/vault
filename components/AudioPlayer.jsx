"use client";
import { useEffect } from "react";

export default function AudioPlayer() {
  useEffect(() => {
    const audio = new Audio("/sounds/start.mp3");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }, []);
  return null;
}

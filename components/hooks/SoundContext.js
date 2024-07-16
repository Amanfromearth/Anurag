"use client"

import React, { createContext, useCallback } from 'react';
import { playSound, loadAudio } from './audioUtils';

export const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const playSoundWithLoad = useCallback(() => {
    playSound();
  }, []);

  return (
    <SoundContext.Provider value={playSoundWithLoad}>
      {children}
    </SoundContext.Provider>
  );
}
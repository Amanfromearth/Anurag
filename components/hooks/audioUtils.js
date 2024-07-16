"use client"

let AudioContext;
let audioContext;
let audioBuffer = null;

if (typeof window !== 'undefined') {
  AudioContext = window.AudioContext || window.webkitAudioContext;
  audioContext = new AudioContext();
}

export async function loadAudio() {
  if (audioBuffer) return; // If already loaded, don't load again

  try {
    const response = await fetch('/click2.mp3');
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  } catch (error) {
    console.error('Failed to load audio:', error);
  }
}

export function playSound() {
  if (audioBuffer && audioContext) {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
  } else if (!audioBuffer) {
    // If audio is not loaded yet, load it and then play
    loadAudio().then(() => {
      if (audioBuffer) {
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
      }
    });
  }
}
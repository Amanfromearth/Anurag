/**
 * Lightweight click-sound player using the Web Audio API.
 *
 * Replaces the former React SoundContext/useSound/audioUtils trio with a
 * framework-agnostic module that any island or inline `<script>` can import.
 * The AudioContext is created lazily on first use so it stays inside the
 * user-gesture that browsers require for audio playback.
 */
const CLICK_SRC = '/click2.mp3';

let audioContext: AudioContext | null = null;
let audioBuffer: AudioBuffer | null = null;
let loadPromise: Promise<void> | null = null;

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioContext) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    audioContext = new Ctor();
  }
  return audioContext;
}

async function loadAudio(): Promise<void> {
  const ctx = getContext();
  if (!ctx || audioBuffer) return;
  if (!loadPromise) {
    loadPromise = (async () => {
      try {
        const response = await fetch(CLICK_SRC);
        const arrayBuffer = await response.arrayBuffer();
        audioBuffer = await ctx.decodeAudioData(arrayBuffer);
      } catch (error) {
        // Surface the failure instead of silently swallowing it.
        console.error('Failed to load click sound:', error);
        loadPromise = null;
      }
    })();
  }
  return loadPromise;
}

function play(ctx: AudioContext, buffer: AudioBuffer): void {
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start();
}

export function playSound(): void {
  const ctx = getContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') void ctx.resume();
  if (audioBuffer) {
    play(ctx, audioBuffer);
    return;
  }
  void loadAudio().then(() => {
    if (audioBuffer) play(ctx, audioBuffer);
  });
}

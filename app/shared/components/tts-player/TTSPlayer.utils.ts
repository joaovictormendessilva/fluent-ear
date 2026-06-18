import { getBestEnglishVoice } from "./TTSPlayer.helpers";

export function loadVoices() {
  const voices = speechSynthesis.getVoices();

  return {
    voices,
    selectedVoice: getBestEnglishVoice(voices),
  };
}

export function calculateProgress(charIndex: number, totalCharacters: number) {
  if (!totalCharacters) {
    return 0;
  }

  return Math.min((charIndex / totalCharacters) * 100, 100);
}

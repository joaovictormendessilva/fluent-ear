import { Play, RotateCcw, Square } from "lucide-react";
import { useEffect, useState } from "react";

import { calculateProgress, loadVoices } from "./TTSPlayer.utils";
import type { SpeechStatus, TTSPlayerProps } from "./TTSPlayer.types";

export function TTSPlayer({ text }: TTSPlayerProps) {
  const [status, setStatus] = useState<SpeechStatus>("idle");

  const [progress, setProgress] = useState(0);

  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const [rate, setRate] = useState(0.9);

  useEffect(() => {
    const handleLoadVoices = () => {
      const { selectedVoice } = loadVoices();

      if (selectedVoice) {
        setVoice(selectedVoice);
      }
    };

    handleLoadVoices();

    speechSynthesis.onvoiceschanged = handleLoadVoices;

    return () => {
      speechSynthesis.cancel();
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  function handlePlay() {
    if (!voice) {
      return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = rate;

    utterance.onstart = () => {
      setStatus("playing");
    };

    utterance.onend = () => {
      setStatus("finished");
      setProgress(100);
    };

    utterance.onerror = () => {
      setStatus("idle");
      setProgress(0);
    };

    utterance.onboundary = (event) => {
      setProgress(calculateProgress(event.charIndex, text.length));
    };

    speechSynthesis.speak(utterance);
  }

  function handleStop() {
    speechSynthesis.cancel();

    setStatus("idle");
    setProgress(0);
  }

  function handleReplay() {
    handleStop();

    setTimeout(() => {
      handlePlay();
    }, 50);
  }

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-zinc-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">Listening</p>

          <p className="text-sm text-zinc-300">{voice?.name}</p>
        </div>

        <div className="text-sm text-zinc-400">{rate}x</div>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-cyan-500 transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleReplay}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
        >
          <RotateCcw size={18} />
        </button>

        <button
          onClick={status === "playing" ? handleStop : handlePlay}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 transition hover:scale-105"
        >
          {status === "playing" ? <Square size={22} /> : <Play size={22} fill="currentColor" />}
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {[0.8, 0.9, 1, 1.1].map((speed) => (
          <button
            key={speed}
            onClick={() => setRate(speed)}
            className={[
              "rounded-full px-3 py-1 text-sm transition",
              speed === rate ? "bg-cyan-500 text-black" : "bg-white/5 text-zinc-400 hover:bg-white/10",
            ].join(" ")}
          >
            {speed}x
          </button>
        ))}
      </div>
    </div>
  );
}

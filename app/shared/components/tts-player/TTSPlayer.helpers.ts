export function getBestEnglishVoice(voices: SpeechSynthesisVoice[]) {
  const priorities = [
    "Microsoft Aria Online (Natural)",
    "Microsoft Jenny Online (Natural)",
    "Microsoft Ava Multilingual Online (Natural)",
    "Microsoft Emma Online (Natural)",
    "Microsoft Guy Online (Natural)",
    "Microsoft Brian Online (Natural)",
  ];

  for (const preferred of priorities) {
    const voice = voices.find((voice) => voice.name.includes(preferred));

    if (voice) {
      return voice;
    }
  }

  return voices.find((voice) => voice.lang === "en-US") ?? voices.find((voice) => voice.lang.startsWith("en"));
}

import { useEffect, useRef, useState } from "react";
import LangSwitch from "./LangSwitch";
import Scene from "./Scene";

function useFit(ref) {
  const [fit, setFit] = useState({
    scale: 1,
    portrait: false,
  });

  useEffect(() => {
    function calculateFit() {
      const element = ref.current;

      if (!element) {
        return;
      }

      const width = element.clientWidth; 
      const height = element.clientHeight;
      const portrait = width / height < 0.95;
      const sceneWidth = portrait ? 640 : 1100;

      setFit({
        portrait,
        scale: Math.min(width / sceneWidth, (height - 70) / 640),
      });
    }

    calculateFit();

    window.addEventListener("resize", calculateFit);

    return () => window.removeEventListener("resize", calculateFit);
  }, [ref]);

  return fit;
}

export default function Hero({
  t,
  lang,
  setLang,
  playing,
  ready,
  run,
  onSkip,
  onReplay,
  onEnter,
}) {
  const heroRef = useRef(null);
  const fit = useFit(heroRef);

  return (
    <header
      ref={heroRef}
      className={`hero ${ready ? "ready" : ""}`}
    >
      <div
        aria-hidden="true"
        className={`stage ${playing ? "play" : ""} ${
          fit.portrait ? "portrait" : ""
        }`}
        style={{ "--s": fit.scale }}
      >
        <Scene key={run} t={t} />
      </div>

      <LangSwitch hero lang={lang} setLang={setLang} />

      <button
        type="button"
        onClick={playing ? onSkip : onReplay}
        className="replay ui"
      >
        {playing ? t.skip : t.replay}
      </button>

      <button
        type="button"
        onClick={onEnter}
        className="enter ui"
      >
        <span>{t.cta}</span>
        <kbd>Enter</kbd>
      </button>
    </header>
  );
}
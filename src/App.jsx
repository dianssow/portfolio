import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import { translations } from "./data/translations";

const prefersReducedMotion = window.matchMedia?.(
  "(prefers-reduced-motion: reduce)",
).matches;

function getInitialLanguage() {
  const browserLanguage = (navigator.language || "de").toLowerCase();

  return browserLanguage.startsWith("fr") ? "fr" : "de";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLanguage);
  const [playing, setPlaying] = useState(!prefersReducedMotion);
  const [ready, setReady] = useState(prefersReducedMotion);
  const [run, setRun] = useState(0);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setPlaying(false);
      setReady(true);
    }, 8600);

    return () => window.clearTimeout(timer);
  }, [run]);

  function skipAnimation() {
    setPlaying(false);
    setReady(true);
  }

  function replayAnimation() {
    setReady(false);
    setPlaying(true);
    setRun((previousRun) => previousRun + 1);
  }

  function enterPortfolio() {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  function replayFromTop() {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    window.setTimeout(
      replayAnimation,
      prefersReducedMotion ? 0 : 450,
    );
  }

  useEffect(() => {
    function handleKeyDown(event) {
      const tagName = document.activeElement?.tagName;

      const focusedInteractiveElement = /^(A|BUTTON|INPUT)$/.test(tagName);

      const closeToHero = window.scrollY < window.innerHeight * 0.5;

      if (
        event.key === "Enter" &&
        ready &&
        closeToHero &&
        !focusedInteractiveElement
      ) {
        enterPortfolio();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [ready]);

  return (
    <>
      <Hero
        t={t}
        lang={lang}
        setLang={setLang}
        playing={playing}
        ready={ready}
        run={run}
        onSkip={skipAnimation}
        onReplay={replayAnimation}
        onEnter={enterPortfolio}
      />

      <Portfolio
        t={t}
        lang={lang}
        setLang={setLang}
        onReplayTop={replayFromTop}
      />
    </>
  );
}
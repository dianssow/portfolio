export default function LangSwitch({ lang, setLang, hero = false }) {
  return (
    <div
      role="group"
      aria-label="Sprache / Langue"
      className={[
        "flex gap-1",
        hero
          ? "absolute right-[clamp(20px,5vw,64px)] top-[calc(14px+env(safe-area-inset-top,0px))] z-5"
          : "",
      ].join(" ")}
    >
      {["de", "en" ,"fr"].map((language) => {
        const active = lang === language;

        return (
          <button
            key={language}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(language)}
            className={[
              "rounded-full border px-2.5 py-1 text-[13px] font-medium tracking-[0.04em] transition",
              hero
                ? "border-transparent text-[#e7ecee]"
                : "border-transparent text-ink-soft hover:text-ink",
              active
                ? hero
                  ? "border-current"
                  : "border-current text-ink"
                : "",
            ].join(" ")}
          >
            {language.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
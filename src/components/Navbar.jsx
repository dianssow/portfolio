import LangSwitch from "./LangSwitch";

export default function Navbar({ t, lang, setLang }) {
  return (
    <nav
      aria-label="Navigation"
      className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-line bg-paper/92 px-[clamp(20px,5vw,64px)] py-3 backdrop-blur-md"
    >
      <a
        href="#top"
        className="flex items-center gap-2.5 font-condensed text-lg font-bold tracking-[0.01em] no-underline"
      >
        <i className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
        <span className="max-[620px]:hidden">Mamadou Dian Sow</span>
      </a>

      <div className="flex items-center gap-[clamp(10px,2vw,24px)]">
        <ul className="flex list-none gap-3 p-0 text-sm sm:gap-[clamp(12px,2.4vw,28px)] max-[440px]:[&>li:nth-child(3)]:hidden">
          <li>
            <a
              href="#tech"
              className="border-b-2 border-transparent py-1 text-ink-soft no-underline transition hover:border-brand-red hover:text-ink"
            >
              {t.nTech}
            </a>
          </li>

          <li>
            <a
              href="#projekte"
              className="border-b-2 border-transparent py-1 text-ink-soft no-underline transition hover:border-brand-red hover:text-ink"
            >
              {t.nProj}
            </a>
          </li>

          <li>
            <a
              href="#werdegang"
              className="border-b-2 border-transparent py-1 text-ink-soft no-underline transition hover:border-brand-red hover:text-ink"
            >
              {t.nPath}
            </a>
          </li>

          <li>
            <a
              href="#kontakt"
              className="border-b-2 border-transparent py-1 text-ink-soft no-underline transition hover:border-brand-red hover:text-ink"
            >
              {t.nContact}
            </a>
          </li>
        </ul>

        <LangSwitch lang={lang} setLang={setLang} />
      </div>
    </nav>
  );
}
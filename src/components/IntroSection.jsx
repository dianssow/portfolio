

export default function IntroSection({ t }) {
  return (
    <section
      id="top"
      className="px-[clamp(20px,5vw,64px)] pb-[clamp(64px,9vw,120px)] pt-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-5 text-lg text-ink-soft">{t.role}</p>

        <h1 className="font-condensed text-[clamp(52px,11vw,132px)] font-bold leading-[0.9] tracking-[-0.02em]">
          Mamadou
          <br />
          Dian Sow
        </h1>

        <div className="mt-[clamp(32px,5vw,64px)] grid grid-cols-[1.35fr_1fr] items-start gap-[clamp(28px,6vw,80px)] max-[820px]:grid-cols-1">
          <div>
            <p className="mb-5 max-w-[30ch] font-condensed text-[clamp(22px,2.6vw,30px)] font-semibold leading-tight">
              {t.lead}
            </p>

            <p className="max-w-[56ch] text-ink-soft">{t.about}</p>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-line pt-5">
            <dt className="text-sm text-ink-soft">{t.fStudy}</dt>
            <dd>{t.fStudyV}</dd>

            <dt className="text-sm text-ink-soft">{t.fPlace}</dt>
            <dd>Bremen</dd>

            <dt className="text-sm text-ink-soft">{t.fLang}</dt>
            <dd>
              {t.fLangV.map((language) => (
                <span key={language} className="block">
                  {language}
                </span>
              ))}
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import ShipMap from "./ShipMap";
import { ART_POS } from "../lib/artSvg";
import posScreenshot from "../assets/edioula-pos-dashboard.webp";

function List({ items }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li
          key={item}
          className="border-t border-line py-[7px] text-lg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function IntroSection({ t }) {
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

        <div className="mt-[clamp(32px,5vw,64px)] grid grid-cols-1 items-start gap-[clamp(28px,6vw,80px)] min-[820px]:grid-cols-[1.35fr_1fr]">
          <div>
            <p className="mb-5 max-w-[30ch] font-condensed text-[clamp(22px,2.6vw,30px)] font-semibold leading-[1.25]">
              {t.lead}
            </p>

            <p className="m-0 max-w-[56ch] text-ink-soft">{t.about}</p>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-line pt-5">
            <dt className="text-[15px] text-ink-soft">{t.fStudy}</dt>
            <dd className="m-0">{t.fStudyV}</dd>

            <dt className="text-[15px] text-ink-soft">{t.fPlace}</dt>
            <dd className="m-0">Bremen</dd>

            <dt className="text-[15px] text-ink-soft">{t.fLang}</dt>
            <dd className="m-0">
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

function TechSection({ t }) {
  return (
    <section
      id="tech"
      className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-[clamp(24px,5vw,72px)] min-[760px]:grid-cols-[minmax(210px,280px)_1fr]">
        <h2 className="font-condensed text-[clamp(32px,3.6vw,46px)] font-bold leading-[1.02] tracking-[-0.005em]">
          {t.hTech}
        </h2>

        <div className="grid grid-cols-1 gap-[clamp(24px,4vw,56px)] min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
          <div>
            <h3 className="mb-[14px] font-condensed text-xl font-semibold text-ink-soft">
              {t.tLang}
            </h3>

            <List
              items={["Java", "JavaScript", "HTML", "CSS (Tailwind)", "Bash"]}
            />
          </div>

          <div>
            <h3 className="mb-[14px] font-condensed text-xl font-semibold text-ink-soft">
              {t.tData}
            </h3>

            <List items={["SQL", "NoSQL (Firebase Firestore)"]} />
          </div>

          <div>
            <h3 className="mb-[14px] font-condensed text-xl font-semibold text-ink-soft">
              {t.tFw}
            </h3>

            <ul className="m-0 list-none p-0">
              <li className="flex items-center gap-3 border-t border-line py-3 font-condensed text-[34px] font-bold leading-[1.1]">
                <i className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
                React.js
              </li>
            </ul>

            <div className="mt-[26px]">
              <h3 className="mb-[14px] font-condensed text-xl font-semibold text-ink-soft">
                {t.tBasic}
              </h3>

              <ul className="m-0 list-none p-0">
                {["Express.js", "Spring Boot", "Git", t.tLinux].map((item) => (
                  <li
                    key={item}
                    className="border-t border-line py-[7px] text-base text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({ t }) {
  return (
    <section
      id="projekte"
      className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-[clamp(24px,5vw,72px)] min-[760px]:grid-cols-[minmax(210px,280px)_1fr]">
        <h2 className="font-condensed text-[clamp(32px,3.6vw,46px)] font-bold leading-[1.02] tracking-[-0.005em]">
          {t.hProj}
        </h2>

        <div>
          <ProjectCard
            title={t.p1t}
            subtitle={t.p1s}
            description={t.p1d}
            tags={["React", "Express.js"]}
          >
                  <a
          href="https://pos.edioula.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-md bg-paper-2 leading-none outline-none"
          aria-label={t.p1Preview}
        >
          <img
            src={posScreenshot}
            alt={t.p1ImageAlt}
            className="block h-auto w-full transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />

          <span className="absolute bottom-4 right-4 rounded bg-brand-red px-3 py-2 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
            {t.p1Preview} <span aria-hidden="true">↗</span>
          </span>
</a>
          </ProjectCard>

          <ProjectCard
            flip
            title={t.p2t}
            subtitle={t.p2s}
            description={t.p2d}
            tags={["Bash (CGI)", "HTML", "CSS", "Leaflet", "gnuplot", "LaTeX"]}
          >
            <ShipMap />
          </ProjectCard>

          <a
            href="https://github.com/dianssow"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline decoration-brand-red decoration-2 underline-offset-[5px] transition hover:text-brand-red"
          >
            {t.more}
          </a>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ time, title, description, current = false }) {
  return (
    <li
      className={[
        "relative pb-[26px] last:pb-0",
        "before:absolute before:-left-[29px] before:top-[7px] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-ink-soft before:bg-paper",
        current
          ? "before:border-brand-red before:bg-brand-red"
          : "",
      ].join(" ")}
    >
      <time className="block font-mono text-sm font-medium text-ink-soft">
        {time}
      </time>

      <strong className="block font-semibold">{title}</strong>

      <span className="text-base text-ink-soft">{description}</span>
    </li>
  );
}

function PathSection({ t }) {
  return (
    <section
      id="werdegang"
      className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-[clamp(24px,5vw,72px)] min-[760px]:grid-cols-[minmax(210px,280px)_1fr]">
        <h2 className="font-condensed text-[clamp(32px,3.6vw,46px)] font-bold leading-[1.02] tracking-[-0.005em]">
          {t.hPath}
        </h2>

        <div className="grid grid-cols-1 gap-[clamp(32px,5vw,72px)] min-[760px]:grid-cols-2">
          <div>
            <h3 className="mb-[18px] font-condensed text-2xl font-bold">
              {t.hExp}
            </h3>

            <div className="border-t border-line py-4">
              <strong className="block font-semibold">{t.e1t}</strong>
              <span className="text-base text-ink-soft">{t.e1d}</span>
            </div>

            <div className="border-t border-line py-4">
              <strong className="block font-semibold">{t.e2t}</strong>
              <span className="text-base text-ink-soft">{t.e2d}</span>
            </div>
          </div>

          <div>
            <h3 className="mb-[18px] font-condensed text-2xl font-bold">
              {t.hEdu}
            </h3>

            <ol className="m-0 ml-[22px] list-none border-l-2 border-line p-0">
              <TimelineItem
                time="2018 – 2021"
                title={t.s1t}
                description={t.s1d}
              />

              <TimelineItem
                time="2021 – 2022"
                title={t.s2t}
                description={t.s2d}
              />

              <TimelineItem
                current
                time={t.s3time}
                title={t.s3t}
                description={t.s3d}
              />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  return (
    <section
      id="kontakt"
      className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-condensed text-[clamp(32px,3.6vw,46px)] font-bold leading-[1.02] tracking-[-0.005em]">
          {t.hContact}
        </h2>

        <a
          href="mailto:mamadoudianssow2003@gmail.com"
          className="my-5 block break-all font-condensed text-[clamp(22px,4.6vw,50px)] font-bold leading-[1.1] underline decoration-brand-red decoration-[3px] underline-offset-8 transition hover:text-brand-red"
        >
          mamadoudianssow2003@gmail.com
        </a>

        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <a
            href="https://github.com/dianssow"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline decoration-brand-red decoration-2 underline-offset-[5px] transition hover:text-brand-red"
          >
            GitHub: dianssow
          </a>

          <span>{t.cPlace}</span>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio({
  t,
  lang,
  setLang,
  onReplayTop,
}) {
  return (
    <main id="portfolio">
      <Navbar t={t} lang={lang} setLang={setLang} />

     <IntroSection t={t} /> 
      <TechSection t={t} />
      <ProjectsSection t={t} />
      {/* <PathSection t={t} /> */} 
      <ContactSection t={t} /> 

      <Footer t={t} onReplayTop={onReplayTop} />
    </main>
  );
}
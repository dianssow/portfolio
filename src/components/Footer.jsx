export default function Footer({ t, onReplayTop }) {
  return (
    <footer className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-line px-[clamp(20px,5vw,64px)] py-7 text-[15px] text-ink-soft">
      <span>{t.foot}</span>

      <button
        type="button"
        onClick={onReplayTop}
        className="p-0 underline decoration-current underline-offset-4 transition hover:text-brand-red"
      >
        {t.replay}
      </button>
    </footer>
  );
}
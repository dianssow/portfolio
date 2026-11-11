

export function Tags({ items }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line px-3 py-[3px] text-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  children,
  flip = false,
}) {
  return (
    <article className="grid grid-cols-1 items-center gap-[clamp(24px,5vw,64px)] border-t border-line py-[clamp(32px,5vw,56px)] first:border-t-0 first:pt-0 min-[820px]:grid-cols-[1.05fr_1fr]">
      <div className={flip ? "min-[820px]:order-2" : ""}>{children}</div>

      <div>
        <h3 className="font-condensed text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.02] tracking-[-0.005em]">
          {title}
        </h3>

        <p className="mb-4 mt-1 text-[15px] text-ink-soft">{subtitle}</p>

        <p className="mb-[18px] max-w-[52ch]">{description}</p>

        <Tags items={tags} />
      </div>
    </article>
  );
}
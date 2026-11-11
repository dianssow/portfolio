export const ART_POS = `
<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="24" width="432" height="252" rx="8" fill="var(--color-paper)" stroke="var(--color-line)"/>
  <rect x="24" y="24" width="432" height="34" rx="8" fill="var(--color-ink)"/>
  <rect x="24" y="44" width="432" height="14" fill="var(--color-ink)"/>

  <circle cx="44" cy="41" r="5" fill="var(--color-brand-red)"/>
  <rect x="60" y="37" width="70" height="8" rx="4" fill="var(--color-paper)" opacity=".5"/>

  <g fill="var(--color-line)">
    <rect x="44" y="76" width="260" height="42" rx="5"/>
    <rect x="44" y="126" width="260" height="42" rx="5"/>
    <rect x="44" y="176" width="260" height="42" rx="5"/>
    <rect x="44" y="226" width="260" height="34" rx="5"/>
  </g>

  <g fill="var(--color-ink-soft)" opacity=".7">
    <rect x="54" y="86" width="22" height="22" rx="4"/>
    <rect x="88" y="90" width="90" height="7" rx="3.5"/>
    <rect x="88" y="102" width="50" height="6" rx="3"/>
    <rect x="256" y="92" width="34" height="8" rx="4"/>

    <rect x="54" y="136" width="22" height="22" rx="4"/>
    <rect x="88" y="140" width="110" height="7" rx="3.5"/>
    <rect x="88" y="152" width="60" height="6" rx="3"/>
    <rect x="256" y="142" width="34" height="8" rx="4"/>

    <rect x="54" y="186" width="22" height="22" rx="4"/>
    <rect x="88" y="190" width="76" height="7" rx="3.5"/>
    <rect x="88" y="202" width="44" height="6" rx="3"/>
    <rect x="256" y="192" width="34" height="8" rx="4"/>
  </g>

  <rect x="320" y="76" width="116" height="184" rx="6" fill="var(--color-paper-2)"/>

  <g fill="var(--color-ink-soft)" opacity=".7">
    <rect x="332" y="92" width="64" height="7" rx="3.5"/>
    <rect x="332" y="112" width="92" height="6" rx="3"/>
    <rect x="332" y="128" width="80" height="6" rx="3"/>
    <rect x="332" y="144" width="88" height="6" rx="3"/>
  </g>

  <rect x="332" y="222" width="92" height="28" rx="4" fill="var(--color-brand-red)"/>
</svg>
`;

export const ART_MAP = `
<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" id="mapSvg">
  <rect width="480" height="300" fill="var(--color-water)"/>

  <path
    d="M0 60H480M0 120H480M0 180H480M0 240H480M80 0V300M160 0V300M240 0V300M320 0V300M400 0V300"
    stroke="var(--color-line)"
    stroke-width="1"
    opacity=".7"
  />

  <path
    d="M0 0H210C180 36 128 56 96 106C64 148 34 160 0 170Z"
    fill="var(--color-land)"
  />

  <path
    d="M340 300C356 256 410 238 480 248V300Z"
    fill="var(--color-land)"
  />

  <path
    id="track"
    d="M40 232C120 204 164 124 252 132S382 194 440 84"
    fill="none"
    stroke="var(--color-ink-soft)"
    stroke-width="2"
    stroke-dasharray="3 6"
    stroke-linecap="round"
  />

  <g fill="var(--color-ink-soft)" opacity=".75">
    <circle cx="150" cy="88" r="3"/>
    <circle cx="310" cy="236" r="3"/>
    <circle cx="388" cy="140" r="3"/>
    <circle cx="108" cy="256" r="3"/>
  </g>

  <path
    id="ship"
    d="M0 -9 L7 8 L0 4 L-7 8 Z"
    fill="var(--color-brand-red)"
    transform="translate(252 132) rotate(90)"
  />
</svg>
`;
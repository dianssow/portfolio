import { sceneSvg } from "../lib/sceneSvg";

const AVATAR = {
  skin: "#9a6240",
  skinShade: "#7f4e31",
//   hair: "#15100e",
  hairShine: "#3a302b",
  hoodie: "#e6ecee",
  hoodieShade: "#c1cbd0",
  phones: "#e2231a",
};

const keyboardKeys = Array.from({ length: 70 }, (_, index) => index);

export default function Scene({ t }) {
  return (
    <div className="world">
      <div dangerouslySetInnerHTML={{ __html: sceneSvg(AVATAR) }} />

      <div className="laptop-wrap">
        <div className="laptop">
          <div className="shadow" />
          <div className="front" />

          <div className="deck">
            <div className="keys">
              {keyboardKeys.map((key) => (
                <i key={key} />
              ))}
            </div>

            <div className="trackpoint" />
            <div className="pad" />
          </div>

          <div className="lid">
            <div className="cover">
              <span>
                Think<b>Pad</b>
              </span>
            </div>

            <div className="screen" />
          </div>
        </div>
      </div>

      <div className="bubble">{t.bubble}</div>
    </div>
  );
}
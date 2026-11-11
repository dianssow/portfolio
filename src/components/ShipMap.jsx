import { useEffect, useRef } from "react";
import { ART_MAP } from "../lib/artSvg";

const prefersReducedMotion = window.matchMedia?.(
  "(prefers-reduced-motion: reduce)",
).matches;

export default function ShipMap() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper || prefersReducedMotion) {
      return undefined;
    }

    const svg = wrapper.querySelector("#mapSvg");
    const track = wrapper.querySelector("#track");
    const ship = wrapper.querySelector("#ship");

    if (!svg || !track || !ship) {
      return undefined;
    }

    const trackLength = track.getTotalLength();

    let distance = 0;
    let lastTimestamp = 0;
    let animationFrame = 0;
    let visible = false;

    function placeShip(position) {
      const current = track.getPointAtLength(position);
      const next = track.getPointAtLength(
        Math.min(position + 2, trackLength),
      );

      const angle =
        (Math.atan2(next.y - current.y, next.x - current.x) * 180) /
          Math.PI +
        90;

      ship.setAttribute(
        "transform",
        `translate(${current.x} ${current.y}) rotate(${angle})`,
      );
    }

    function animate(timestamp) {
      if (!visible) {
        return;
      }

      const elapsed = lastTimestamp ? timestamp - lastTimestamp : 16;

      lastTimestamp = timestamp;
      distance = (distance + elapsed * 0.035) % trackLength;

      placeShip(distance);
      animationFrame = window.requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;

      if (visible) {
        lastTimestamp = 0;
        animationFrame = window.requestAnimationFrame(animate);
      }
    });

    observer.observe(svg);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="overflow-hidden rounded-md bg-paper-2 leading-none [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
      dangerouslySetInnerHTML={{ __html: ART_MAP }}
    />
  );
}
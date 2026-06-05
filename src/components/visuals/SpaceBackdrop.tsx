import type { CSSProperties } from "react";

const stars = [
  { left: "6%", top: "13%", size: 1.5, opacity: 0.58, delay: "0s", duration: "6s", tone: "white" },
  { left: "14%", top: "29%", size: 2.2, opacity: 0.68, delay: "1.2s", duration: "7s", tone: "lime" },
  { left: "23%", top: "8%", size: 1.2, opacity: 0.48, delay: "2.4s", duration: "8s", tone: "white" },
  { left: "32%", top: "21%", size: 2.8, opacity: 0.72, delay: "0.8s", duration: "6.4s", tone: "white" },
  { left: "44%", top: "12%", size: 1.4, opacity: 0.46, delay: "3s", duration: "8.2s", tone: "amber" },
  { left: "57%", top: "25%", size: 2, opacity: 0.62, delay: "1.8s", duration: "7.4s", tone: "lime" },
  { left: "71%", top: "10%", size: 1.6, opacity: 0.52, delay: "2.1s", duration: "9s", tone: "white" },
  { left: "84%", top: "19%", size: 2.6, opacity: 0.7, delay: "0.4s", duration: "6.8s", tone: "amber" },
  { left: "93%", top: "34%", size: 1.3, opacity: 0.5, delay: "3.6s", duration: "8.6s", tone: "white" },

  { left: "9%", top: "48%", size: 1.7, opacity: 0.52, delay: "2.8s", duration: "7.8s", tone: "white" },
  { left: "18%", top: "62%", size: 2.5, opacity: 0.68, delay: "1.4s", duration: "6.6s", tone: "lime" },
  { left: "29%", top: "44%", size: 1.2, opacity: 0.42, delay: "4.1s", duration: "9.2s", tone: "white" },
  { left: "38%", top: "71%", size: 2, opacity: 0.6, delay: "0.9s", duration: "7.2s", tone: "amber" },
  { left: "52%", top: "56%", size: 1.5, opacity: 0.48, delay: "3.3s", duration: "8.8s", tone: "white" },
  { left: "64%", top: "47%", size: 2.7, opacity: 0.72, delay: "1.7s", duration: "6.2s", tone: "lime" },
  { left: "76%", top: "61%", size: 1.3, opacity: 0.46, delay: "4.4s", duration: "9s", tone: "white" },
  { left: "88%", top: "52%", size: 2.2, opacity: 0.62, delay: "2.5s", duration: "7.6s", tone: "white" },

  { left: "5%", top: "83%", size: 2, opacity: 0.58, delay: "1.1s", duration: "8.2s", tone: "amber" },
  { left: "21%", top: "91%", size: 1.3, opacity: 0.44, delay: "3.8s", duration: "9.4s", tone: "white" },
  { left: "35%", top: "86%", size: 2.4, opacity: 0.66, delay: "0.6s", duration: "6.8s", tone: "lime" },
  { left: "49%", top: "79%", size: 1.5, opacity: 0.48, delay: "2.9s", duration: "8.4s", tone: "white" },
  { left: "68%", top: "89%", size: 2.1, opacity: 0.62, delay: "1.9s", duration: "7.1s", tone: "white" },
  { left: "82%", top: "78%", size: 1.4, opacity: 0.46, delay: "4.7s", duration: "9.8s", tone: "amber" },
  { left: "95%", top: "92%", size: 2.3, opacity: 0.62, delay: "2.2s", duration: "7.7s", tone: "lime" },
] as const;

function SpaceBackdrop() {
  return (
    <div className="motiora-space-backdrop" aria-hidden="true">
      {stars.map((star, index) => {
        const style: CSSProperties = {
          left: star.left,
          top: star.top,
          width: star.size,
          height: star.size,
          opacity: star.opacity,
          animationDelay: star.delay,
          animationDuration: star.duration,
        };

        return (
          <span
            key={`${star.left}-${star.top}-${index}`}
            className={`motiora-random-star motiora-random-star-${star.tone}`}
            style={style}
          />
        );
      })}

      <span className="motiora-tail-star motiora-tail-star-1" />
      <span className="motiora-tail-star motiora-tail-star-2" />
      <span className="motiora-tail-star motiora-tail-star-3" />

      <span className="motiora-space-chip motiora-space-chip-1" />
      <span className="motiora-space-chip motiora-space-chip-2" />
      <span className="motiora-space-chip motiora-space-chip-3" />

      <span className="motiora-mini-orbit motiora-mini-orbit-1" />
      <span className="motiora-mini-orbit motiora-mini-orbit-2" />

      <span className="motiora-micro-rocket motiora-micro-rocket-1">
        <span />
      </span>
    </div>
  );
}

export default SpaceBackdrop;
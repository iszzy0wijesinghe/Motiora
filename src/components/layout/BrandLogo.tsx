import type { ImgHTMLAttributes } from "react";

import motioraLongDark from "../../assets/motiora-long-dark.webp";
import motioraLongLight from "../../assets/motiora-long-light.webp";
import motioraShortDark from "../../assets/motiora-short-dark.webp";
import motioraShortLight from "../../assets/motiora-short-light.webp";

type BrandLogoProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src"
> & {
  variant?: "long" | "short";
  appearance?: "light" | "dark";
};

const logoSources = {
  long: {
    light: motioraLongLight,
    dark: motioraLongDark,
  },
  short: {
    light: motioraShortLight,
    dark: motioraShortDark,
  },
} as const;

function BrandLogo({
  variant = "long",
  appearance = "light",
  alt = "Motiora",
  draggable = false,
  ...props
}: BrandLogoProps) {
  return (
    <img
      src={logoSources[variant][appearance]}
      alt={alt}
      draggable={draggable}
      {...props}
    />
  );
}

export default BrandLogo;
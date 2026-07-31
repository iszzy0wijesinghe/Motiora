import { Link } from "react-router";
import BrandLogo from "./BrandLogo";

function Logo() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center"
      aria-label="Motiora home"
    >
      <BrandLogo
        variant="long"
        appearance="light"
        className="h-auto w-[150px] object-contain transition duration-300 group-hover:scale-[1.02]"
      />
    </Link>
  );
}

export default Logo;
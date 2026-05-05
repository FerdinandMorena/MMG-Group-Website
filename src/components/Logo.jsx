import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 ${className}`}
      aria-label="MMG Building Maintenance & Management Home"
    >
      <div className="w-full h-12 sm:h-16 md:h-20 flex-shrink-0">
        <img
          src="/logo.jpeg"
          alt="MMG Logo"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </Link>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

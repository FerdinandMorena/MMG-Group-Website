import { Link } from "react-router-dom";

export default function Logo({ className = "", noText = false }) {
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

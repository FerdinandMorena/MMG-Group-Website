import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import PropTypes from "prop-types";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link
              to="/"
              className="flex items-center hover:text-accent transition-colors"
            >
              <Home size={16} className="mr-1" />
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={16} className="mx-2" />
              {item.url ? (
                <Link
                  to={item.url}
                  className="hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default Breadcrumb;

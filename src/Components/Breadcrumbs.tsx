import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: IconType;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  title?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, title }) => {
  return (
    <div className="relative overflow-hidden bg-blue-600 py-14">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320H0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20"
          >
            <ol className="flex flex-wrap items-center text-sm text-blue-50">
              
              {/* Home */}
              <li className="flex items-center">
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FaHome className="text-sm" />
                  Home
                </Link>
              </li>

              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                const Icon = item.icon;

                return (
                  <li key={index} className="flex items-center">
                    <FaChevronRight className="mx-3 text-[10px] text-blue-200" />

                    {isLast || !item.href ? (
                      <span
                        className="flex items-center gap-2 font-semibold text-white"
                        aria-current="page"
                      >
                        {Icon && <Icon className="text-sm" />}
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                      >
                        {Icon && <Icon className="text-sm" />}
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {title || items[items.length - 1]?.label}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
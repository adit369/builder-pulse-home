import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-webtoon-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-center w-16 h-10 bg-webtoon-green text-white font-bold text-lg rounded">
              WEB
              <br />
              TOON
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="webtoon-nav border-b-2 border-webtoon-green pb-4"
            >
              HOME
            </Link>
            <Link to="/originals" className="webtoon-nav pb-4">
              ORIGINALS
            </Link>
            <Link to="/canvas" className="webtoon-nav pb-4">
              CANVAS
            </Link>
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-webtoon-text hover:text-webtoon-green">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/my" className="webtoon-nav hidden md:block">
              MY
            </Link>
            <button className="md:hidden p-2 text-webtoon-text">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

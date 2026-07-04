import { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { useRoute, useNavigate, routeToHash, type Route } from '../router';

const NAV_LINKS: { label: string; route: Route }[] = [
  { label: 'Home', route: { name: 'home' } },
  { label: 'Shop', route: { name: 'shop' } },
  { label: 'About', route: { name: 'about' } },
  { label: 'Contact', route: { name: 'contact' } },
  { label: 'FAQ', route: { name: 'faq' } },
];

export default function Navbar() {
  const route = useRoute();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [route]);

  const isActive = (r: Route) => routeToHash(route) === routeToHash(r);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate({ name: 'shop', q: query.trim() });
      setQuery('');
      setSearchOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-royal-950/95 backdrop-blur-md shadow-lg shadow-royal-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-ykk">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-royal-100 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop nav left */}
          <nav className="hidden flex-1 items-center gap-8 md:flex">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.route)}
                className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                  isActive(link.route)
                    ? 'text-gold-300'
                    : 'text-royal-200 hover:text-gold-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Logo center — large, bold, first thing noticed */}
          <button
            onClick={() => navigate({ name: 'home' })}
            className="flex flex-1 items-center justify-center md:flex-none"
          >
            <span className="font-serif text-3xl font-bold tracking-tight text-royal-50 md:text-4xl">
              <span className="text-gold-400">Y</span>KK
            </span>
            <span className="ml-2 mt-2 hidden text-[10px] font-medium uppercase tracking-widest text-gold-400 sm:inline">
              Clothing
            </span>
          </button>

          {/* Desktop nav right */}
          <nav className="hidden flex-1 items-center justify-end gap-8 md:flex">
            {NAV_LINKS.slice(2).map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.route)}
                className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                  isActive(link.route)
                    ? 'text-gold-300'
                    : 'text-royal-200 hover:text-gold-300'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="text-royal-200 transition-colors hover:text-gold-300"
            >
              <Search size={18} />
            </button>
          </nav>

          {/* Mobile search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-royal-100 md:hidden"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="animate-fade-in border-t border-royal-700 py-4">
            <form onSubmit={submitSearch} className="flex items-center gap-3">
              <Search size={18} className="text-royal-400" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for dresses, tops, shoes..."
                className="flex-1 bg-transparent text-sm text-royal-50 placeholder-royal-400 outline-none"
              />
              <button
                type="submit"
                className="text-xs font-medium uppercase tracking-widest text-gold-300 hover:text-gold-200"
              >
                Go
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="animate-fade-in border-t border-royal-800 bg-royal-950 md:hidden">
          <nav className="container-ykk flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.route)}
                className={`py-3 text-left text-sm font-medium uppercase tracking-widest transition-colors ${
                  isActive(link.route)
                    ? 'text-gold-300'
                    : 'text-royal-200 hover:text-gold-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

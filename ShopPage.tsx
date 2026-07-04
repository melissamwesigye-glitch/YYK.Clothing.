import { useMemo, useState, useEffect } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useNavigate, type Route } from '../router';
import { PRODUCTS, CATEGORIES, type Category, type Condition } from '../data';
import ProductCard from '../components/ProductCard';

interface Props {
  category?: string;
  query?: string;
}

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'name', label: 'A–Z' },
] as const;

type SortId = (typeof SORT_OPTIONS)[number]['id'];

const CONDITIONS: Condition[] = ['New', 'Preloved'];

export default function ShopPage({ category, query }: Props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState(query || '');
  const [sort, setSort] = useState<SortId>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [conditionFilter, setConditionFilter] = useState<Condition | 'all'>('all');

  useEffect(() => {
    setSearch(query || '');
  }, [query]);

  const activeCategory = category as Category | undefined;

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (conditionFilter !== 'all') {
      list = list.filter((p) => p.condition === conditionFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }
    if (sort === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [activeCategory, search, sort, conditionFilter]);

  const selectCategory = (cat?: string) => {
    const route: Route = cat
      ? { name: 'shop', category: cat }
      : { name: 'shop' };
    navigate(route);
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ name: 'shop', q: search.trim() || undefined });
  };

  const activeCatLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label;

  return (
    <div className="pt-16 md:pt-20">
      {/* Page header */}
      <div className="border-b border-royal-800 bg-royal-900/40">
        <div className="container-ykk py-12 lg:py-16">
          <p className="eyebrow">Collection</p>
          <h1 className="mt-3 section-title">
            {activeCatLabel || 'All Products'}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-royal-200">
            {activeCatLabel
              ? CATEGORIES.find((c) => c.id === activeCategory)?.description
              : 'Browse our full collection. Order easily on WhatsApp — pricing and availability confirmed with you directly.'}
          </p>
        </div>
      </div>

      <div className="container-ykk py-10 lg:py-14">
        {/* Search + sort bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <form onSubmit={submitSearch} className="flex flex-1 items-center gap-2 border-b border-royal-700 pb-2 sm:max-w-md">
            <Search size={18} className="text-royal-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent text-sm text-royal-50 placeholder-royal-400 outline-none"
            />
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  navigate({ name: 'shop', category });
                }}
                aria-label="Clear search"
              >
                <X size={16} className="text-royal-400" />
              </button>
            )}
          </form>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-royal-200 lg:hidden"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortId)}
              className="rounded-lg border border-royal-700 bg-royal-900 px-3 py-2 text-xs font-medium uppercase tracking-widest text-royal-200 outline-none focus:border-gold-400"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden w-52 shrink-0 lg:block">
            <h3 className="text-xs font-medium uppercase tracking-widest text-gold-400">
              Categories
            </h3>
            <ul className="mt-4 space-y-1">
              <li>
                <button
                  onClick={() => selectCategory(undefined)}
                  className={`block w-full py-2 text-left text-sm transition-colors ${
                    !activeCategory
                      ? 'font-medium text-gold-300'
                      : 'text-royal-300 hover:text-gold-300'
                  }`}
                >
                  All Products
                </button>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => selectCategory(cat.id)}
                    className={`block w-full py-2 text-left text-sm transition-colors ${
                      activeCategory === cat.id
                        ? 'font-medium text-gold-300'
                        : 'text-royal-300 hover:text-gold-300'
                    }`}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Condition filter */}
            <h3 className="mt-8 text-xs font-medium uppercase tracking-widest text-gold-400">
              Condition
            </h3>
            <ul className="mt-4 space-y-1">
              <li>
                <button
                  onClick={() => setConditionFilter('all')}
                  className={`block w-full py-2 text-left text-sm transition-colors ${
                    conditionFilter === 'all'
                      ? 'font-medium text-gold-300'
                      : 'text-royal-300 hover:text-gold-300'
                  }`}
                >
                  All
                </button>
              </li>
              {CONDITIONS.map((cond) => (
                <li key={cond}>
                  <button
                    onClick={() => setConditionFilter(cond)}
                    className={`block w-full py-2 text-left text-sm transition-colors ${
                      conditionFilter === cond
                        ? 'font-medium text-gold-300'
                        : 'text-royal-300 hover:text-gold-300'
                    }`}
                  >
                    {cond}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Mobile filter drawer */}
          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-royal-950/60"
                onClick={() => setShowFilters(false)}
              />
              <div className="absolute left-0 top-0 h-full w-72 bg-royal-950 p-6 animate-fade-in">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xs font-medium uppercase tracking-widest text-gold-400">
                    Filters
                  </h3>
                  <button onClick={() => setShowFilters(false)} aria-label="Close">
                    <X size={18} className="text-royal-200" />
                  </button>
                </div>
                <h4 className="text-xs font-medium uppercase tracking-widest text-gold-400">
                  Categories
                </h4>
                <ul className="mt-3 space-y-1">
                  <li>
                    <button
                      onClick={() => {
                        selectCategory(undefined);
                        setShowFilters(false);
                      }}
                      className={`block w-full py-2.5 text-left text-sm ${
                        !activeCategory ? 'font-medium text-gold-300' : 'text-royal-300'
                      }`}
                    >
                      All Products
                    </button>
                  </li>
                  {CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          selectCategory(cat.id);
                          setShowFilters(false);
                        }}
                        className={`block w-full py-2.5 text-left text-sm ${
                          activeCategory === cat.id
                            ? 'font-medium text-gold-300'
                            : 'text-royal-300'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <h4 className="mt-6 text-xs font-medium uppercase tracking-widest text-gold-400">
                  Condition
                </h4>
                <ul className="mt-3 space-y-1">
                  <li>
                    <button
                      onClick={() => setConditionFilter('all')}
                      className={`block w-full py-2.5 text-left text-sm ${
                        conditionFilter === 'all' ? 'font-medium text-gold-300' : 'text-royal-300'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {CONDITIONS.map((cond) => (
                    <li key={cond}>
                      <button
                        onClick={() => setConditionFilter(cond)}
                        className={`block w-full py-2.5 text-left text-sm ${
                          conditionFilter === cond ? 'font-medium text-gold-300' : 'text-royal-300'
                        }`}
                      >
                        {cond}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <p className="mb-6 text-xs uppercase tracking-widest text-royal-400">
              {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
            </p>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-royal-100">No products found</p>
                <p className="mt-2 text-sm text-royal-400">
                  Try a different search or category.
                </p>
                <button
                  onClick={() => {
                    setSearch('');
                    setConditionFilter('all');
                    navigate({ name: 'shop' });
                  }}
                  className="mt-6 btn-outline-gold"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

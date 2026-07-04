import { ArrowRight, Sparkles, Tag, Recycle, Heart, Globe, Smile, Package, Instagram, Truck } from 'lucide-react';
import { useNavigate } from '../router';
import { PRODUCTS, COLLECTIONS, GALLERY_IMAGES, BUSINESS } from '../data';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const navigate = useNavigate();
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="YKK Clothing hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-950/70 via-royal-950/50 to-royal-950/90" />
        </div>

        <div className="relative flex h-full items-center">
          <div className="container-ykk">
            <div className="max-w-2xl animate-fade-up">
              <p className="text-xs font-medium uppercase tracking-widest text-gold-400">
                South African Online Fashion
              </p>
              <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.05] text-royal-50 sm:text-6xl lg:text-7xl">
                Affordable Fashion
                <br />
                <span className="text-gold-400">for Everyone</span>
              </h1>
              <p className="mt-5 font-serif text-xl italic text-royal-100 sm:text-2xl">
                London Imports • Wholesale Clothing • Preloved Fashion
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <button
                  onClick={() => navigate({ name: 'shop' })}
                  className="btn-gold"
                >
                  Shop Now <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate({ name: 'about' })}
                  className="btn-outline-gold"
                >
                  Our Story
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-px bg-gold-400/50" />
        </div>
      </section>

      {/* Intro */}
      <section className="container-ykk py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Welcome to YKK Clothing</p>
          <h2 className="mt-4 section-title">
            Quality fashion, made affordable
          </h2>
          <div className="mt-6 gold-divider" />
          <p className="mt-6 text-base leading-relaxed text-royal-200">
            YKK Clothing is a South African online clothing business on a mission to make
            quality fashion affordable for everyone. Through London Imports, wholesale
            sourcing, and carefully selected preloved pieces, we bring you stylish options
            for every budget — with friendly service and delivery across the country.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-royal-900/40 py-20 lg:py-28">
        <div className="container-ykk">
          <div className="mb-12 text-center">
            <p className="eyebrow">Our Collections</p>
            <h2 className="mt-3 section-title">Featured Collections</h2>
            <div className="mt-6 gold-divider" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {COLLECTIONS.map((col, i) => (
              <button
                key={col.id}
                onClick={() => navigate({ name: 'shop', category: col.id })}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={col.image}
                  alt={col.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/90 via-royal-950/30 to-transparent transition-colors group-hover:from-royal-950/95" />
                <div className="absolute bottom-0 left-0 p-6 text-left">
                  <h3 className="font-serif text-2xl font-medium text-royal-50">
                    {col.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-royal-200">
                    {col.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-gold-300 opacity-0 transition-opacity group-hover:opacity-100">
                    Shop collection <ArrowRight size={12} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-ykk py-20 lg:py-28">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow">Curated for you</p>
            <h2 className="mt-3 section-title">Featured Products</h2>
          </div>
          <button
            onClick={() => navigate({ name: 'shop' })}
            className="hidden btn-ghost sm:inline-flex"
          >
            View all <ArrowRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center sm:hidden">
          <button
            onClick={() => navigate({ name: 'shop' })}
            className="btn-outline-gold"
          >
            View all products <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* Why shop with us */}
      <section className="bg-royal-900/40 py-20 lg:py-28">
        <div className="container-ykk">
          <div className="mb-14 text-center">
            <p className="eyebrow">The YKK difference</p>
            <h2 className="mt-3 section-title">Why Shop With YKK Clothing?</h2>
            <div className="mt-6 gold-divider" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Tag, title: 'Affordable Fashion', text: 'Quality styles at prices that make sense for everyone.' },
              { icon: Globe, title: 'Imported Brands', text: 'Authentic London branded clothing imported directly to South Africa.' },
              { icon: Package, title: 'Wholesale Prices', text: 'Bulk-sourced clothing at unbeatable prices for customers and resellers.' },
              { icon: Sparkles, title: 'Quality Clothing', text: 'Every piece is carefully checked for quality and condition.' },
              { icon: Recycle, title: 'Sustainable Shopping', text: 'Our preloved collection gives great clothing a second life.' },
              { icon: Smile, title: 'Friendly Service', text: 'Order on WhatsApp and chat with a real person who cares.' },
              { icon: Heart, title: 'New Stock Added Regularly', text: 'Fresh arrivals keep our collections exciting and up to date.' },
              { icon: Truck, title: 'Flexible Delivery', text: 'Collection, courier anywhere in SA, or Uber/Bolt Package in Cape Town.' },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="animate-fade-up text-center"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/30 bg-royal-800/50">
                  <feature.icon size={22} className="text-gold-400" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-royal-50">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-royal-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram gallery */}
      <section className="bg-royal-900/40 py-20 lg:py-28">
        <div className="container-ykk">
          <div className="mb-12 text-center">
            <p className="eyebrow">Follow our journey</p>
            <h2 className="mt-3 section-title">@ykk.clothing</h2>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-royal-200 transition-colors hover:text-gold-300"
            >
              <Instagram size={16} /> Follow us on Instagram
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {GALLERY_IMAGES.map((img, i) => (
              <a
                key={i}
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl animate-scale-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={img}
                  alt="Instagram post"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-royal-950/0 transition-colors group-hover:bg-royal-950/50">
                  <Instagram
                    size={22}
                    className="text-gold-300 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

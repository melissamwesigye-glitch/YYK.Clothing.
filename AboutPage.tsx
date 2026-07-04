import { Globe, Package, Recycle, Heart, Sparkles, Smile, Tag, Truck } from 'lucide-react';
import { useNavigate } from '../router';
import { COLLECTIONS } from '../data';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="About YKK Clothing"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-royal-950/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-up">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-400">
              Our Story
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-royal-50 sm:text-5xl lg:text-6xl">
              About <span className="text-gold-400">YKK</span> Clothing
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-ykk py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-center">Who we are</p>
          <h2 className="mt-4 section-title text-center">
            Affordable, quality fashion for everyone
          </h2>
          <div className="mt-6 gold-divider" />
          <div className="mt-8 space-y-6 text-base leading-relaxed text-royal-200">
            <p>
              YKK Clothing is a proudly South African online clothing business on a
              mission to make quality fashion affordable for everyone. We believe that
              looking great should never be a luxury — it should be accessible, enjoyable,
              and within reach for every person who loves style.
            </p>
            <p>
              We offer three unique collections, each designed to give you the best value
              for your money. Whether you're after authentic international brands, affordable
              wholesale pieces, or sustainable preloved fashion, YKK Clothing has something
              for you — all delivered with friendly, personal service.
            </p>
            <p>
              Every order is handled with care. When you shop with us, you're not navigating
              a faceless checkout — you're chatting with a real person on WhatsApp who helps
              you find the right size, confirms availability and pricing, and arranges
              delivery that suits you. That's the YKK way.
            </p>
          </div>
        </div>
      </section>

      {/* Three collections */}
      <section className="bg-royal-900/40 py-20 lg:py-28">
        <div className="container-ykk">
          <div className="mb-14 text-center">
            <p className="eyebrow">What we offer</p>
            <h2 className="mt-3 section-title">Our Three Collections</h2>
            <div className="mt-6 gold-divider" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {COLLECTIONS.map((col, i) => {
              const icon = col.id === 'london-imports' ? Globe : col.id === 'wholesale' ? Package : Recycle;
              return (
                <div
                  key={col.id}
                  className="animate-fade-up overflow-hidden rounded-2xl border border-royal-700/50 bg-royal-900/50"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={col.image}
                      alt={col.label}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-royal-800/50">
                      {(() => {
                        const Icon = icon;
                        return <Icon size={22} className="text-gold-400" />;
                      })()}
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-medium text-royal-50">
                      {col.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-royal-300">
                      {col.description}
                    </p>
                    <button
                      onClick={() => navigate({ name: 'shop', category: col.id })}
                      className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold-300 transition-colors hover:text-gold-200"
                    >
                      Shop {col.shortLabel} →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container-ykk py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our mission</p>
          <h2 className="mt-4 section-title">Quality fashion, affordable for everyone</h2>
          <div className="mt-6 gold-divider" />
          <p className="mt-6 text-base leading-relaxed text-royal-200">
            We're passionate about affordability, quality, and sustainability. By giving
            preloved clothing a second life, sourcing wholesale for unbeatable prices, and
            importing authentic London brands, we make it possible for everyone to look
            and feel their best — without overspending. We're committed to excellent
            customer service and building a community of happy, stylish customers across
            South Africa.
          </p>
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
              { icon: Globe, title: 'Imported Brands', text: 'Authentic London branded clothing imported to South Africa.' },
              { icon: Package, title: 'Wholesale Prices', text: 'Bulk-sourced clothing at unbeatable prices for all.' },
              { icon: Sparkles, title: 'Quality Clothing', text: 'Every piece is carefully checked for quality and condition.' },
              { icon: Recycle, title: 'Sustainable Shopping', text: 'Our preloved collection gives great clothing a second life.' },
              { icon: Smile, title: 'Friendly Service', text: 'Order on WhatsApp and chat with a real person who cares.' },
              { icon: Heart, title: 'New Stock Added Regularly', text: 'Fresh arrivals keep our collections exciting and current.' },
              { icon: Truck, title: 'Flexible Delivery', text: 'Collection, courier anywhere in SA, or Uber/Bolt in Cape Town.' },
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

      {/* CTA */}
      <section className="container-ykk py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Ready to find your next favourite piece?</h2>
          <p className="mt-4 text-base text-royal-200">
            Browse our collections and order effortlessly on WhatsApp.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={() => navigate({ name: 'shop' })}
              className="btn-gold"
            >
              Shop the Collection
            </button>
            <button
              onClick={() => navigate({ name: 'contact' })}
              className="btn-outline-gold"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

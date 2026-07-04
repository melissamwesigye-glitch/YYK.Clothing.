import { Instagram, Facebook, Send } from 'lucide-react';
import { useNavigate, type Route } from '../router';
import { BUSINESS, CATEGORIES } from '../data';
import { whatsappLink } from '../utils';
import { useState } from 'react';

const FOOTER_LINKS: { label: string; route: Route }[] = [
  { label: 'About YKK Clothing', route: { name: 'about' } },
  { label: 'Contact', route: { name: 'contact' } },
  { label: 'FAQ', route: { name: 'faq' } },
  { label: 'Privacy Policy', route: { name: 'privacy' } },
  { label: 'Terms & Conditions', route: { name: 'terms' } },
];

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="border-t border-royal-800 bg-royal-950 text-royal-100">
      {/* Newsletter */}
      <div className="border-b border-royal-800">
        <div className="container-ykk py-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Stay in style</p>
            <h3 className="mt-3 font-serif text-2xl font-medium text-royal-50 sm:text-3xl">
              Join our newsletter
            </h3>
            <p className="mt-3 text-sm text-royal-300">
              Be the first to know about new arrivals, London Imports, and exclusive offers.
            </p>
            <form
              onSubmit={subscribe}
              className="mx-auto mt-6 flex max-w-md items-center gap-2 border-b border-royal-700 pb-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent text-sm text-royal-50 placeholder-royal-400 outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gold-300 transition-colors hover:text-gold-200"
              >
                Subscribe <Send size={14} />
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 animate-fade-in text-sm text-gold-300">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-ykk py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-baseline">
              <span className="font-serif text-3xl font-bold text-royal-50">
                <span className="text-gold-400">Y</span>KK
              </span>
              <span className="ml-2 text-[10px] font-medium uppercase tracking-widest text-gold-400">
                Clothing
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-royal-300">
              {BUSINESS.tagline}. London Imports, Wholesale Clothing, and Preloved Fashion — quality made affordable for everyone.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-royal-300 transition-colors hover:text-gold-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-royal-300 transition-colors hover:text-gold-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop categories */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-gold-400">
              Shop Categories
            </h4>
            <ul className="mt-4 space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigate({ name: 'shop', category: cat.id })}
                    className="text-sm text-royal-300 transition-colors hover:text-gold-300"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-gold-400">
              About YKK Clothing
            </h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.route)}
                    className="text-sm text-royal-300 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-gold-400">
              WhatsApp Contact
            </h4>
            <p className="mt-4 text-sm text-royal-300">
              Order or enquire directly on WhatsApp — it's the fastest way to reach us.
            </p>
            <a
              href={whatsappLink(`Hi ${BUSINESS.name}!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
            >
              {BUSINESS.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-royal-800">
        <div className="container-ykk py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-royal-400 sm:flex-row">
            <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
            <p className="flex gap-4">
              <button
                onClick={() => navigate({ name: 'privacy' })}
                className="transition-colors hover:text-gold-300"
              >
                Privacy
              </button>
              <button
                onClick={() => navigate({ name: 'terms' })}
                className="transition-colors hover:text-gold-300"
              >
                Terms
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

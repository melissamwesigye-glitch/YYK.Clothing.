import { useState } from 'react';
import { MessageCircle, Send, Clock, Truck, Package, MapPin } from 'lucide-react';
import { BUSINESS } from '../data';
import { whatsappLink } from '../utils';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi ${BUSINESS.name}!\n\nName: ${form.name}\nSubject: ${form.subject}\n\n${form.message}`;
    window.open(whatsappLink(msg), '_blank');
    setSent(true);
    setForm({ name: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-royal-800 bg-royal-900/40">
        <div className="container-ykk py-12 lg:py-16">
          <p className="eyebrow">We'd love to hear from you</p>
          <h1 className="mt-3 section-title">Get in Touch</h1>
          <p className="mt-3 max-w-xl text-sm text-royal-200">
            YKK Clothing is a fully online business. The best way to reach us is WhatsApp — we typically respond within a few hours.
          </p>
        </div>
      </div>

      <div className="container-ykk py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* WhatsApp contact */}
          <div>
            <h2 className="font-serif text-2xl font-medium text-royal-50">
              Contact Us on WhatsApp
            </h2>
            <p className="mt-3 text-sm text-royal-200">
              WhatsApp is the only way to reach us — and it's the fastest. Tap below to start a chat about products, sizing, availability, or delivery.
            </p>

            <a
              href={whatsappLink(`Hi ${BUSINESS.name}!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center gap-4 rounded-2xl border border-royal-700/50 bg-royal-900/50 p-6 transition-all hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15">
                <MessageCircle size={26} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gold-400">
                  WhatsApp
                </p>
                <p className="mt-1 text-lg font-semibold text-royal-50 group-hover:text-[#25D366]">
                  {BUSINESS.whatsappDisplay}
                </p>
              </div>
            </a>

            {/* Business hours */}
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-royal-700/50 bg-royal-900/50 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal-800/50">
                <Clock size={22} className="text-gold-400" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gold-400">
                  Business Hours
                </p>
                <p className="mt-1 text-sm font-medium text-royal-50">
                  Mon–Fri: 9am–6pm · Sat: 9am–3pm
                </p>
              </div>
            </div>

            {/* Delivery options */}
            <h3 className="mt-10 font-serif text-xl font-medium text-royal-50">
              Delivery Options
            </h3>
            <p className="mt-2 text-sm text-royal-300">
              Choose your preferred delivery method when ordering on WhatsApp:
            </p>
            <div className="mt-5 space-y-3">
              {[
                { icon: MapPin, title: 'Collection', text: 'Collection where arranged.' },
                { icon: Truck, title: 'Courier', text: 'Courier delivery anywhere in South Africa.' },
                { icon: Package, title: 'Uber / Bolt Package', text: 'Uber Package or Bolt Package within Cape Town.' },
              ].map((opt) => (
                <div
                  key={opt.title}
                  className="flex items-start gap-3 rounded-xl border border-royal-700/50 bg-royal-900/40 p-4"
                >
                  <opt.icon size={20} className="mt-0.5 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-sm font-medium text-royal-50">{opt.title}</p>
                    <p className="mt-0.5 text-sm text-royal-300">{opt.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="font-serif text-2xl font-medium text-royal-50">
              Send us a message
            </h2>
            <p className="mt-3 text-sm text-royal-200">
              Fill in the form below and we'll continue the conversation on WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="label-ykk" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-ykk"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="label-ykk" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="input-ykk"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="label-ykk" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-ykk resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button type="submit" className="btn-gold w-full">
                Send via WhatsApp <Send size={14} />
              </button>
              {sent && (
                <p className="animate-fade-in text-center text-sm text-gold-300">
                  Opening WhatsApp with your message...
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

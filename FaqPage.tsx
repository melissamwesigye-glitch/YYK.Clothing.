import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS } from '../data';
import { whatsappLink } from '../utils';
import { useNavigate } from '../router';

export default function FaqPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-royal-800 bg-royal-900/40">
        <div className="container-ykk py-12 lg:py-16">
          <p className="eyebrow">Help & Support</p>
          <h1 className="mt-3 section-title">Frequently Asked Questions</h1>
          <p className="mt-3 max-w-xl text-sm text-royal-200">
            Everything you need to know about ordering, delivery, and our collections. Can't find your answer? Reach out on WhatsApp.
          </p>
        </div>
      </div>

      <div className="container-ykk py-14 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-royal-800 border-y border-royal-800">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif text-lg font-medium text-royal-50">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-gold-400">
                    {open === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i
                      ? 'grid-rows-[1fr] pb-5 opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-royal-200">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 rounded-2xl border border-royal-700/50 bg-royal-900/50 p-8 text-center">
            <h2 className="font-serif text-2xl font-medium text-royal-50">
              Still have questions?
            </h2>
            <p className="mt-3 text-sm text-royal-200">
              Our team is ready to help. Chat with us on WhatsApp for a quick response.
            </p>
            <a
              href={whatsappLink(`Hi ${BUSINESS.name}! I have a question.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#1da851]"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <button
              onClick={() => navigate({ name: 'contact' })}
              className="ml-3 btn-ghost"
            >
              Or contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS } from '../data';
import { whatsappLink } from '../utils';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const message = `Hi ${BUSINESS.name}! I have a question about your products.`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="animate-fade-up w-72 overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{BUSINESS.name}</p>
                <p className="text-xs text-green-200">Typically replies quickly</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 transition-colors hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
          <div className="bg-[#ECE5DD] p-4">
            <div className="rounded-lg rounded-tl-none bg-white p-3 text-sm text-gray-800 shadow-sm">
              Hi there! How can we help you today? Tap below to chat with us on WhatsApp.
            </div>
          </div>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#25D366] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
          >
            Start Chat
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}

import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '../data';
import { whatsappLink } from '../utils';

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');

  const order = () => {
    const msg = `Hi YKK Clothing! I'd like to order:\n\n• ${product.name}\n• Size: ${selectedSize}\n• Condition: ${product.condition}\n\nPlease confirm availability, pricing, and delivery options.`;
    window.open(whatsappLink(msg), '_blank');
  };

  return (
    <div
      className="card-ykk animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-royal-800">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${
            product.condition === 'New'
              ? 'bg-gold-400 text-royal-950'
              : 'bg-royal-500 text-royal-50'
          }`}
        >
          {product.condition}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-serif text-lg font-medium text-royal-50">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-royal-300">
          {product.description}
        </p>

        {/* Sizes */}
        <div className="mt-4">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-royal-400">
            Size
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[2.25rem] rounded-lg border px-2 py-1.5 text-xs transition-all ${
                  selectedSize === size
                    ? 'border-gold-400 bg-gold-400 text-royal-950'
                    : 'border-royal-600 text-royal-200 hover:border-gold-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={order}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-[#1da851] hover:shadow-lg hover:shadow-[#25D366]/20"
        >
          <ShoppingBag size={14} />
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
}

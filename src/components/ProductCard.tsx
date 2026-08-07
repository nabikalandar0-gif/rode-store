import { useState } from 'react';
import { ArrowUpLeft } from 'lucide-react';
import type { Product } from '@/data/products';
import { useInquiry } from '@/context/inquiry-context';

export function ProductCard({ product }: { product: Product }) {
  const [imageFailed, setImageFailed] = useState(false);
  const { setSelectedProduct } = useInquiry();

  return (
    <div className="group border border-ink-line bg-ink-soft/50 p-5 transition-colors hover:border-gold/40">
      <div className="mb-5 flex aspect-square items-center justify-center overflow-hidden rounded bg-ink">
        {!imageFailed ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <span className="font-kalameh text-2xl font-black tracking-widest text-gold/40">
            RØDE
          </span>
        )}
      </div>

      <p className="text-[11px] font-bold tracking-widest text-gold">
        {product.category === 'microphone' ? 'میکروفون' : 'هدفون'}
      </p>
      <h3 className="mt-1.5 font-kalameh text-lg font-bold text-paper">{product.name}</h3>
      <p className="mt-1 text-sm text-muted">{product.tagline}</p>
      <p className="mt-3 text-xs leading-6 text-muted/80">{product.spec}</p>

      <div className="mt-5 flex items-center justify-between border-t border-ink-line pt-4">
        <span className="text-sm font-bold text-paper">{product.price}</span>
        <a
          href="#consult"
          onClick={() => setSelectedProduct(product.name)}
          className="flex items-center gap-1.5 text-xs font-bold text-gold transition-colors hover:text-gold-bright"
        >
          مشاوره برای خرید
          <ArrowUpLeft className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

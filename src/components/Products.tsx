import { useState } from 'react';
import { products, type ProductCategory } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { cn } from '@/lib/utils';

const filters: { label: string; value: ProductCategory | 'all' }[] = [
  { label: 'همه محصولات', value: 'all' },
  { label: 'میکروفون', value: 'microphone' },
  { label: 'هدفون', value: 'headphone' },
];

export function Products() {
  const [active, setActive] = useState<ProductCategory | 'all'>('all');
  const visible = active === 'all' ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="border-b border-ink-line py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-gold">محصولات</p>
            <h2 className="mt-4 max-w-md font-kalameh text-3xl font-black leading-tight text-paper md:text-4xl">
              دو دسته، یک استاندارد
            </h2>
          </div>

          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={cn(
                  'rounded-full border px-5 py-2.5 text-sm font-bold transition-colors',
                  active === f.value
                    ? 'border-gold bg-gold text-ink'
                    : 'border-ink-line text-muted hover:border-gold/40 hover:text-paper',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

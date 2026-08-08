import { Home, Mic2, BookOpen, MessageCircle } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const navItems = [
  { title: 'خانه', href: '#hero', icon: Home },
  { title: 'محصولات', href: '#products', icon: Mic2 },
  { title: 'درباره ما', href: '#story', icon: BookOpen },
  { title: 'مشاوره و تماس', href: '#consult', icon: MessageCircle },
];

export function Nav() {
  return (
    <>
      {/* Top Bar - مشکی با متن زرد و سفید */}
      <div className="fixed inset-x-0 top-0 z-50 bg-black">
        <div className="mx-auto flex h-16 max-w-wrap items-center justify-end px-6 md:px-10">
          <a href="#hero" className="flex flex-col items-end leading-none">
            <span className="font-kalameh text-lg font-black tracking-wide text-[#F5C518]">
              رود تهران
            </span>
            <span className="mt-0.5 text-[10px] font-medium tracking-widest text-white">
              فروشگاه رسمی RØDE
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Dock */}
      <nav
        className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
        aria-label="پیمایش اصلی"
      >
        <Dock>
          {navItems.map((item) => (
            <DockItem key={item.href} className="aspect-square">
              {/* لینک شفاف روی کل آیتم */}
              <a
                href={item.href}
                className="absolute inset-0 z-10"
                aria-label={item.title}
              />
              <DockIcon>
                <item.icon className="h-full w-full" strokeWidth={1.75} />
              </DockIcon>
              <DockLabel>{item.title}</DockLabel>
            </DockItem>
          ))}
        </Dock>
      </nav>
    </>
  );
}
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
      <div className="fixed top-6 right-6 z-50 md:right-8">
        <a href="#hero" className="flex flex-col items-end leading-none">
          <span className="font-kalameh text-lg font-black tracking-wide text-paper">
            رود<span className="text-gold"> تهران</span>
          </span>
          <span className="mt-0.5 text-[10px] font-medium tracking-widest text-muted">
            فروشگاه رسمی RØDE
          </span>
        </a>
      </div>

      <nav className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4" aria-label="پیمایش اصلی">
        <Dock>
          {navItems.map((item) => (
            <DockItem key={item.href} className="aspect-square">
              <a href={item.href} className="flex h-full w-full items-center justify-center">
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>
                  <item.icon className="h-full w-full" strokeWidth={1.75} />
                </DockIcon>
              </a>
            </DockItem>
          ))}
        </Dock>
      </nav>
    </>
  );
}

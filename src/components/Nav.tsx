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
      <div className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b text-center py-3">
        <h1 className="font-bold">رود تهران</h1>
        <p className="text-sm text-gray-500">فروشگاه رسمی RØDE</p>
      </div>

      <nav
        className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
        aria-label="پیمایش اصلی"
      >
        <Dock>
          {navItems.map((item) => (
            <DockItem key={item.href} className="aspect-square">
              <a href={item.href} className="flex flex-col items-center justify-center">
                <DockIcon>
                  <item.icon className="h-full w-full" strokeWidth={1.75} />
                </DockIcon>
                <DockLabel>{item.title}</DockLabel>
              </a>
            </DockItem>
          ))}
        </Dock>
      </nav>
    </>
  );
}
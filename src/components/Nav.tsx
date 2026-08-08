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
import { MapPin, Phone, Clock, Instagram, Send, MessageCircle } from 'lucide-react';

// TODO: ساعت کاری هنوز نمونه است — هر وقت مشخص شد همین‌جا عوض کنید.
const info = {
  address: 'تهران، سعادت‌آباد، ساختمان طوس',
  phone: '۰۹۱۲۱۲۳۴۵۶۷',
  hours: 'شنبه تا پنج‌شنبه، ۱۰ الی ۱۹',
};

const social = [
  { label: 'اینستاگرام', href: '#', icon: Instagram },
  { label: 'تلگرام', href: 'https://t.me/IamNbAKLM', icon: Send },
  { label: 'واتس‌اپ', href: '#', icon: MessageCircle },
];

export function ContactInfo() {
  return (
    <footer className="relative overflow-hidden pb-40 pt-24 md:pb-16">
      <img
        src="https://images.unsplash.com/photo-1558811916-51c8d56d29c6?auto=format&fit=crop&w=2000&q=70"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-wrap px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1fr_1fr_1fr]">
          <div>
            <span className="font-kalameh text-xl font-black text-paper">
              رود<span className="text-gold"> تهران</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              فروشگاه تخصصی میکروفون و هدفون‌های اورجینال RØDE — مشاوره تخصصی، گارانتی اصالت
              کالا.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.2em] text-gold">آدرس فروشگاه</p>
            <div className="flex gap-3 text-sm leading-7 text-paper/80">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-muted" strokeWidth={1.75} />
              <span>{info.address}</span>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.2em] text-gold">اطلاعات تماس</p>
            <div className="space-y-3 text-sm text-paper/80">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-muted" strokeWidth={1.75} />
                <span dir="ltr">{info.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-muted" strokeWidth={1.75} />
                <span>{info.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-ink-line pt-6 text-xs text-muted">
          © تمامی حقوق برای فروشگاه رود تهران محفوظ است.
        </div>
      </div>
    </footer>
  );
}

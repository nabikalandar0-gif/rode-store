import { ContactForm } from '@/components/ContactForm';

const points = [
  'مشاوره کاملاً رایگان و بدون تعهد',
  'پیشنهاد مدل بر اساس نوع کارتان، نه گران‌ترین مدل',
  'همه دستگاه‌ها پیش از تحویل تست می‌شوند',
];

export function Consult() {
  return (
    <section id="consult" className="border-b border-ink-line py-24 md:py-32">
      <div className="mx-auto grid max-w-wrap gap-14 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-10">
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-gold">مشاوره و تماس</p>
          <h2 className="mt-4 max-w-sm font-kalameh text-3xl font-black leading-tight text-paper md:text-4xl">
            مطمئن نیستید کدوم مدل رو بخرید؟
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-8 text-muted">
            فرم زیر رو پر کنید تا کارشناسان ما با شما تماس بگیرن — چه در حال شروع یک پادکست
            باشید، چه به دنبال ارتقای استودیوی موجودتان.
          </p>

          <ul className="mt-8 space-y-4 border-t border-ink-line pt-8">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-paper/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-ink-line bg-ink-soft/40 p-6 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

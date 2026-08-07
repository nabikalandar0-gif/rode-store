const paragraphs = [
  {
    n: '۰۱',
    title: 'چرا شروع کردیم',
    body: 'چند سال پیش، پیدا کردن یک میکروفون اورجینال RØDE در تهران کار ساده‌ای نبود. بین کالای غیراصل و مشاوره‌های ناقص، خیلی از تولیدکننده‌های محتوا سرمایه‌شان را روی چیزی می‌گذاشتند که مناسب کارشان نبود.',
  },
  {
    n: '۰۲',
    title: 'چیکار می‌کنیم',
    body: 'هر دستگاه پیش از تحویل، در فروشگاه تست می‌شود. مشاوره‌مان رایگان است و بر اساس نوع کارتان — پادکست، ویس‌اوور، موسیقی یا فیلم کوتاه — مدل مناسب را پیشنهاد می‌دهیم، نه لزوماً گران‌ترین مدل را.',
  },
  {
    n: '۰۳',
    title: 'چشم‌انداز ما',
    body: 'هدف‌مان این است که استودیوی خانگی هر پادکستر و موزیسین ایرانی، به اندازه استودیوهای حرفه‌ای دنیا مجهز باشد — با پشتیبانی فارسی و گارانتی واقعی.',
  },
];

export function Story() {
  return (
    <section id="story" className="border-b border-ink-line py-24 md:py-32">
      <div className="mx-auto grid max-w-wrap gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-10">
        <div className="order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1400&q=80"
            alt="نمای نزدیک از یک میکروفون کاندنسر استودیویی"
            className="aspect-[4/5] w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-xs font-bold tracking-[0.25em] text-gold">داستان ما</p>
          <h2 className="mt-4 max-w-md font-kalameh text-3xl font-black leading-tight text-paper md:text-4xl">
            یک فروشگاه کوچک، برای یک صدای بزرگ
          </h2>

          <div className="mt-12 space-y-10">
            {paragraphs.map((p) => (
              <div key={p.n} className="flex gap-6 border-t border-ink-line pt-6">
                <span className="font-kalameh text-sm font-bold text-gold">{p.n}</span>
                <div>
                  <h3 className="mb-2 font-kalameh text-lg font-bold text-paper">{p.title}</h3>
                  <p className="max-w-md text-sm leading-8 text-muted">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

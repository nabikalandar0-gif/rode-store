import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <header
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden border-b border-ink-line md:items-center"
    >
      <img
        src="https://images.unsplash.com/photo-1701491086385-83b8cefeb4fe?auto=format&fit=crop&w=2400&q=80"
        alt="میکروفون و هدفون استودیویی در نور کم"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-l from-ink/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-wrap px-6 pb-28 pt-40 md:px-10 md:pb-16">
        <p className="text-xs font-bold tracking-[0.25em] text-gold">فروشگاه رسمی RØDE در تهران</p>
        <h1 className="mt-5 max-w-2xl font-kalameh text-[clamp(2.75rem,9vw,4.75rem)] font-black leading-[1.05] text-paper">
          صدایی که
          <br />
          <span className="text-gold">شنیده می‌شود.</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-8 text-paper/80 md:text-lg">
          میکروفون و هدفون‌های اورجینال RØDE، با مشاوره تخصصی پیش از خرید و گارانتی اصالت کالا —
          از اولین اپیزود پادکست‌تان تا استودیوی حرفه‌ای.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a href="#products">مشاهده محصولات</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#consult">درخواست مشاوره رایگان</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

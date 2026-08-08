import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <header
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden border-b border-ink-line md:items-center"
    >
      <img
        src="https://images.unsplash.com/photo-1701491086385-83b8cefeb4fe?auto=format&fit=crop&w=2400&q=80"
        alt="میکروفون و هدفون استودیویی در نور کم"
        className={cn('absolute inset-0 h-full w-full object-cover', !reduceMotion && 'animate-kenburns')}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-l from-ink/40 via-transparent to-transparent" />

      <motion.div
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? undefined : 'hidden'}
        animate={reduceMotion ? undefined : 'show'}
        className="relative z-10 mx-auto w-full max-w-wrap px-6 pb-28 pt-40 md:px-10 md:pb-16"
      >
        <motion.p variants={item} className="text-xs font-bold tracking-[0.25em] text-gold">
          فروشگاه رسمی RØDE در تهران
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-5 max-w-2xl font-kalameh text-[clamp(2.75rem,9vw,4.75rem)] font-black leading-[1.05] text-paper"
        >
          صدایی که
          <br />
          <span className="text-gold">شنیده می‌شود.</span>
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-lg text-base leading-8 text-paper/80 md:text-lg">
          میکروفون و هدفون‌های اورجینال RØDE، با مشاوره تخصصی پیش از خرید و گارانتی اصالت کالا —
          از اولین اپیزود پادکست‌تان تا استودیوی حرفه‌ای.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a href="#products">مشاهده محصولات</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#consult">درخواست مشاوره رایگان</a>
          </Button>
        </motion.div>
      </motion.div>

      {!reduceMotion && (
        <motion.a
          href="#products"
          aria-label="پیمایش به بخش محصولات"
          className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit text-paper/60 transition-colors hover:text-gold"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
        </motion.a>
      )}
    </header>
  );
}

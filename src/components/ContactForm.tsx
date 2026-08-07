import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useInquiry } from '@/context/inquiry-context';

// TODO: این ایمیل را با ایمیل واقعی فروشگاه جایگزین کنید، یا این تابع را
// به یک سرویس واقعی (Formspree، EmailJS، یا API خودتان) وصل کنید.
const STORE_EMAIL = 'info@rode-tehran.ir';

export function ContactForm() {
  const { selectedProduct, setSelectedProduct } = useInquiry();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProduct) setProduct(selectedProduct);
  }, [selectedProduct]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`درخواست مشاوره — ${product || 'عمومی'}`);
    const body = encodeURIComponent(
      `نام: ${name}\nشماره تماس: ${phone}\nمحصول مورد نظر: ${product}\n\nپیام:\n${message}`,
    );
    window.location.href = `mailto:${STORE_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setSelectedProduct('');
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-gold/30 bg-ink-soft py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold" />
        <div>
          <p className="font-kalameh text-lg font-bold text-paper">درخواست شما ثبت شد</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            برنامه پیش‌فرض ایمیل شما باز می‌شود تا پیام را ارسال کنید. کارشناسان ما معمولاً در
            ساعات کاری، ظرف چند ساعت پاسخ می‌دهند.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-bold text-gold hover:text-gold-bright"
        >
          ارسال درخواست دیگر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">نام و نام خانوادگی</Label>
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="مثلاً علی رضایی"
          />
        </div>
        <div>
          <Label htmlFor="phone">شماره تماس</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="۰۹۱۲xxxxxxx"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="product">محصول مورد نظر</Label>
        <Input
          id="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="مثلاً NT1 5th Gen، یا اگر مطمئن نیستید خالی بگذارید"
        />
      </div>

      <div>
        <Label htmlFor="message">پیام شما</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="برای چه کاری میکروفون می‌خواهید؟ پادکست، ویس‌اوور، موسیقی...؟"
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        ارسال درخواست مشاوره
      </Button>
    </form>
  );
}

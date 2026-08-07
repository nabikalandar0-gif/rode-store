export type ProductCategory = 'microphone' | 'headphone';

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  spec: string;
  price: string;
  /** Path under /public — drop your own product photo here. See public/products/README.md */
  image: string;
};

export const products: Product[] = [
  {
    slug: 'nt1-5th-gen',
    name: 'NT1 5th Gen',
    category: 'microphone',
    tagline: 'میکروفون کاندنسر استودیویی، نسل پنجم',
    spec: 'خروجی دوگانه XLR/USB · ضبط ۳۲-بیت فلوت',
    price: '۳۷,۵۰۰,۰۰۰ تومان',
    image: '/products/nt1-5th-gen.jpg',
  },
  {
    slug: 'podmic-usb',
    name: 'PodMic USB',
    category: 'microphone',
    tagline: 'میکروفون دینامیک پادکست',
    spec: 'خروجی XLR و USB-C · پردازش صدای APHEX',
    price: '۷۸,۰۰۰,۰۰۰ تومان',
    image: '/products/podmic-usb.jpg',
  },
  {
    slug: 'wireless-go-iii',
    name: 'Wireless GO III',
    category: 'microphone',
    tagline: 'سیستم بی‌سیم جیبی',
    spec: 'ضبط داخلی · مناسب تولید محتوا و فیلم کوتاه',
    price: '۴۹,۹۰۰,۰۰۰ تومان',
    image: '/products/wireless-go-iii.jpg',
  },
  {
    slug: 'videomic-ntg',
    name: 'VideoMic NTG',
    category: 'microphone',
    tagline: 'میکروفون شاتگان روی دوربین',
    spec: 'خروجی آنالوگ و دیجیتال · باتری داخلی',
    price: '۳۱,۸۹۹,۰۰۰ تومان',
    image: '/products/videomic-ntg.jpg',
  },
  {
    slug: 'nt-usb-mini',
    name: 'NT-USB Mini',
    category: 'microphone',
    tagline: 'میکروفون USB کاندنسر جمع‌وجور',
    spec: 'نصب و راه‌اندازی آسان · مناسب پخش زنده',
    price: '۲۹,۹۹۹,۰۰۰ تومان',
    image: '/products/nt-usb-mini.jpg',
  },
  {
    slug: 'wireless-pro',
    name: 'Wireless PRO',
    category: 'microphone',
    tagline: 'سیستم بی‌سیم حرفه‌ای برودکست',
    spec: 'برد بالا · مدیریت چند کاناله',
    price: '۴۶,۷۵۰,۰۰۰ تومان',
    image: '/products/wireless-pro.jpg',
  },
  {
    slug: 'nth-100',
    name: 'NTH-100',
    category: 'headphone',
    tagline: 'هدفون روگوش حرفه‌ای بسته',
    spec: 'مناسب میکس و مانیتورینگ استودیو',
    price: '۵۴,۳۰۰,۰۰۰ تومان',
    image: '/products/nth-100.jpg',
  },
  {
    slug: 'nth-100m',
    name: 'NTH-100M',
    category: 'headphone',
    tagline: 'هدفون برودکست با میکروفون گوزنی',
    spec: 'مناسب پادکست و استریم دو نفره',
    price: '۳۹,۴۰۰,۰۰۰ تومان',
    image: '/products/nth-100m.jpg',
  },
  {
    slug: 'nth-50',
    name: 'NTH-50',
    category: 'headphone',
    tagline: 'هدفون مانیتورینگ جمع‌وجور',
    spec: 'سبک و قابل‌حمل · مناسب سفر و رکوردینگ بیرونی',
    price: '۲۴,۵۹۰,۰۰۰ تومان',
    image: '/products/nth-50.jpg',
  },
];

import { InquiryProvider } from '@/context/inquiry-context';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { Story } from '@/components/Story';
import { Consult } from '@/components/Consult';
import { ContactInfo } from '@/components/ContactInfo';

export default function App() {
  return (
    <InquiryProvider>
      <Nav />
      <main>
        <Hero />
        <Products />
        <Story />
        <Consult />
      </main>
      <ContactInfo />
    </InquiryProvider>
  );
}
import { ScrollVideo } from '@/components/ScrollVideo';
// ...
<Hero />
<ScrollVideo />
<Products />
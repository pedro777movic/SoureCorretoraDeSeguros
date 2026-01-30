import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import AboutUs from '@/components/landing/AboutUs';
import InsuranceOptions from '@/components/landing/InsuranceOptions';
import WhyUs from '@/components/landing/WhyUs';
import HowItWorks from '@/components/landing/HowItWorks';
import Trust from '@/components/landing/Trust';
import FinalCta from '@/components/landing/FinalCta';
import Footer from '@/components/landing/Footer';
import Insurers from '@/components/landing/Insurers';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <InsuranceOptions />
        <WhyUs />
        <Insurers />
        <HowItWorks />
        <Trust />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

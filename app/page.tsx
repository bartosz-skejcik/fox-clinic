import Cta from "@/components/landing/cta";
import Testimonials from "@/components/landing/testimonials";
import Voucher from "@/components/landing/voucher";
import Locations from "@/components/landing/locations";
import About from "@/components/landing/about";
import Treatments from "@/components/landing/treatments";
import Benefits from "@/components/landing/benefits";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <Benefits />

      {/* Treatments Section */}
      <Treatments />

      {/* About Section */}
      <About />

      {/* Locations Section */}
      <Locations />

      {/* Voucher Section */}
      <Voucher />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <Cta />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative w-full h-[80vh]">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Fox Clinic - Ekskluzywna Klinika Medycyny Estetycznej"
        fill
        className="object-cover brightness-[0.85]"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Wyglądaj i czuj się pięknie
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Fox Clinic - Ekskluzywna Klinika Medycyny Estetycznej w Warszawie
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button asChild size="lg" className="bg-[#274e13] hover:bg-[#1c3a0e]">
            <Link href="/zabiegi">
              Poznaj nasze zabiegi <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white hover:bg-white/20"
          >
            <Link href="/kontakt">Umów wizytę</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

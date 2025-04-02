import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Fox Clinic wnętrze"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#274e13] sm:text-4xl">
              Fox Clinic
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Fox Clinic to renomowana klinika medycyny estetycznej w Warszawie,
              założona i prowadzona przez duet matka-córka.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              W Fox Clinic pacjenci mogą liczyć na indywidualne podejście,
              najwyższej jakości produkty i sprzęt oraz przyjazną atmosferę.
              Klinika oferuje szeroką gamę zabiegów, dostosowanych do różnych
              potrzeb i oczekiwań.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Zapraszamy do Fox Clinic – miejsca, gdzie piękno i zdrowie idą w
              parze!
            </p>
            <Button asChild className="mt-6 bg-[#274e13] hover:bg-[#1c3a0e]">
              <Link href="/o-nas">Poznaj nas lepiej</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

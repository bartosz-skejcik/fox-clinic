import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

function Locations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
          Nasze lokalizacje
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-xl p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-[#274e13] mr-2" />
              <h3 className="text-xl font-semibold">Fox Clinic Ursynów</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Perkoza 1, 02-808 Warszawa Ursynów
            </p>
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fox Clinic Ursynów"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 text-[#274e13] mr-2" />
              <p className="text-gray-700">733 011 833</p>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-auto border-[#274e13] text-[#274e13] hover:bg-[#274e13] hover:text-white"
            >
              <Link href="/kontakt#ursynow">Więcej informacji</Link>
            </Button>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-[#274e13] mr-2" />
              <h3 className="text-xl font-semibold">Fox Clinic Łomianki</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Kościelna Droga 33, 05-092 Łomianki Dolne
            </p>
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fox Clinic Łomianki"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 text-[#274e13] mr-2" />
              <p className="text-gray-700">733 011 833</p>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-auto border-[#274e13] text-[#274e13] hover:bg-[#274e13] hover:text-white"
            >
              <Link href="/kontakt#lomianki">Więcej informacji</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;

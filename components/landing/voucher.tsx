import { Gift } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Voucher() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Gift className="h-6 w-6 text-[#274e13] mr-3" />
              <h2 className="text-3xl font-bold text-[#274e13]">
                Voucher na prezent
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Podaruj swoim bliskim wyjątkowy prezent w postaci imiennego
              vouchera podarunkowego do naszego salonu. Nasza szeroka oferta
              zabiegów pozwoli dopasować prezent do potrzeb każdego.
            </p>
            <h3 className="text-xl font-semibold text-[#274e13] mb-3">
              Elegancka karta podarunkowa
            </h3>
            <p className="text-gray-700 mb-6">
              Voucher jest wykonany w formie eleganckiej karty podarunkowej,
              zapakowanej w piękną kopertę zalakowaną złotą pieczęcią.
            </p>
            <Button asChild className="bg-[#274e13] hover:bg-[#1c3a0e]">
              <Link href="/voucher">Kup voucher</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Fox Clinic Voucher"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Voucher;

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Treatments() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
          Kompleksowa oferta zabiegów
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#274e13] mb-4">
                Zabiegi odmładzające:
              </h3>
              <ul className="space-y-2 text-neutral-800">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                  <span>
                    <strong>Botoks:</strong> Redukuje zmarszczki mimiczne, takie
                    jak kurze łapki, zmarszczki na czole i lwiej zmarszczki.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                  <span>
                    <strong>Kwas hialuronowy:</strong> Wypełnia zmarszczki i
                    bruzdy, modeluje usta, policzki i inne partie twarzy.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                  <span>
                    <strong>Nici liftingujące:</strong> Podnoszą i ujędrniają
                    skórę twarzy, szyi i dekoltu.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                  <span>
                    <strong>Laseroterapia:</strong> Skutecznie redukuje
                    przebarwienia, blizny i rozstępy, a także poprawia koloryt i
                    jędrność skóry.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                  <span>
                    <strong>Peelingi chemiczne:</strong> Oczyszczają i
                    złuszczają skórę, stymulując produkcję kolagenu i elastyny.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#274e13] mb-4">
                Zabiegi modelujące sylwetkę:
              </h3>
              <ul className="space-y-2 text-neutral-800">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                  <span>
                    <strong>Liposukcja:</strong> Usuwa nadmiar tkanki
                    tłuszczowej z różnych partii ciała, takich jak brzuch, uda,
                    pośladki i ramiona.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                  <span>
                    <strong>Lipoliza iniekcyjna:</strong> Rozpuszcza komórki
                    tłuszczowe, modelując sylwetkę bez konieczności operacji.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                  <span>
                    <strong>Endermologia:</strong> Masaż próżniowy, który
                    ujędrnia skórę, redukuje cellulit i wspomaga odchudzanie.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                  <span>
                    <strong>Kriolipoliza:</strong> Nieinwazyjna metoda
                    zamrażania komórek tłuszczowych, prowadząca do ich rozpadu i
                    wydalenia z organizmu.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Powyższa lista stanowi jedynie przykładową część naszej
                kompleksowej oferty zabiegów. Zachęcamy do kontaktu z naszym
                salonem w celu uzyskania szczegółowych informacji i dobrania
                odpowiedniego planu zabiegowego.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button asChild className="bg-[#274e13] hover:bg-[#1c3a0e]">
            <Link href="/zabiegi">
              Zobacz wszystkie zabiegi <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Treatments;

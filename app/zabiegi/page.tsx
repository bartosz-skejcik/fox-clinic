import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { treatmentCategories, treatments } from "@/lib/database";

export const metadata = {
  title: "Zabiegi - Fox Clinic",
  description:
    "Poznaj szeroką gamę zabiegów oferowanych przez Fox Clinic - od zabiegów odmładzających po modelujące sylwetkę.",
};

export default function TreatmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="/header/gallery_background_04.jpg"
          alt="Fox Clinic - Zabiegi"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Nasze zabiegi
          </h1>
          <p className="mt-4 text-xl max-w-3xl">
            Bogata oferta zabiegów upiększających, odmładzających i modelujących
            sylwetkę
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
            Kategorie zabiegów
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {treatmentCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#274e13]/10 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt={category.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#274e13] mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#274e13] text-[#274e13] hover:bg-[#274e13] hover:text-white bg-transparent"
                >
                  <Link href={`#${category.id}`}>Zobacz zabiegi</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments by Category */}
      {treatmentCategories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="py-16 bg-gray-50 border-t"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
              {category.name}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {treatments
                .filter((treatment) => treatment.categoryId === category.id)
                .map((treatment) => (
                  <div
                    key={treatment.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
                  >
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt={treatment.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#274e13]">
                        {treatment.name}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {treatment.shortDescription}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="mt-4 border-[#274e13] text-[#274e13] hover:bg-[#274e13] hover:text-white bg-transparent"
                      >
                        <Link href={`/zabiegi/${treatment.slug}`}>
                          Dowiedz się więcej
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

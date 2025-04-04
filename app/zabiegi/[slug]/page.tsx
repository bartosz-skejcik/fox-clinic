import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { treatments } from "@/lib/database";

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: TreatmentPageProps) {
  const params = await props.params;

  const treatment = treatments.find((t) => t.slug === params.slug);

  if (!treatment) {
    return {
      title: "Zabieg nie znaleziony - Fox Clinic",
    };
  }

  return {
    title: `${treatment.name} - Fox Clinic`,
    description: treatment.shortDescription,
  };
}

export function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export default async function TreatmentPage(props: TreatmentPageProps) {
  const params = await props.params;
  const { slug } = params;

  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="/header/gallery_background_04.jpg"
          alt={treatment.name}
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {treatment.name}
          </h1>
          <p className="mt-4 text-xl max-w-3xl">{treatment.shortDescription}</p>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <Link
            href="/zabiegi"
            className="inline-flex items-center text-[#274e13] hover:underline mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Powrót do wszystkich zabiegów
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt={treatment.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-[#274e13] mr-2" />
                <span className="text-gray-700">
                  Czas trwania: {treatment.duration}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-[#274e13] mb-4">
                Opis zabiegu
              </h2>
              <div className="prose max-w-none text-gray-700 mb-6">
                <p>{treatment.description}</p>
              </div>

              <h2 className="text-2xl font-bold text-[#274e13] mb-4">Efekty</h2>
              <ul className="space-y-2 mb-6">
                {treatment.effects.map((effect, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                    <span className="text-gray-700">{effect}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-[#274e13] mb-2">
                  Cena
                </h3>
                <p className="text-2xl font-bold text-neutral-600">
                  {treatment.price}
                </p>
                {treatment.priceNote && (
                  <p className="text-sm text-gray-500 mt-1">
                    {treatment.priceNote}
                  </p>
                )}
              </div>

              <Button asChild className="bg-[#274e13] hover:bg-[#1c3a0e]">
                <Link href="/kontakt">Umów się na zabieg</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* @ts-expect-error asdf */}
      {treatment.faq && treatment.faq.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
              Najczęściej zadawane pytania
            </h2>
            <div className="max-w-3xl mx-auto divide-y">
              {/* @ts-expect-error asdf */}
              {treatment.faq.map((item, index) => (
                <div key={index} className="py-6">
                  <h3 className="text-xl font-semibold text-[#274e13] mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

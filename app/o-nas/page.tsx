import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { team } from "@/lib/database";

export const metadata = {
  title: "O nas - Fox Clinic",
  description:
    "Poznaj Fox Clinic - renomowaną klinikę medycyny estetycznej w Warszawie prowadzoną przez duet matka-córka.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="/header/gallery_background_04.jpg"
          alt="Fox Clinic - O nas"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            O nas
          </h1>
          <p className="mt-4 text-xl max-w-3xl">
            Fox Clinic to miejsce, gdzie piękno łączy się ze zdrowiem
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Fox Clinic wnętrze"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#274e13] sm:text-4xl">
                Nasza historia
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Fox Clinic to renomowana klinika medycyny estetycznej
                zlokalizowana w Warszawie, prowadzona przez duet matka-córka.
                Nasza historia rozpoczęła się z pasji do pomagania ludziom w
                osiąganiu ich najlepszej wersji siebie.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Od początku naszym celem było stworzenie miejsca, które łączy
                najnowocześniejsze technologie z indywidualnym podejściem do
                każdego pacjenta. Dziś z dumą możemy powiedzieć, że Fox Clinic
                stało się synonimem profesjonalizmu i najwyższej jakości w
                dziedzinie medycyny estetycznej.
              </p>
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-semibold text-[#274e13]">
                  Nasze wartości:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Profesjonalizm",
                    "Bezpieczeństwo",
                    "Indywidualne podejście",
                    "Najwyższa jakość",
                    "Innowacyjność",
                  ].map((value) => (
                    <li
                      key={value}
                      className="flex items-center text-neutral-900"
                    >
                      <CheckCircle className="h-5 w-5 text-[#274e13] mr-2" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
            Nasz zespół
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#274e13]">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#274e13] sm:text-4xl">
                Nasza filozofia
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                W Fox Clinic wierzymy, że prawdziwe piękno wynika z harmonii
                ciała i ducha. Naszym celem jest nie tylko poprawa wyglądu
                zewnętrznego, ale również wzmocnienie pewności siebie i dobrego
                samopoczucia naszych pacjentów.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Każdy zabieg poprzedzamy dokładną konsultacją, podczas której
                słuchamy potrzeb i oczekiwań pacjenta. Następnie, bazując na
                naszej wiedzy i doświadczeniu, proponujemy indywidualnie
                dopasowane rozwiązania, które przyniosą najlepsze efekty.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Bezpieczeństwo i komfort naszych pacjentów są dla nas
                priorytetem. Dlatego korzystamy wyłącznie z certyfikowanych
                produktów i najnowocześniejszych technologii, a wszystkie
                zabiegi wykonywane są przez wykwalifikowanych specjalistów.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Fox Clinic filozofia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Interior Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
            Wnętrza naszej kliniki
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt={`Fox Clinic wnętrze ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

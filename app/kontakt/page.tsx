import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  // Instagram, Facebook
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { locations } from "@/lib/database";

export const metadata = {
  title: "Kontakt - Fox Clinic",
  description:
    "Skontaktuj się z Fox Clinic - renomowaną kliniką medycyny estetycznej w Warszawie. Umów wizytę już dziś!",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="/header/gallery_background_04.jpg"
          alt="Fox Clinic - Kontakt"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Kontakt
          </h1>
          <p className="mt-4 text-xl max-w-3xl">
            Skontaktuj się z nami i umów wizytę już dziś
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
            Nasze lokalizacje
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((location) => (
              <Card
                key={location.id}
                id={
                  location.name === "Fox Clinic Ursynów"
                    ? "ursynow"
                    : "lomianki"
                }
                className="overflow-hidden pt-0"
              >
                <CardHeader className="bg-[#274e13] text-white pt-4 pb-2">
                  <CardTitle className="flex items-center text-xl">
                    <MapPin className="h-5 w-5 mr-2" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=500&width=800"
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                      <p className="text-gray-700">{location.address}</p>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                      <p className="text-gray-700">{location.phone}</p>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                      <p className="text-gray-700">{location.email}</p>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-[#274e13] mr-2 mt-0.5" />
                      <div className="text-gray-700">
                        <h3 className="font-medium mb-2">Godziny otwarcia:</h3>
                        <ul className="space-y-1">
                          {location.hours.map((hour, index) => (
                            <li key={index} className="flex justify-between">
                              <span className="font-medium">{hour.day}</span>
                              <span>{hour.hours}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 aspect-video rounded-lg overflow-hidden bg-gray-200">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa ${location.name}`}
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/*<section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
              Napisz do nas
            </h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Imię i nazwisko
                      </label>
                      <Input id="name" placeholder="Twoje imię i nazwisko" />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Twój adres email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefon
                    </label>
                    <Input id="phone" placeholder="Twój numer telefonu" />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Temat
                    </label>
                    <Input id="subject" placeholder="Temat wiadomości" />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Wiadomość
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Twoja wiadomość"
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#274e13] hover:bg-[#1c3a0e]"
                  >
                    Wyślij wiadomość
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-[#274e13] mb-4">
                Dołącz do nas w mediach społecznościowych
              </h3>
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#274e13]"
                >
                  <Instagram className="h-8 w-8" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#274e13]"
                >
                  <Facebook className="h-8 w-8" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}

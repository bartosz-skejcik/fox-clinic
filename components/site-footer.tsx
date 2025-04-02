import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { navigationLinks, socials } from "@/lib/database";

export function SiteFooter() {
  return (
    <footer className="bg-neutral-100">
      <div className="container px-4 py-12 md:py-16 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Fox Clinic Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-[#274e13]">
                Fox Clinic
              </span>
            </Link>
            <p className="text-neutral-600 mb-4">
              Ekskluzywna Klinika Medycyny Estetycznej w Warszawie, gdzie piękno
              łączy się ze zdrowiem.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <Link
                  href={social.url}
                  key={social.url}
                  target="_blank"
                  className="text-neutral-600 hover:text-[#274e13]"
                >
                  {social.icon}
                  <span className="sr-only">
                    {social.name.charAt(0).toUpperCase() +
                      social.name.slice(1, social.name.length)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#274e13] mb-4">
              Nawigacja
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-[#274e13] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#274e13] mb-4">
              Lokalizacje
            </h3>
            <div className="space-y-4">
              <div className="text-neutral-600">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-[#274e13] mr-2" />
                  <span className="font-medium">Ursynów</span>
                </div>
                <p className="text-neutral-600 pl-6">Perkoza 1, Warszawa</p>
              </div>
              <div className="text-neutral-600">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-[#274e13] mr-2" />
                  <span className="font-medium">Łomianki</span>
                </div>
                <p className="text-neutral-600 pl-6">
                  Kościelna Droga 33, Łomianki Dolne
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#274e13] mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-[#274e13] mr-2 mt-1" />
                <span className="text-neutral-600">733 011 833</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-[#274e13] mr-2 mt-1" />
                <span className="text-neutral-600">kontakt@foxclinic.pl</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 text-[#274e13] mr-2 mt-1" />
                <div className="text-neutral-600">
                  <p>Pon-Pt: 10:00 - 20:00</p>
                  <p>Sob: 10:00 - 16:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-center text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} Fox Clinic. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

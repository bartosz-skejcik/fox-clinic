import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { navigationLinks, contact } from "@/lib/database";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-0">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Fox Clinic Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-[#274e13]">Fox Clinic</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#274e13] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link href={contact.url} className="hidden md:flex items-center">
            {contact.icon}
            <span className="text-sm font-medium text-neutral-600">
              {contact.phone}
            </span>
          </Link>
          <Button asChild className="bg-[#274e13] hover:bg-[#1c3a0e]">
            <Link href="/kontakt">Umów wizytę</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

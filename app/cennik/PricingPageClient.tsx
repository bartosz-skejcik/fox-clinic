"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { treatmentCategories, treatments } from "@/lib/database";
import { Clock, Info } from "lucide-react";

export default function PricingPageClient() {
  const [activeTab, setActiveTab] = useState(treatmentCategories[0].id);

  return (
    <div className="flex flex-col min-h-screen text-neutral-600">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="/header/gallery_background_04.jpg"
          alt="Fox Clinic - Cennik"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Cennik
          </h1>
          <p className="mt-4 text-xl max-w-3xl">
            Przejrzyste ceny wszystkich naszych zabiegów
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <Card className="mb-8 border-transparent">
            <CardHeader>
              <CardTitle className="text-[#274e13]">
                Wybierz kategorię zabiegów
              </CardTitle>
              <CardDescription>
                Przeglądaj ceny według kategorii zabiegów
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs
                defaultValue={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 gap-x-2">
                  {treatmentCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-[#274e13] data-[state=active]:text-white text-neutral-600 data-[state=active]:hover:bg-[#274e13] data-[state=active]:hover:text-white hover:bg-[#274e13]/10 hover:text-[#274e13] rounded-md px-4 py-2 transition-colors"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {treatmentCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-[#274e13]">
                        {category.name}
                      </h2>
                      <div className="grid gap-4">
                        {treatments
                          .filter(
                            (treatment) => treatment.categoryId === category.id,
                          )
                          .map((treatment) => (
                            <Card
                              key={treatment.id}
                              className="overflow-hidden transition-all hover:shadow-md border-transparent"
                            >
                              <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                  <h3 className="text-lg font-semibold">
                                    {treatment.name}
                                  </h3>
                                  <p className="text-sm text-gray-500 mt-1">
                                    {treatment.shortDescription}
                                  </p>
                                  {treatment.duration && (
                                    <div className="flex items-center mt-2 text-sm text-gray-600">
                                      <Clock className="h-4 w-4 mr-1" />
                                      <span>
                                        Czas trwania: {treatment.duration}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                  <div className="text-right">
                                    <div className="text-xl font-bold">
                                      {treatment.price}
                                    </div>
                                    {treatment.priceNote && (
                                      <p className="text-xs text-gray-500">
                                        {treatment.priceNote}
                                      </p>
                                    )}
                                  </div>
                                  <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-[#274e13] text-[#274e13] hover:bg-[#274e13] hover:text-white bg-transparent"
                                  >
                                    <Link href={`/zabiegi/${treatment.slug}`}>
                                      <Info className="h-4 w-4 mr-1" />
                                      Szczegóły
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </Card>
                          ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Nie znalazłeś interesującego Cię zabiegu? Skontaktuj się z nami!
            </p>
            <Button asChild className="bg-[#274e13] hover:bg-[#1c3a0e]">
              <Link href="/kontakt">Skontaktuj się z nami</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

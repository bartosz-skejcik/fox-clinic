import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Gift, CreditCard } from "lucide-react";

export const metadata = {
  title: "Voucher na prezent - Fox Clinic",
  description:
    "Kup elegancki voucher podarunkowy Fox Clinic - idealny prezent na każdą okazję.",
};

export default function VoucherPage() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="/header/gallery_background_04.jpg"
          alt="Fox Clinic - Voucher na prezent"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Voucher na prezent
          </h1>
          <p className="mt-4 text-xl max-w-3xl">
            Idealny prezent na każdą okazję
          </p>
        </div>
      </section>

      {/* Voucher Info Section */}
      <section className="py-16 bg-white w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#274e13] sm:text-4xl">
                Podaruj bliskiej osobie wyjątkowy prezent
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Voucher Fox Clinic to elegancki prezent w postaci imiennego
                vouchera podarunkowego do naszego salonu. Nasza szeroka oferta
                zabiegów pozwoli dopasować prezent do potrzeb każdego.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#274e13] mb-4">
                  Elegancka karta podarunkowa
                </h3>
                <p className="text-gray-700 mb-4">
                  Voucher jest wykonany w formie eleganckiej karty podarunkowej,
                  zapakowanej w piękną kopertę zalakowaną złotą pieczęcią.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#274e13] mb-4">
                  Dostępność
                </h3>
                <p className="text-gray-700">
                  Voucher można odebrać osobiście lub zamówić w wersji
                  elektronicznej.
                </p>
              </div>
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

      {/* Voucher Form Section */}
      {/*<section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
            Zamów voucher
          </h2>
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-[#274e13]">Formularz zamówienia vouchera</CardTitle>
              <CardDescription>Wypełnij poniższy formularz, aby zamówić voucher podarunkowy</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#274e13] flex items-center">
                    <Gift className="h-5 w-5 mr-2" />
                    Wybierz rodzaj vouchera
                  </h3>
                  <RadioGroup defaultValue="amount">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-[#274e13]">
                        <RadioGroupItem value="amount" id="amount" />
                        <Label htmlFor="amount" className="cursor-pointer flex-1">
                          <span className="font-medium">Voucher kwotowy</span>
                          <p className="text-sm text-gray-500">Wybierz dowolną kwotę</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-[#274e13]">
                        <RadioGroupItem value="treatment" id="treatment" />
                        <Label htmlFor="treatment" className="cursor-pointer flex-1">
                          <span className="font-medium">Voucher na zabieg</span>
                          <p className="text-sm text-gray-500">Wybierz konkretny zabieg</p>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#274e13] flex items-center">
                    <span className="mr-2">1.</span>
                    Wybierz wartość vouchera
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[300, 500, 1000].map((value) => (
                      <div
                        key={value}
                        className="border rounded-lg p-4 text-center cursor-pointer hover:border-[#274e13] hover:bg-gray-50"
                      >
                        <span className="block font-bold text-xl">{value} zł</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="custom-amount">Inna kwota (zł)</Label>
                    <Input id="custom-amount" type="number" placeholder="Wpisz kwotę" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#274e13] flex items-center">
                    <span className="mr-2">2.</span>
                    Personalizacja
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="recipient-name">Imię obdarowanej osoby</Label>
                      <Input id="recipient-name" placeholder="Imię osoby, która otrzyma voucher" />
                    </div>
                    <div>
                      <Label htmlFor="sender-name">Twoje imię</Label>
                      <Input id="sender-name" placeholder="Twoje imię (od kogo)" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Osobista wiadomość (opcjonalnie)</Label>
                    <Textarea id="message" placeholder="Twoja wiadomość dla obdarowanej osoby" rows={3} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#274e13] flex items-center">
                    <span className="mr-2">3.</span>
                    Dane kontaktowe
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Imię i nazwisko</Label>
                      <Input id="name" placeholder="Twoje imię i nazwisko" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Twój adres email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" placeholder="Twój numer telefonu" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#274e13] flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Płatność
                  </h3>
                  <p className="text-gray-700">
                    Po kliknięciu przycisku "Zamów voucher" zostaniesz przekierowany do bezpiecznej płatności online.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-[#274e13] hover:bg-[#1c3a0e]">
                  Zamów voucher
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>*/}
    </div>
  );
}

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Cta() {
  return (
    <section className="py-16 bg-[#274e13] text-white">
      <div className="container px-4 md:px-6 text-center mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Fox Clinic to miejsce, gdzie piękno łączy się ze zdrowiem
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Zapraszamy do skorzystania z naszych usług i doświadczenia
          profesjonalnej opieki w przyjaznej atmosferze!
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-[#274e13] hover:bg-gray-100"
        >
          <Link href="/kontakt">Umów się na wizytę</Link>
        </Button>
      </div>
    </section>
  );
}

export default Cta;

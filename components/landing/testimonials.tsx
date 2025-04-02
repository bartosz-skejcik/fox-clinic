import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { testimonials } from "@/lib/database";

function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-[#274e13] sm:text-4xl mb-12">
          Co mówią nasi klienci
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name.toLowerCase().replace(" ", "")}
              className="bg-white rounded-xl p-6 text-neutral-800"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name.split(" ")[0]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <svg
                        key={j}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;{testimonial.description}&quot;
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="border-[#274e13] text-[#274e13] hover:bg-[#274e13] hover:text-white bg-transparent"
          >
            <Link href="/opinie">Zobacz więcej opinii</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

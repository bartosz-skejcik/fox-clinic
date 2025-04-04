/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/app/api/booksy/route";
import { contact } from "@/lib/database";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Opinie - Fox Clinic",
  description:
    "Poznaj opinie naszych klientów o Fox Clinic - renomowanej klinice medycyny estetycznej w Warszawie.",
};

const fetchReviews = async () => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/booksy`);

  if (!resp.ok) {
    throw new Error("Failed to fetch reviews");
  }

  const { testimonials } = await resp.json();

  return testimonials as Testimonial[];
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Rendered Immediately */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="/header/gallery_background_04.jpg"
          alt="Fox Clinic - Opinie"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Opinie Klientów
          </h1>
          <p className="mt-4 text-xl max-w-3xl">
            Poznaj doświadczenia naszych klientów z Fox Clinic
          </p>
        </div>
      </section>

      {/* Reviews Section with Suspense */}
      <Suspense
        fallback={
          <div className="text-center py-16 text-neutral-600">
            Ładowanie opinii...
          </div>
        }
      >
        <ReviewsSection />
      </Suspense>
    </div>
  );
}

async function ReviewsSection() {
  const reviews = await fetchReviews();
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, id) => (
            <Card key={id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt={review.reviewer}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-500">
                      {review.reviewer}
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(review.stars)].map((_, j) => (
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
                  &quot;{review.reviewText}&quot;
                </p>
                <div className="w-full flex flex-wrap gap-4 pt-4">
                  {review.photos?.map((photo) => (
                    <img
                      key={photo}
                      src={photo}
                      alt={review.reviewer}
                      className="object-cover rounded-xl w-20 h-20"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#274e13] mb-6">
            Podziel się swoją opinią
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Twoja opinia jest dla nas bardzo ważna. Jeśli korzystałeś z naszych
            usług, będziemy wdzięczni za podzielenie się swoimi doświadczeniami.
          </p>
          <Button asChild className="bg-[#274e13] hover:bg-[#1c3a0e]">
            <Link href={contact.booksy} target="_blank">
              Napisz opinię
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

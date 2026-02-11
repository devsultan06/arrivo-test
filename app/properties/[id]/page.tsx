import { properties } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export const dynamicParams = true;

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PropertyDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const property = properties.find((p) => p.id === resolvedParams.id);

  if (!property) {
    return notFound();
  }

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    name: property.title,
    description: property.description,
    image: property.gallery || [property.image], 
    numberOfRooms: property.bedrooms,
    petsAllowed: true,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: property.rating,
      reviewCount: property.reviewsCount,
    },
    priceRange: property.price,
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="pt-24 pb-20 max-w-[1500px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
              {property.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-secondary text-base">
              <span className="flex items-center gap-1.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {property.location || "Unknown Location"}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="flex items-center gap-1.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-white font-medium">
                  {property.rating || "New"}
                </span>
                <span>({property.reviewsCount || 0} reviews)</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-text-secondary text-sm">Price per night</p>
            <p className="text-3xl font-semibold text-white">
              {property.price}
              <span className="text-lg text-text-secondary font-normal">
                {" "}
                / night
              </span>
            </p>
          </div>
        </div>

        {/* Gallery Grid - 1 Main + 2 Side */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[400px] md:h-[500px] mb-12 rounded-[20px] overflow-hidden">
          <div className="lg:col-span-2 relative h-full bg-surface">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="hidden lg:grid grid-rows-2 gap-4 col-span-1 h-full">
            {property.gallery?.[1] ? (
              <div className="relative w-full h-full bg-surface">
                <Image
                  src={property.gallery[1]}
                  alt="Gallery 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="bg-[#1A1A1A] w-full h-full" />
            )}
            {property.gallery?.[2] ? (
              <div className="relative w-full h-full bg-surface">
                <Image
                  src={property.gallery[2]}
                  alt="Gallery 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="bg-[#1A1A1A] w-full h-full" />
            )}
          </div>

          <div className="hidden lg:grid grid-rows-2 gap-4 col-span-1 h-full">
            {property.gallery?.[0] ? (
              <div className="relative w-full h-full bg-surface">
                <Image
                  src={property.gallery[0]}
                  alt="Gallery 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="bg-[#1A1A1A] w-full h-full" />
            )}
            <div className="relative w-full h-full bg-[#1A1A1A] flex items-center justify-center cursor-pointer hover:bg-[#262626] transition-colors group">
              <span className="text-white font-medium group-hover:underline">
                View All Photos
              </span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2">
            <div className="border-b border-border pb-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                About this stay
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {property.description}
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 p-4 border border-border rounded-[10px] bg-[#1A1A1A]">
                  <span className="text-text-secondary">Bedrooms</span>
                  <span className="text-white font-semibold">
                    {property.bedrooms}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-border rounded-[10px] bg-[#1A1A1A]">
                  <span className="text-text-secondary">Bathrooms</span>
                  <span className="text-white font-semibold">
                    {property.bathrooms}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-border rounded-[10px] bg-[#1A1A1A]">
                  <span className="text-text-secondary">Type</span>
                  <span className="text-white font-semibold">
                    {property.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="border-b border-border pb-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities?.map((amenity: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-text-secondary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{amenity}</span>
                  </div>
                )) || (
                  <p className="text-text-secondary">No amenities listed.</p>
                )}
              </div>
            </div>

            {/* Host Info */}
            {property.host && (
              <div className="flex items-center gap-6 p-6 border border-border rounded-[12px] bg-[#1A1A1A]">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-border">
                  <Image
                    src={property.host.image}
                    alt={property.host.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Hosted by {property.host.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {property.host.role}
                  </p>
                </div>
                <button className="ml-auto px-5 py-2.5 bg-surface border border-border rounded-[8px] text-white text-sm hover:bg-border transition-colors">
                  Contact Host
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 border border-border rounded-[16px] bg-[#1A1A1A] shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <p className="text-xl font-semibold text-white">
                  {property.price}{" "}
                  <span className="text-sm font-normal text-text-secondary">
                    / night
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-yellow-500">★</span>
                  <span className="text-white font-medium">
                    {property.rating}
                  </span>
                </div>
              </div>

              {/* Date Picker Dummy */}
              <div className="grid grid-cols-2 border border-border rounded-[8px] mb-4 overflow-hidden">
                <div className="p-3 border-r border-border bg-surface">
                  <p className="text-[10px] uppercase font-bold text-text-secondary mb-1">
                    Check-in
                  </p>
                  <p className="text-sm text-white">Add date</p>
                </div>
                <div className="p-3 bg-surface">
                  <p className="text-[10px] uppercase font-bold text-text-secondary mb-1">
                    Check-out
                  </p>
                  <p className="text-sm text-white">Add date</p>
                </div>
              </div>

              <div className="p-3 border border-border rounded-[8px] bg-surface mb-6">
                <p className="text-[10px] uppercase font-bold text-text-secondary mb-1">
                  Guests
                </p>
                <p className="text-sm text-white">1 guest</p>
              </div>

              <button className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-[8px] transition-colors mb-4">
                Check Availability
              </button>

              <p className="text-center text-xs text-text-secondary">
                You won&apos;t be charged yet
              </p>
            </div>
          </div>
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

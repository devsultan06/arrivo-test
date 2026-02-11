"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import PropertyCard from "@/components/ui/PropertyCard";
import { properties } from "@/data/properties";
import "swiper/css";

export default function FeaturedProperties() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = properties.length;

  const currentPage = String(activeIndex + 1).padStart(2, "0");
  const totalPages = String(totalSlides).padStart(2, "0");

  return (
    <section className="w-full bg-surface py-16 md:py-20">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            {/* Stars Icon */}
            <div className="mb-4">
              <Image
                src="/images/abstract-design-3.png"
                alt=""
                width={60}
                height={24}
                aria-hidden="true"
              />
            </div>

            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] text-white mb-4">
              Featured Properties
            </h2>
            <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed max-w-3xl">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click &quot;View Details&quot; for
              more information.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/properties"
              className="inline-block px-6 py-3.5 text-sm text-white border border-border rounded-[10px] bg-background hover:bg-surface transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!pb-4"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id} className="!h-auto">
              <PropertyCard {...property} href={`/properties/${property.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <p className="text-[16px] text-white">
            <span className="font-semibold">{currentPage}</span>
            <span className="text-text-secondary"> of {totalPages}</span>
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-11 h-11 rounded-full border border-border bg-surface flex items-center justify-center text-white hover:bg-border transition-colors disabled:opacity-40"
              disabled={activeIndex === 0}
              aria-label="Previous slide"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-11 h-11 rounded-full border border-border bg-surface flex items-center justify-center text-white hover:bg-border transition-colors disabled:opacity-40"
              aria-label="Next slide"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

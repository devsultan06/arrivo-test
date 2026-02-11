"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import TestimonialCard, {
  type TestimonialItem,
} from "@/components/ui/TestimonialCard";

import "swiper/css";

const testimonialsData: TestimonialItem[] = [
  {
    title: "Exceptional Service!",
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    location: "USA, California",
    avatar: "/images/Profile.svg",
    rating: 5,
  },
  {
    title: "Efficient and Reliable",
    review:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: "Emelie Thomson",
    location: "USA, Florida",
    avatar: "/images/Profile (1).svg",
    rating: 5,
  },
  {
    title: "Trusted Advisors",
    review:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "John Mans",
    location: "USA, Nevada",
    avatar: "/images/Profile (2).svg",
    rating: 5,
  },
  {
    title: "Outstanding Results",
    review:
      "Working with Estatein was a game-changer. Their market insights and negotiation skills helped us secure the perfect investment property.",
    name: "Sarah Mitchell",
    location: "USA, Texas",
    avatar: "/images/Profile.svg",
    rating: 5,
  },
  {
    title: "Seamless Experience",
    review:
      "From start to finish, Estatein made the entire process smooth and stress-free. Their attention to detail is truly unmatched in the industry.",
    name: "Michael Chen",
    location: "USA, New York",
    avatar: "/images/Profile (1).svg",
    rating: 5,
  },
  {
    title: "Highly Professional",
    review:
      "The team at Estatein went above and beyond to find us our dream home. Their expertise and patience throughout the process were remarkable.",
    name: "Lisa Anderson",
    location: "USA, Colorado",
    avatar: "/images/Profile (2).svg",
    rating: 5,
  },
  {
    title: "Best in the Business",
    review:
      "Estatein's approach to real estate is refreshingly transparent. They kept us informed at every step and delivered exceptional value.",
    name: "David Park",
    location: "USA, Washington",
    avatar: "/images/Profile.svg",
    rating: 5,
  },
  {
    title: "Incredible Support",
    review:
      "We were first-time buyers and Estatein made everything so easy to understand. Their guidance throughout the entire journey was invaluable.",
    name: "Rachel Green",
    location: "USA, Oregon",
    avatar: "/images/Profile (1).svg",
    rating: 5,
  },
  {
    title: "A Pleasure to Work With",
    review:
      "Estatein truly cares about their clients. They listened to our needs and found us the perfect property within our budget. Amazing team!",
    name: "James Wilson",
    location: "USA, Arizona",
    avatar: "/images/Profile (2).svg",
    rating: 5,
  },
  {
    title: "Exceeded Expectations",
    review:
      "From market analysis to closing, Estatein's team demonstrated unparalleled professionalism. They made selling our home effortless.",
    name: "Emma Davis",
    location: "USA, Georgia",
    avatar: "/images/Profile.svg",
    rating: 5,
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = testimonialsData.length;

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
              What Our Clients Say
            </h2>
            <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed max-w-3xl">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/testimonials"
              className="inline-block px-6 py-3.5 text-sm text-white border border-border rounded-[10px] bg-background hover:bg-surface transition-colors"
            >
              View All Testimonials
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
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <TestimonialCard {...testimonial} />
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

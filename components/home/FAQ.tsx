"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import FAQCard, { type FAQItem } from "@/components/ui/FAQCard";

import "swiper/css";
import Image from "next/image";

const faqData: FAQItem[] = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    href: "/faq",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
    href: "/faq",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
    href: "/faq",
  },
  {
    question: "What are the fees associated with buying a property?",
    answer:
      "Get a clear breakdown of all costs involved in purchasing a property through Estatein.",
    href: "/faq",
  },
  {
    question: "How long does the property buying process take?",
    answer:
      "Understand the typical timeline from property search to closing the deal.",
    href: "/faq",
  },
  {
    question: "Can I get a mortgage through Estatein?",
    answer:
      "Learn about our partnerships with financial institutions to help you secure funding.",
    href: "/faq",
  },
  {
    question: "What types of properties does Estatein offer?",
    answer:
      "Explore our diverse portfolio of residential, commercial, and luxury properties.",
    href: "/faq",
  },
  {
    question: "How do I schedule a property tour?",
    answer:
      "Find out how easy it is to book a visit and experience a property in person.",
    href: "/faq",
  },
  {
    question: "Do you offer property management services?",
    answer:
      "Discover our comprehensive property management solutions for landlords.",
    href: "/faq",
  },
  {
    question: "What is the process for renting a property?",
    answer:
      "Step-by-step guide on how to find and secure your ideal rental property.",
    href: "/faq",
  },
];

export default function FAQ() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = faqData.length;

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
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed max-w-3xl">
              Find answers to common questions about Estatein&apos;s services,
              property listings, and the real estate process. We&apos;re here to
              provide clarity and assist you every step of the way.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/faq"
              className="inline-block px-6 py-3.5 text-sm text-white border border-border rounded-[10px] bg-background hover:bg-surface transition-colors"
            >
              View All FAQ&apos;s
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
          {faqData.map((faq, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <FAQCard
                question={faq.question}
                answer={faq.answer}
                href={faq.href}
              />
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
              disabled={
                activeIndex >=
                totalSlides -
                  (typeof window !== "undefined" && window.innerWidth >= 1024
                    ? 3
                    : window.innerWidth >= 640
                      ? 2
                      : 1)
              }
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

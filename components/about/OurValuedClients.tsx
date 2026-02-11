"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const clientsData = [
  {
    since: "Since 2019",
    name: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    quote:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    website: "#",
  },
  {
    since: "Since 2018",
    name: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    quote:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    website: "#",
  },
  {
    since: "Since 2020",
    name: "Skyline Ventures",
    domain: "Residential Real Estate",
    category: "Investment Properties",
    quote:
      "Working with Estatein was a game-changer for our real estate portfolio. Their market insights are unmatched.",
    website: "#",
  },
  {
    since: "Since 2017",
    name: "BlueStar Holdings",
    domain: "Industrial Real Estate",
    category: "Warehouse Development",
    quote:
      "Estatein helped us find the perfect industrial space. Their professionalism and attention to detail are second to none.",
    website: "#",
  },
  {
    since: "Since 2021",
    name: "Horizon Group",
    domain: "Mixed-Use Development",
    category: "Urban Planning",
    quote:
      "The team at Estatein brought our vision to life with their innovative approach to mixed-use developments.",
    website: "#",
  },
  {
    since: "Since 2016",
    name: "Summit Properties",
    domain: "Luxury Real Estate",
    category: "High-End Residential",
    quote:
      "Estatein's knowledge of the luxury market is exceptional. They found us our dream home effortlessly.",
    website: "#",
  },
  {
    since: "Since 2019",
    name: "Metro Developments",
    domain: "Commercial Real Estate",
    category: "Office Spaces",
    quote:
      "Their understanding of the commercial real estate market helped us make informed investment decisions.",
    website: "#",
  },
  {
    since: "Since 2020",
    name: "Pinnacle Realty",
    domain: "Residential Real Estate",
    category: "Family Homes",
    quote:
      "Estatein made our home-buying experience seamless and stress-free. Highly recommended!",
    website: "#",
  },
  {
    since: "Since 2018",
    name: "Atlas Investments",
    domain: "Real Estate Investment",
    category: "Portfolio Management",
    quote:
      "Their strategic approach to real estate investment has significantly grown our portfolio value.",
    website: "#",
  },
  {
    since: "Since 2022",
    name: "Nova Enterprises",
    domain: "Retail Real Estate",
    category: "Shopping Centers",
    quote:
      "Estatein's market analysis helped us secure prime retail locations across the city.",
    website: "#",
  },
];

export default function OurValuedClients() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = clientsData.length;

  const currentPage = String(activeIndex + 1).padStart(2, "0");
  const totalPages = String(totalSlides).padStart(2, "0");

  return (
    <section className="w-full bg-[#141414]">
      <div className="max-w-[1500px] mx-auto px-6 py-16 md:py-20">
        {/* Header */}
        <div className="mb-10">
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
            Our Valued Clients
          </h2>
          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed max-w-3xl">
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we&apos;ve had the pleasure of serving.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
          }}
          className="!pb-4"
        >
          {clientsData.map((client, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className=" p-6 border-border border rounded-[12px] md:p-8 h-full flex flex-col">
                {/* Top row: Since + Visit Website */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-secondary text-sm">
                    {client.since}
                  </span>
                  <Link
                    href={client.website}
                    className="px-4 py-2 text-sm text-white border border-border rounded-[8px] hover:bg-surface-light transition-colors"
                  >
                    Visit Website
                  </Link>
                </div>

                {/* Company Name */}
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-5">
                  {client.name}
                </h3>

                {/* Domain & Category */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/domain-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-text-secondary text-xs">Domain</p>
                      <p className="text-white text-sm">{client.domain}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/category-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-text-secondary text-xs">Category</p>
                      <p className="text-white text-sm">{client.category}</p>
                    </div>
                  </div>
                </div>

                {/* What They Said */}
                <div className="mt-auto p-5 rounded-[10px] bg-background border border-border">
                  <p className="text-white text-sm mb-3">What They Said 🤝</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {client.quote}
                  </p>
                </div>
              </div>
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

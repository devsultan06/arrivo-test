"use client";

import { useState } from "react";
import Image from "next/image";

export default function PropertiesHero() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const filters = [
    {
      label: "Location",
      icon: "/images/filter-icon-location.svg",
      options: [
        "New York, USA",
        "Los Angeles, USA",
        "London, UK",
        "Dubai, UAE",
      ],
    },
    {
      label: "Check-in",
      icon: "/images/filter-icon-year.svg",
      options: ["Anytime", "Oct 14", "Oct 15", "Oct 16"],
    },
    {
      label: "Check-out",
      icon: "/images/filter-icon-year.svg",
      options: ["Anytime", "Oct 20", "Oct 21", "Oct 22"],
    },
    {
      label: "Guests",
      icon: "/images/filter-icon-type.svg",
      options: ["1 Guest", "2 Guests", "3 Guests", "4+ Guests"],
    },
    {
      label: "Pricing Range",
      icon: "/images/filter-icon-price.svg",
      options: ["$100 - $300", "$300 - $600", "$600 - $1,000", "$1,000+"],
    },
  ];

  return (
    <section>
      {/* Hero Text Background */}
      <div className="w-full prop border-b border-border/50">
        <div className="max-w-[1500px] mx-auto px-6 pt-16 md:pt-24 pb-48 md:pb-40">
          <h1 className="text-[28px] md:text-[38px] lg:text-[48px] text-white mb-6">
            Find Your Dream Property
          </h1>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-4xl">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
            begins here.
          </p>
        </div>
      </div>

      {/* Search & Filter Section - Overlapping */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-40 md:-mt-[40px] relative z-10 pb-16 md:pb-24 flex flex-col gap-3">
        {/* Search Bar Container */}
        <div className="w-full max-w-[900px] search mx-auto p-2.5 flex items-center justify-between">
          <div className="flex-1 px-4 flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search For A Property"
              className="w-full bg-transparent text-white placeholder:text-[#666666] outline-none text-base"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-[8px] transition-colors flex-shrink-0">
            <span className="hidden md:block">Find Property</span>
            <span className="md:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Filters Container */}
        <div className="w-full bg-[#1A1A1A] p-3 rounded-[12px] border border-border/50 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {filters.map((filter) => (
            <div key={filter.label} className="relative">
              <button
                onClick={() => toggleDropdown(filter.label)}
                className={`w-full flex items-center justify-between px-4 py-3 bg-surface border ${openDropdown === filter.label ? "border-primary" : "border-border"} rounded-[8px] cursor-pointer hover:border-text-secondary transition-colors group text-left`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={filter.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-white text-sm truncate">
                    {filter.label}
                  </span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`opacity-50 group-hover:opacity-100 transition-transform duration-200 ${openDropdown === filter.label ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {openDropdown === filter.label && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-background border border-border rounded-[8px] overflow-hidden z-20 shadow-xl p-1">
                  {filter.options.map((option) => (
                    <div
                      key={option}
                      className="px-3 py-2 text-sm text-text-secondary hover:text-white hover:bg-surface rounded-[4px] cursor-pointer transition-colors"
                      onClick={() => toggleDropdown(filter.label)} // Close on select
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

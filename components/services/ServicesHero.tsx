"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/images/service-icon-1.png",
    title: "Find Your Dream Home",
    href: "/properties",
  },
  {
    icon: "/images/service-icon-2.png",
    title: "Unlock Property Value",
    href: "/services",
  },
  {
    icon: "/images/service-icon-3.png",
    title: "Effortless Property Management",
    href: "/services",
  },
  {
    icon: "/images/service-icon-4.png",
    title: "Smart Investments, Informed Decisions",
    href: "/services",
  },
];

export default function ServicesHero() {
  return (
    <section className="w-full">
      {/* Hero Text Background - Reusing 'prop' class for gradient if desired, or just dark bg */}
      <div className="w-full prop border-b border-border/50">
        <div className="max-w-[1500px] mx-auto px-6 pt-16 md:pt-24 pb-48 md:pb-40">
          <h1 className="text-[28px] md:text-[38px] lg:text-[48px]  text-white mb-6">
            Elevate Your Real Estate Experience
          </h1>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-4xl">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </div>

      {/* Services Grid - Overlapping */}
      <div className="max-w-[1500px] mx-auto px-6 -mt-40 md:-mt-28 relative z-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#141414] p-3 rounded-[12px] border border-border/50 shadow-2xl">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col items-center justify-center text-center border border-border rounded-[10px] bg-[#1A1A1A] p-6 py-10 hover:border-primary transition-colors"
            >
              {/* Arrow top-right */}
              <Image
                src="/images/arrow-icon.svg"
                alt=""
                width={24}
                height={24}
                className="absolute top-5 right-5 opacity-60 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />

              <Image
                src={service.icon}
                alt={service.title}
                width={52}
                height={52}
                className="mb-4"
              />

              <p className="text-white text-base font-medium leading-snug max-w-[200px]">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function CTA() {
  return (
    <section className="w-full">
      <ScrollAnimation>
        <div className="relative w-full overflow-hidden bg-surface border-y border-border">
          {/* Abstract Design Left */}
          <div className="absolute top-0 left-[-2%] w-[725px] h-full pointer-events-none">
            <Image
              src="/images/abstract-design-2.png"
              alt=""
              fill
              className="object-cover object-left"
              aria-hidden="true"
            />
          </div>

          {/* Abstract Design Right */}
          <div className="absolute top-0 right-[-1%] w-[566px] h-full pointer-events-none">
            <Image
              src="/images/abstract-design-1.png"
              alt=""
              fill
              className="object-cover object-right"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 max-w-[1500px] mx-auto px-6 py-16 md:py-18 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-[24px] md:text-[28px] lg:text-[30px] font-semibold text-white mb-4">
                Start Your Real Estate Journey Today
              </h2>
              <p className="text-text-secondary text-sm md:text-[15px] leading-[1.7]">
                Your dream property is just a click away. Whether you&apos;re
                looking for a new home, a strategic investment, or expert real
                estate advice, Arrivo is here to assist you every step of the
                way. Take the first step towards your real estate goals and
                explore our available properties or get in touch with our team
                for personalized assistance.
              </p>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <Link
                href="/properties"
                className="block w-full text-center lg:inline-block lg:w-auto px-8 py-4 bg-primary hover:bg-primary-hover rounded-[10px] text-white font-medium text-sm transition-all duration-200"
              >
                Explore Properties
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

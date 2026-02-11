import Image from "next/image";
import StatsCounter, { type Stat } from "@/components/ui/StatsCounter";

const stats: Stat[] = [
  { target: 200, suffix: "+", label: "Happy Customers" },
  { target: 10, suffix: "k+", label: "Properties For Clients" },
  { target: 16, suffix: "+", label: "Years of Experience" },
];

export default function AboutHero() {
  return (
    <section className="w-full bg-[#141414] ">
      <div className="max-w-[1500px] mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex-1">
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

            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] text-white mb-4">
              Our Journey
            </h1>
            <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed max-w-xl">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we&apos;ve
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>

            {/* Stats */}
            <StatsCounter stats={stats} />
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden border border-border">
              <Image
                src="/images/Image (9).png"
                alt="Our Journey"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

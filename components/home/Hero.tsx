import Image from "next/image";
import Link from "next/link";
import StatsCounter, { type Stat } from "@/components/ui/StatsCounter";

const stats: Stat[] = [
  { target: 200, suffix: "+", label: "Happy Customers" },
  { target: 10, suffix: "k+", label: "Properties For Clients" },
  { target: 16, suffix: "+", label: "Years of Experience" },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#141414]  overflow-hidden">
      <div className="relative flex flex-col-reverse lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 px-6 md:px-10 lg:pl-[max(2rem,calc((100vw-1500px)/2+2rem))] lg:pr-10 pt-12 pb-10 lg:pt-[230px] lg:pb-16 flex flex-col bg-[#141414] justify-center">
          {/* Heading */}
          <h1 className="text-[28px] -mt-[30px] sm:text-[40px] lg:text-[46px] font-medium leading-[1.2] text-white">
            Discover Your Dream Property with Estatein
          </h1>

          {/* Description */}
          <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-text-secondary max-w-[480px]">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
            <Link
              href="/about"
              className="w-full sm:w-auto text-center px-6 py-3.5 text-sm text-white border border-border rounded-[10px] hover:bg-surface-light transition-all duration-200"
            >
              Learn More
            </Link>
            <Link
              href="/properties"
              className="w-full sm:w-auto text-center px-6 py-3.5 text-sm text-white bg-primary hover:bg-primary-hover rounded-[10px] transition-all duration-200"
            >
              Browse Properties
            </Link>
          </div>

          {/* Stats with count-up animation */}
          <StatsCounter stats={stats} />
        </div>

        {/* Circular Rotating Badge - centered between left and right */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
          <Image
            src="/images/sub-container.png"
            alt="Discover Your Dream Property"
            width={100}
            height={100}
            className="animate-spin-slow"
          />
        </div>

        {/* Right Image - padded on mobile, flush on desktop */}
        <div className="relative p-6 lg:p-0 w-full lg:w-[50%] xl:w-[50%] flex-shrink-0">
          <div className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] rounded-[12px] lg:rounded-none overflow-visible">
            <Image
              src="/images/container.png"
              alt="Modern building"
              fill
              className="object-cover object-center lg:object-right rounded-[12px] lg:rounded-none"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Mobile rotating badge - bottom left of image */}
            <div className="lg:hidden absolute -bottom-4 left-0 z-10">
              <Image
                src="/images/sub-container.png"
                alt="Discover Your Dream Property"
                width={90}
                height={90}
                className="animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

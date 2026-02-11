"use client";

import Image from "next/image";

const features = [
  {
    icon: "/images/unlock-icon-valuation.png", 
    title: "Tenant Harmony",
    description:
      "Our Tenant Management services ensure that your tenants have a smooth experience and reducing vacancies.",
  },
  {
    icon: "/images/unlock-icon-marketing.png",
    title: "Maintenance Ease",
    description:
      "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
  },
  {
    icon: "/images/unlock-icon-negotiation.png",
    title: "Financial Peace of Mind",
    description:
      "Managing property finances can be complex. Our financial experts take care of rent collection.",
  },
  {
    icon: "/images/unlock-icon-closing.png", 
    title: "Legal Guardian",
    description:
      "Stay compliant with property laws and regulations effortlessly.",
  },
];

export default function EffortlessPropertyManagement() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#141414]">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
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
            Effortless Property Management
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl">
            Owning a property should be a pleasure, not a hassle. Arrivo&apos;s
            Property Management Service takes the stress out of property
            ownership, offering comprehensive solutions tailored to your needs.
            Explore the categories below to see how we can make property
            management effortless for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-border rounded-[12px] p-8 hover:border-border-light transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={68}
                    height={68}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Large Card */}
          <div className="relative md:col-span-2 bg-[#1A1A1A] border border-border rounded-[12px] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/images/abstract-design-4.png"
                alt=""
                fill
                className="object-cover opacity-30"
              />
            </div>

            <div className="relative z-10 max-w-xxl">
              <h3 className="text-[24px] md:text-[30px] text-white mb-4">
                Experience Effortless Property Management
              </h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                Ready to experience hassle-free property management? Explore our
                Property Management Service categories and let us handle the
                complexities while you enjoy the benefits of property ownership.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
              <button className="w-full md:w-auto px-8 py-4 bg-[#1A1A1A] border border-border hover:bg-[#262626] text-white rounded-[10px] text-sm font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

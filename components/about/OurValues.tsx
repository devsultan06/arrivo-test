import Image from "next/image";

const values = [
  {
    icon: "/images/value-icon-trust.png",
    title: "Trust",
    description:
      "Trust is the cornerstone of every successful real estate transaction.",
  },
  {
    icon: "/images/value-icon-excellence.png",
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    icon: "/images/value-icon-client.png",
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    icon: "/images/value-icon-commitment.png",
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service, professionalism, and support.",
  },
];

export default function OurValues() {
  return (
    <section className="w-full bg-[#141414]">
      <div className="max-w-[1500px] mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:w-[490px] flex-shrink-0">
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
              Our Values
            </h2>
            <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>

          {/* Right - Values Grid */}
          <div className="flex-1 box w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8 p-4 md:p-12">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-4 sm:p-4 border-b border-border sm:border-none last:border-b-0"
                >
                  <div className="flex items-center gap-3 mb-4">
                                       <Image
                      src={value.icon}
                      alt={value.title}
                      width={48}
                      height={48}
                    />

                    <h3 className="text-white text-lg font-semibold">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

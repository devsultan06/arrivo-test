import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    step: "02",
    title: "Narrowing Down Your Choices",
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: "03",
    title: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    step: "04",
    title: "See It for Yourself",
    description:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    step: "05",
    title: "Making Informed Decisions",
    description:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    step: "06",
    title: "Getting the Best Deal",
    description:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

export default function NavigatingExperience() {
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
            Navigating the Estatein Experience
          </h2>
          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed max-w-3xl">
            At Estatein, we&apos;ve designed a straightforward process to help
            you find and purchase your dream property with ease. Here&apos;s a
            step-by-step guide to how it all works.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((item) => (
            <div key={item.step}>
              {/* Step Label - above the card */}
              <div className="step-label pl-4 py-3 mb-0">
                <span className="text-white text-sm font-medium">
                  Step {item.step}
                </span>
              </div>

              {/* Card */}
              <div className="step-card p-8">
                <h3 className="text-white text-lg md:text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

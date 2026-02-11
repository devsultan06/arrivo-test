import Image from "next/image";

const achievements = [
  {
    title: "3+ Years of Excellence",
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    title: "Happy Clients",
    description:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

export default function OurAchievements() {
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
            Our Achievements
          </h2>
          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed max-w-3xl">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item) => (
            <div key={item.title} className="box p-[50px]">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

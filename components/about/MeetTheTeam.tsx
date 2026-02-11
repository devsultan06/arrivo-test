import Image from "next/image";

const teamMembers = [
  {
    image: "/images/team-max.png",
    name: "Max Mitchell",
    role: "Founder",
  },
  {
    image: "/images/team-sarah.png",
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
  },
  {
    image: "/images/team-david.png",
    name: "David Brown",
    role: "Head of Property Management",
  },
  {
    image: "/images/team-michael.png",
    name: "Michael Turner",
    role: "Legal Counsel",
  },
];

export default function MeetTheTeam() {
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
            Meet the Estatein Team
          </h2>
          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed max-w-3xl">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="box p-5 flex flex-col items-center text-center"
            >
              {/* Photo */}
              <div className="relative w-full aspect-square rounded-[10px] overflow-visible mb-6">
                <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.32 3.91A12.16 12.16 0 013.16 4.86a4.28 4.28 0 001.33 5.71 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.27 4.27 0 01-1.93.07 4.28 4.28 0 004 2.97A8.58 8.58 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0024 5.06a8.57 8.57 0 01-2.54.7z" />
                  </svg>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-white text-lg font-semibold">
                {member.name}
              </h3>
              <p className="text-text-secondary text-sm mt-1 mb-5">
                {member.role}
              </p>

              {/* Say Hello Button */}
              <div className="w-full flex items-center px-4 py-3 rounded-full bg-background border border-border">
                <span className="flex-1 text-white text-sm text-left">
                  Say Hello 👋
                </span>
                <button className="w-9 h-9 flex-shrink-0 rounded-full bg-primary hover:bg-primary-hover flex items-center justify-center transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

export default function Services() {
  return (
    <section className="w-full bg-surface">
      <div className="max-w-[1500px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col items-center justify-center text-center border border-border rounded-[12px] bg-background p-7 py-10 hover:border-primary/30 transition-colors"
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
              <p className="text-white text-base font-medium">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

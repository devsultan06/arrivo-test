import Image from "next/image";

export interface TestimonialItem {
  title: string;
  review: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {Array.from({ length: rating }).map((_, i) => (
        <div
          key={i}
          className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center"
          style={{ background: "#1A1A1A" }}
        >
          <Image src="/images/Shape.svg" alt="star" width={18} height={18} />
        </div>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  title,
  review,
  name,
  location,
  avatar,
  rating,
}: TestimonialItem) {
  return (
    <div className="h-full flex flex-col justify-between border border-border rounded-[12px] bg-surface p-8 md:p-10">
      <div>
        <StarRating rating={rating} />
        <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">{review}</p>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
        <Image
          src={avatar}
          alt={name}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div>
          <p className="text-white text-sm font-medium">{name}</p>
          <p className="text-text-secondary text-xs">{location}</p>
        </div>
      </div>
    </div>
  );
}

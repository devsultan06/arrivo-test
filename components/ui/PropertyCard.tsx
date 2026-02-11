import Image from "next/image";
import Link from "next/link";

export interface PropertyItem {
  image: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  price: string;
  rating?: number;
  href?: string;
}

export default function PropertyCard({
  image,
  title,
  description,
  bedrooms,
  bathrooms,
  type,
  price,
  rating,
  href = "/properties",
}: PropertyItem) {
  return (
    <div className="h-full flex flex-col border border-border rounded-[12px] bg-surface overflow-hidden">
      {/* Property Image */}
      <div className="p-5 pb-0">
        <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-1 line-clamp-3">
          {description}
          <Link
            href={href}
            className="text-white underline underline-offset-4 hover:text-primary transition-colors ml-1"
          >
            Read More
          </Link>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-4 mb-5">
          {rating && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs text-white border border-border rounded-full bg-background">
              <span className="text-yellow-500">★</span>
              {rating}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs text-white border border-border rounded-full bg-background">
            <Image
              src="/images/BACKGROUND_2.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            {bedrooms}-Bedroom
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs text-white border border-border rounded-full bg-background">
            <Image
              src="/images/BACKGROUND_2 (1).svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            {bathrooms}-Bathroom
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs text-white border border-border rounded-full bg-background">
            <Image
              src="/images/BACKGROUND_2 (2).svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            {type}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-text-secondary text-xs mb-0.5">Price</p>
            <p className="text-white text-lg font-semibold">
              {price}
              <span className="text-sm font-normal text-text-secondary">
                {" "}
                / night
              </span>
            </p>
          </div>
          <Link
            href={href}
            className="inline-block px-5 py-3 text-sm text-white bg-primary hover:bg-primary-hover rounded-[10px] transition-colors font-medium"
          >
            View Property Details
          </Link>
        </div>
      </div>
    </div>
  );
}

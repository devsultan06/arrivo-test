export interface Property {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  location?: string;
  rating?: number;
  reviewsCount?: number;
  amenities?: string[];
  gallery?: string[];
  host?: {
    name: string;
    image: string;
    role: string;
  };
  availability?: boolean;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
    bedrooms: 4,
    bathrooms: 3,
    type: "Villa",
    price: "$550,000",
    image: "/images/Image (6).png",
    location: "Malibu, California",
    rating: 4.8,
    reviewsCount: 124,
    amenities: ["Pool", "Wi-Fi", "Parking", "Kitchen", "Air Conditioning"],
    gallery: [
      "/images/Image (6).png",
      "/images/Image (7).png",
      "/images/Image (8).png",
    ],
    host: {
      name: "Sarah Jenkins",
      image: "/images/team-sarah.png",
      role: "Superhost",
    },
    availability: true,
  },
  {
    id: "2",
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
    bedrooms: 2,
    bathrooms: 2,
    type: "Villa",
    price: "$550,000",
    image: "/images/Image (7).png",
    location: "New York, NY",
    rating: 4.9,
    reviewsCount: 85,
    amenities: ["Gym", "Wi-Fi", "Doorman", "Elevator"],
    gallery: [
      "/images/Image (7).png",
      "/images/Image (6).png",
      "/images/Image (8).png",
    ],
    host: {
      name: "Michael Turner",
      image: "/images/team-michael.png",
      role: "Host",
    },
    availability: true,
  },
  {
    id: "3",
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
    bedrooms: 3,
    bathrooms: 3,
    type: "Villa",
    price: "$550,000",
    image: "/images/Image (8).png",
    location: "Aspen, Colorado",
    rating: 4.7,
    reviewsCount: 42,
    amenities: ["Fireplace", "Hot Tub", "Parking", "Mountain View"],
    gallery: [
      "/images/Image (8).png",
      "/images/Image (6).png",
      "/images/Image (7).png",
    ],
    host: {
      name: "David Smith",
      image: "/images/team-david.png",
      role: "Host",
    },
    availability: true,
  },
  {
    id: "4",
    title: "Lakeside Manor",
    description:
      "A luxurious 5-bedroom estate with private dock and stunning lake views.",
    bedrooms: 5,
    bathrooms: 4,
    type: "Estate",
    price: "$1,200,000",
    image: "/images/Image (6).png",
    location: "Lake Tahoe, Nevada",
    rating: 5.0,
    reviewsCount: 15,
    amenities: ["Private Dock", "Boat House", "Study", "Game Room"],
    gallery: ["/images/Image (6).png"],
    host: {
      name: "Max Mitchell",
      image: "/images/team-max.png",
      role: "Luxury Agent",
    },
    availability: false,
  },
  {
    id: "5",
    image: "/images/Image (7).png",
    title: "Urban Skyline Penthouse",
    description:
      "A modern 3-bedroom penthouse with rooftop terrace and skyline panorama.",
    bedrooms: 3,
    bathrooms: 2,
    type: "Penthouse",
    price: "$850,000",
    location: "Chicago, Illinois",
    rating: 4.6,
    reviewsCount: 30,
    amenities: ["Rooftop Terrace", "Smart Home", "Private Elevator"],
    gallery: ["/images/Image (7).png"],
    host: {
      name: "Sarah Jenkins",
      image: "/images/team-sarah.png",
      role: "Superhost",
    },
    availability: true,
  },
  {
    id: "6",
    image: "/images/Image (8).png",
    title: "Garden Grove Residence",
    description:
      "A charming 4-bedroom family home surrounded by lush gardens and woodlands.",
    bedrooms: 4,
    bathrooms: 3,
    type: "House",
    price: "$420,000",
    location: "Portland, Oregon",
    rating: 4.8,
    reviewsCount: 55,
    amenities: ["Large Garden", "Greenhouse", "Workshop"],
    gallery: ["/images/Image (8).png"],
    host: {
      name: "David Smith",
      image: "/images/team-david.png",
      role: "Host",
    },
    availability: true,
  },
];

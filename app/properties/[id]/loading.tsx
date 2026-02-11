import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar />

      <main className="pt-24 pb-20 max-w-[1500px] mx-auto px-6 animate-pulse">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="w-full md:w-2/3">
            <div className="h-10 bg-[#1A1A1A] rounded-lg w-3/4 mb-4"></div>
            <div className="flex gap-4">
              <div className="h-5 bg-[#1A1A1A] rounded w-32"></div>
              <div className="h-5 bg-[#1A1A1A] rounded w-24"></div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 w-full md:w-auto">
            <div className="h-4 bg-[#1A1A1A] rounded w-24"></div>
            <div className="h-8 bg-[#1A1A1A] rounded w-32"></div>
          </div>
        </div>

        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[400px] md:h-[500px] mb-12 rounded-[20px] overflow-hidden">
          <div className="lg:col-span-2 bg-[#1A1A1A] h-full"></div>
          <div className="hidden lg:grid grid-rows-2 gap-4 col-span-1 h-full">
            <div className="bg-[#1A1A1A] h-full"></div>
            <div className="bg-[#1A1A1A] h-full"></div>
          </div>
          <div className="hidden lg:grid grid-rows-2 gap-4 col-span-1 h-full">
            <div className="bg-[#1A1A1A] h-full"></div>
            <div className="bg-[#1A1A1A] h-full"></div>
          </div>
        </div>

        {/* Content Layout Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="border-b border-border pb-8 mb-8">
              <div className="h-8 bg-[#1A1A1A] rounded w-48 mb-6"></div>
              <div className="h-4 bg-[#1A1A1A] rounded w-full mb-3"></div>
              <div className="h-4 bg-[#1A1A1A] rounded w-full mb-3"></div>
              <div className="h-4 bg-[#1A1A1A] rounded w-2/3 mb-6"></div>

              <div className="flex gap-6">
                <div className="h-16 w-32 bg-[#1A1A1A] rounded-[10px]"></div>
                <div className="h-16 w-32 bg-[#1A1A1A] rounded-[10px]"></div>
                <div className="h-16 w-32 bg-[#1A1A1A] rounded-[10px]"></div>
              </div>
            </div>

            {/* Amenities */}
            <div className="border-b border-border pb-8 mb-8">
              <div className="h-8 bg-[#1A1A1A] rounded w-48 mb-6"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-6 bg-[#1A1A1A] rounded w-full"></div>
                <div className="h-6 bg-[#1A1A1A] rounded w-full"></div>
                <div className="h-6 bg-[#1A1A1A] rounded w-full"></div>
                <div className="h-6 bg-[#1A1A1A] rounded w-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#1A1A1A] rounded-[16px] h-[400px]"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

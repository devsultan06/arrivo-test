"use client";

import { useState } from "react";
import Image from "next/image";

type FormDropdownProps = {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
};

const FormDropdown = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  isOpen,
  onToggle,
}: FormDropdownProps) => {
  return (
    <div className="flex flex-col gap-3 relative">
      <label className="text-white font-medium">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={onToggle}
          className={`w-full flex items-center justify-between bg-[#1A1A1A] border rounded-[8px] px-5 py-4 outline-none transition-colors ${
            isOpen ? "border-primary" : "border-border"
          }`}
        >
          <span className={`${value ? "text-white" : "text-[#666666]"}`}>
            {value || placeholder}
          </span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#999999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#1A1A1A] border border-border rounded-[8px] max-h-[200px] overflow-y-auto z-20 shadow-xl p-1">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  onToggle(); // Close after selection
                }}
                className="px-4 py-3 text-sm text-text-secondary hover:text-white hover:bg-[#262626] rounded-[4px] cursor-pointer transition-colors"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function LetsMakeItHappen() {
  const [contactMethod, setContactMethod] = useState<"phone" | "email">(
    "phone",
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    location: "",
    propertyType: "",
    bathrooms: "",
    bedrooms: "",
    budget: "",
  });

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleSelect = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="w-full bg-[#141414] py-16 md:py-24 border-b border-border/50">
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
            Let&apos;s Make it Happen
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don&apos;t wait; let&apos;s embark on this
            exciting journey together.
          </p>
        </div>

        {/* Form Container */}
        <div className="border border-border rounded-[12px] p-6 md:p-12">
          <form
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 md:gap-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* First Name */}
            <div className="flex flex-col gap-3">
              <label className="text-white font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full bg-[#1A1A1A] border border-border rounded-[8px] px-5 py-4 text-white placeholder:text-[#666666] outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-3">
              <label className="text-white font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full bg-[#1A1A1A] border border-border rounded-[8px] px-5 py-4 text-white placeholder:text-[#666666] outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label className="text-white font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full bg-[#1A1A1A] border border-border rounded-[8px] px-5 py-4 text-white placeholder:text-[#666666] outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3">
              <label className="text-white font-medium">Phone</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full bg-[#1A1A1A] border border-border rounded-[8px] px-5 py-4 text-white placeholder:text-[#666666] outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Preferred Location */}
            <FormDropdown
              label="Preferred Location"
              placeholder="Select Location"
              options={["USA", "UK", "UAE", "Canada"]}
              value={formData.location}
              onChange={(val) => handleSelect("location", val)}
              isOpen={openDropdown === "location"}
              onToggle={() => toggleDropdown("location")}
            />

            {/* Property Type */}
            <FormDropdown
              label="Property Type"
              placeholder="Select Property Type"
              options={["Villa", "Apartment", "House", "Penthouse"]}
              value={formData.propertyType}
              onChange={(val) => handleSelect("propertyType", val)}
              isOpen={openDropdown === "propertyType"}
              onToggle={() => toggleDropdown("propertyType")}
            />

            {/* No. of Bathrooms */}
            <FormDropdown
              label="No. of Bathrooms"
              placeholder="Select no. of Bathrooms"
              options={["1", "2", "3", "4+"]}
              value={formData.bathrooms}
              onChange={(val) => handleSelect("bathrooms", val)}
              isOpen={openDropdown === "bathrooms"}
              onToggle={() => toggleDropdown("bathrooms")}
            />

            {/* No. of Bedrooms */}
            <FormDropdown
              label="No. of Bedrooms"
              placeholder="Select no. of Bedrooms"
              options={["1", "2", "3", "4", "5+"]}
              value={formData.bedrooms}
              onChange={(val) => handleSelect("bedrooms", val)}
              isOpen={openDropdown === "bedrooms"}
              onToggle={() => toggleDropdown("bedrooms")}
            />

            {/* Budget */}
            <div className="md:col-span-1 lg:col-span-2">
              <FormDropdown
                label="Budget"
                placeholder="Select Budget"
                options={[
                  "$100k - $200k",
                  "$200k - $500k",
                  "$500k - $1M",
                  "$1M+",
                ]}
                value={formData.budget}
                onChange={(val) => handleSelect("budget", val)}
                isOpen={openDropdown === "budget"}
                onToggle={() => toggleDropdown("budget")}
              />
            </div>

            {/* Preferred Contact Method */}
            <div className="flex flex-col gap-3 md:col-span-1 lg:col-span-2">
              <label className="text-white font-medium">
                Preferred Contact Method
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => setContactMethod("phone")}
                  className={`flex items-center justify-between px-4 py-4 bg-[#1A1A1A] border rounded-[8px] cursor-pointer transition-colors ${contactMethod === "phone" ? "border-primary" : "border-border"}`}
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-white text-sm">
                      Enter Your Number
                    </span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${contactMethod === "phone" ? "border-primary" : "border-[#666666]"}`}
                  >
                    {contactMethod === "phone" && (
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    )}
                  </div>
                </div>

                <div
                  onClick={() => setContactMethod("email")}
                  className={`flex items-center justify-between px-4 py-4 bg-[#1A1A1A] border rounded-[8px] cursor-pointer transition-colors ${contactMethod === "email" ? "border-primary" : "border-border"}`}
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="text-white text-sm">Enter Your Email</span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${contactMethod === "email" ? "border-primary" : "border-[#666666]"}`}
                  >
                    {contactMethod === "email" && (
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-4">
              <label className="text-white font-medium">Message</label>
              <textarea
                placeholder="Enter your Message here.."
                className="w-full bg-[#1A1A1A] border border-border rounded-[8px] px-5 py-4 text-white placeholder:text-[#666666] outline-none focus:border-primary transition-colors h-[120px] resize-none"
              />
            </div>

            {/* Footer: Checkbox + Button */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:col-span-2 lg:col-span-4 mt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="hidden peer" />
                <div className="w-6 h-6 rounded-[4px] border border-border bg-[#1A1A1A] peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 peer-checked:opacity-100"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-text-secondary text-sm">
                  I agree with <span className="underline">Terms of Use</span>{" "}
                  and <span className="underline">Privacy Policy</span>
                </span>
              </label>

              <button
                type="submit"
                className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-[10px] text-sm font-medium transition-colors"
              >
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

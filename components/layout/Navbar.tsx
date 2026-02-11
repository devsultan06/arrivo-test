"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBannerClosed, setIsBannerClosed] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full">
      {/* Top Announcement Banner */}
      {!isBannerClosed && (
        <div
          className="w-full border-b border-border py-3 px-4 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: "url('/images/banner.png')" }}
        >
          <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-2 text-sm text-text-primary">
            <span>✨ Discover Your Dream Property with Estatein.</span>
            <Link
              href="/properties"
              className="text-text-primary underline underline-offset-4 hover:text-primary transition-colors ml-1"
            >
              Learn More
            </Link>
          </div>
          <button
            onClick={() => setIsBannerClosed(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-surface rounded-[75px] text-text-secondary hover:text-white transition-colors p-1"
            aria-label="Close banner"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 18L18 6M6 6L18 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="w-full bg-background border-b border-border">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/logo.svg"
              alt="Estatein Logo"
              width={34}
              height={34}
            />
            <span className="text-white text-xl font-semibold tracking-tight">
              Estatein
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2.5 text-sm rounded-[10px] transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-surface-light border-border border text-white font-medium"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-6 py-3 text-sm text-white border  border-border rounded-[10px] bg-surface-light transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden border-t border-border bg-background transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 text-sm rounded-lg transition-all ${
                  isActive(link.href)
                    ? "bg-surface-light text-white font-medium"
                    : "text-text-secondary hover:bg-surface-light hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="px-6 pb-4 pt-2 border-t border-border">
            <Link
              href="/contact"
              className="block text-center py-3 text-sm text-white border border-border-light rounded-lg hover:bg-surface-light transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

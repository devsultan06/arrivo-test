import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Home",
    links: [
      { label: "Hero Section", href: "/" },
      { label: "Features", href: "/" },
      { label: "Properties", href: "/properties" },
      { label: "Testimonials", href: "/" },
      { label: "FAQ's", href: "/" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Works", href: "/about" },
      { label: "How It Works", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Our Clients", href: "/about" },
    ],
  },
  {
    title: "Properties",
    links: [
      { label: "Portfolio", href: "/properties" },
      { label: "Categories", href: "/properties" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Valuation Mastery", href: "/services" },
      { label: "Strategic Marketing", href: "/services" },
      { label: "Negotiation Wizardry", href: "/services" },
      { label: "Closing Success", href: "/services" },
      { label: "Property Management", href: "/services" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Contact Form", href: "/contact" },
      { label: "Our Offices", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon
          points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
          fill="#1C1C1C"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-[1500px] mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Logo + Email */}
          <div className="lg:w-[300px] flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo.svg"
                alt="Estatein Logo"
                width={34}
                height={34}
              />
              <span className="text-white text-xl font-semibold">Estatein</span>
            </Link>

            {/* Email Input */}
            <div className="relative flex items-center border border-border rounded-[10px] overflow-hidden bg-surface">
              <div className="pl-4 text-text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 7H18V8C18 8.26522 18.1054 8.51957 18.2929 8.70711C18.4804 8.89464 18.7348 9 19 9C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V7H21C21.2652 7 21.5196 6.89464 21.7071 6.70711C21.8946 6.51957 22 6.26522 22 6C22 5.73478 21.8946 5.48043 21.7071 5.29289C21.5196 5.10536 21.2652 5 21 5H20V4C20 3.73478 19.8946 3.48043 19.7071 3.29289C19.5196 3.10536 19.2652 3 19 3C18.7348 3 18.4804 3.10536 18.2929 3.29289C18.1054 3.48043 18 3.73478 18 4V5H17C16.7348 5 16.4804 5.10536 16.2929 5.29289C16.1054 5.48043 16 5.73478 16 6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7ZM21 11C20.7348 11 20.4804 11.1054 20.2929 11.2929C20.1054 11.4804 20 11.7348 20 12V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V8.41L9.88 14.3C10.4425 14.8618 11.205 15.1774 12 15.1774C12.795 15.1774 13.5575 14.8618 14.12 14.3L16.59 11.83C16.7783 11.6417 16.8841 11.3863 16.8841 11.12C16.8841 10.8537 16.7783 10.5983 16.59 10.41C16.4017 10.2217 16.1463 10.1159 15.88 10.1159C15.6137 10.1159 15.3583 10.2217 15.17 10.41L12.7 12.88C12.5131 13.0632 12.2618 13.1659 12 13.1659C11.7382 13.1659 11.4869 13.0632 11.3 12.88L5.41 7H13C13.2652 7 13.5196 6.89464 13.7071 6.70711C13.8946 6.51957 14 6.26522 14 6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                    fill="#999999"
                  />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className=" bg-transparent text-sm text-white placeholder:text-text-muted px-3 py-3.5 outline-none"
              />
              <button
                className="px-4 py-3.5 text-white hover:text-primary transition-colors"
                aria-label="Send email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M26.7843 3.22287C26.1593 2.58412 25.2343 2.34787 24.3718 2.59787L4.25928 8.40912C3.34928 8.66162 2.70428 9.38287 2.53053 10.2979C2.35303 11.2304 2.97303 12.4154 3.78303 12.9104L10.0718 16.7504C10.7168 17.1454 11.5493 17.0466 12.083 16.5116L19.2843 9.31037C19.6468 8.93412 20.2468 8.93412 20.6093 9.31037C20.9718 9.67162 20.9718 10.2604 20.6093 10.6354L13.3955 17.8366C12.8605 18.3716 12.7605 19.2016 13.1543 19.8479L16.9968 26.1604C17.4468 26.9091 18.2218 27.3354 19.0718 27.3354C19.1718 27.3354 19.2843 27.3354 19.3843 27.3216C20.3593 27.1979 21.1343 26.5341 21.4218 25.5966L27.3843 5.63537C27.6468 4.78537 27.4093 3.86037 26.7843 3.22287Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    d="M11.8125 23.927C12.1775 24.2932 12.1775 24.887 11.8125 25.2532L10.105 26.9595C9.92253 27.1432 9.68253 27.2345 9.44253 27.2345C9.20253 27.2345 8.96253 27.1432 8.78003 26.9595C8.41378 26.5932 8.41378 26.0007 8.78003 25.6345L10.4863 23.927C10.8525 23.562 11.4463 23.562 11.8125 23.927ZM10.8329 19.192C11.1979 19.5582 11.1979 20.152 10.8329 20.5182L9.12541 22.2245C8.94291 22.4082 8.70291 22.4995 8.46291 22.4995C8.22291 22.4995 7.98291 22.4082 7.80041 22.2245C7.43416 21.8582 7.43416 21.2657 7.80041 20.8995L9.50666 19.192C9.87291 18.827 10.4667 18.827 10.8329 19.192ZM6.13141 17.7015C6.49641 18.0677 6.49641 18.6615 6.13141 19.0277L4.42391 20.734C4.24141 20.9177 4.00141 21.009 3.76141 21.009C3.52141 21.009 3.28141 20.9177 3.09891 20.734C2.73266 20.3677 2.73266 19.7752 3.09891 19.409L4.80516 17.7015C5.17141 17.3365 5.76516 17.3365 6.13141 17.7015Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Link Columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-white text-base font-medium mb-5">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-text-secondary text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-background">
        <div className="max-w-[1500px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright + Terms */}
          <div className="flex items-center gap-4 text-text-secondary text-sm">
            <p>@2023 Estatein. All Rights Reserved.</p>
            <Link
              href="/terms"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-white hover:bg-border transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

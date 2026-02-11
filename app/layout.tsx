import QueryProvider from "@/components/providers/QueryProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arrivo - Stay Discovery",
  description:
    "Find your perfect stay with Arrivo. Discover unique properties and plan your next trip effortlessly.",
  openGraph: {
    title: "Arrivo - Stay Discovery",
    description: "Discover short stay listings with ease.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/images/logo.svg" />
      <body className="">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

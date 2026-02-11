# Arrivo Stay Discovery App

A production-quality short stay discovery application built with Next.js 14, React, and Tailwind CSS.
Designed for the Arrivo Frontend Engineer Assessment.

## Features

- **Stay Discovery**: Browse short stay listings with advanced filtering.
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Performance Optimized**:
  - Server Components for initial load and SEO.
  - `next/image` for optimized image delivery.
  - Client components only where interactivity is required.
- **Search & Filter**: Filter by location, dates, guests, and price.
- **Interactive UI**: Custom dropdowns, swipers, and animated transitions.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Custom SVG icons & Lucide React
- **Animation**: CSS Transitions
- **Deployment**: Vercel (Optional)

## Rendering Strategy

We utilize **Next.js Server Components** as the default to ensure minimal JavaScript bundle size and maximum SEO performance.

- **Server Components**: Used for all layout wrappers, static content pages (Home, About, Services), and initial data fetching.
- **Client Components**: Used specifically for interactive elements such as:
  - `PropertiesHero` (Search/Filter state)
  - `MobileMenu` (Navigation state)
  - `Testimonials` & `FeaturedProperties` (Swiper interactions)
  - `LetsMakeItHappen` (Form handling)

This hybrid approach ensures excellent **Core Web Vitals** (LCP, CLS) while maintaining a rich user experience.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd real-estate
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## SEO & Accessibility

- **Semantic HTML**: Proper use of `<section>`, `<h1>`, `<button>`, etc.
- **Metadata**: Dynamic metadata for pages (Title, Description).
- **Responsiveness**: Fully responsive layouts for all device sizes.
- **Accessibility**: ARIA attributes on interactive elements, keyboard navigation support.

## Project Structure

- `/app`: App Router pages and layouts.
- `/components`: Reusable UI components (grouped by feature/page).
- `/public`: Static assets (images, icons).
- `/styles`: Global styles and Tailwind configuration.

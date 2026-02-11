"use client";

import { useEffect, useRef, useState, useCallback } from "react";

function useCountUp(target: number, duration: number = 2000, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out cubic for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function StatCard({
  target,
  suffix,
  label,
  start,
}: {
  target: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(target, 2000, start);

  return (
    <div className="px-5 py-4 border border-border rounded-[10px] bg-background text-center lg:text-left">
      <p className="text-xl md:text-2xl font-bold text-white">
        {count}
        {suffix}
      </p>
      <p className="text-xs md:text-sm text-text-secondary mt-1">{label}</p>
    </div>
  );
}

export type Stat = {
  target: number;
  suffix: string;
  label: string;
};

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    },
    [hasAnimated],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${
            index === 2 && stats.length === 3 ? "col-span-2 lg:col-span-1" : ""
          }`}
        >
          <StatCard
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            start={hasAnimated}
          />
        </div>
      ))}
    </div>
  );
}

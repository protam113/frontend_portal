'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from './Container';

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-main py-16 px-4">
      <Container className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10 text-center">
          <StatCounter
            value={50}
            suffix="+"
            label="Dự án hoàn thành"
            isVisible={isVisible}
          />
          <StatCounter
            value={100}
            suffix="+"
            label="Khách hàng hài lòng"
            isVisible={isVisible}
          />
          <StatCounter
            value={9000}
            suffix="+"
            label="Kinh nghiệm làm việc"
            isVisible={isVisible}
          />
          <StatCounter
            value={97}
            suffix="%"
            label="Tỷ lệ giữ chân khách hàng"
            isVisible={isVisible}
          />
        </div>
      </Container>
    </div>
  );
}

function StatCounter({
  value,
  suffix = '',
  label,
  isVisible,
}: {
  value: number;
  suffix?: string;
  label: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-white text-4xl md:text-5xl font-bold">
        {count}
        {suffix}
      </h3>
      <p className="text-white mt-2">{label}</p>
    </div>
  );
}

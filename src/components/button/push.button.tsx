'use client';

// components/button/PushButton.tsx
import React from 'react';
import { useRouter } from 'next/navigation';
import type { PushButtonProps } from '@/types/types.prob';
import { Arrows } from '@/assets/icons';

export const PushButton: React.FC<PushButtonProps> = ({ href, label }) => {
  const router = useRouter();
  const handlePush = () => {
    router.push(href);
  };

  return (
    <button
      onClick={handlePush}
      className="flex items-center justify-center w-[200px] h-10 space-x-2 p-2 bg-white text-black hover:bg-main-400 transition duration-300"
    >
      <span>{label}</span>
      <Arrows.ArrowRight />
    </button>
  );
};

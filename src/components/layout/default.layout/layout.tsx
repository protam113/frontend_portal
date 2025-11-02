'use client';

import React from 'react';

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <main>{children}</main>
    </div>
  );
}

'use client';

import { DefaultLayoutProps } from '@/types/props.type';
import React, { ReactNode } from 'react';

const AdminLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <main className="flex-1 ml-8">
      {/* <Breadcrumb /> */}
      <div>{children}</div>
    </main>
  );
};

export default AdminLayout;

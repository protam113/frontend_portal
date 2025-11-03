'use client';

import * as React from 'react';

import { NavMain } from './nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { NavService } from './nav-services';
import { NavAdmin } from './nav-admin';
import { useAuthStore } from '@/store/authStore';
import { data } from '@/lib';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const userInfo = useAuthStore((state) => state.userInfo);
  const { logout } = useAuthStore();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader />

      <SidebarContent>
        <NavMain items={data.navMain} />
        {userInfo?.role === 'admin' && <SidebarSeparator />}
        {userInfo?.role === 'admin' && <NavAdmin items={data.navAdmin} />}
        <SidebarSeparator />
        <NavService items={data.navService} />
      </SidebarContent>
    </Sidebar>
  );
}

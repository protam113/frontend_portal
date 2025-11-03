'use client';

import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { useAuthStore } from '@/store/authStore';
import { data, defaultData } from '@/lib';
import { NavMain } from '../AdminLayout/nav-main';
import { NavService } from '../AdminLayout/nav-services';
import { NavUser } from './nav-user';
import { NavBooking } from './nav-book';
import { NavData } from './nav-data';

export function DefaultSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const userInfo = useAuthStore((state) => state.userInfo);
  const { logout } = useAuthStore();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader />

      <SidebarContent>
        <NavMain items={defaultData.navMain} />
        {userInfo?.role === 'client' && <NavUser items={defaultData.navUser} />}
        <NavBooking items={defaultData.navService} />
        <NavData items={defaultData.navData} />

      </SidebarContent>
    </Sidebar>
  );
}

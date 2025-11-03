import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ChevronRight } from 'lucide-react';

import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib';

export function AdminBreadCrumb({ title }: { title: string }) {
  const path = usePathname();
  const pathArray = path
    ?.replace('/admin', '')
    .split('/')
    .filter((segment) => segment);

  return (
    <div className="w-full bg-blue-50 px-6 py-4">
      <Breadcrumb>
        <BreadcrumbList className="text-sm">
          <BreadcrumbItem>{title}</BreadcrumbItem>

          <BreadcrumbSeparator>:</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink
              href={ROUTES.DASHBOARD}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          {pathArray.map((segment, index) => {
            const href = '/' + pathArray.slice(0, index + 1).join('/');
            const isLast = index === pathArray.length - 1;

            return (
              <div key={href} className="flex items-center gap-2">
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </BreadcrumbSeparator>
                {isLast ? (
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-gray-900 font-medium capitalize">
                      {' '}
                      {segment}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={href}
                      className="text-gray-600 hover:text-gray-900 font-medium capitalize"
                    >
                      {segment}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

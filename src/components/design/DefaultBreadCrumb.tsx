'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ROUTES } from '@/lib';

const DefaultBreadcrumb = () => {
  const path = usePathname();

  const pathArray = path?.split('/').filter((p) => p);

  return (
    <div className="text-14 ml-2 mt-2 text-gray-500">
      {/* Home */}
      <Link href={ROUTES.HOME} passHref>
        <span className="hover:text-main mr-1">Trang Chủ</span>
      </Link>

      {pathArray?.map((segment, index) => {
        const href = '/' + pathArray.slice(0, index + 1).join('/');
        return (
          <span key={href}>
            &gt;
            {index === pathArray.length - 1 ? (
              <span className="ml-1 text-main capitalize">{segment}</span>
            ) : (
              <>
                <Link href={href} passHref>
                  <span className="hover:text-,ain/80 ml-1 capitalize">
                    {segment}
                  </span>
                </Link>
              </>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default DefaultBreadcrumb;

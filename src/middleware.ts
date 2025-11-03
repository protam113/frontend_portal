import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticatedCookie = request.cookies.get('isAuthenticated')?.value;
  const isAuthenticated = isAuthenticatedCookie === 'true';
  const path = request.nextUrl.pathname;

  const publicPages = ['/login', '/sign-up'];
  const isPublicPage = publicPages.includes(path);

  if (isAuthenticated && isPublicPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isAuthenticated && !isPublicPage) {
    return NextResponse.redirect(
      new URL(`/login?from=${encodeURIComponent(path)}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match tất cả request trừ các route:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, fonts (static assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|otf)).*)',
  ],
};
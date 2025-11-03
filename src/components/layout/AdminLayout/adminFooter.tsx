'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto mb-4 max-w-7xl text-gray-600 font-semibold text-sm">
        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center  ">
          <footer className="text-center text-sm text-gray-500 py-4">
            © {new Date().getFullYear()} All rights reserved. — by{' '}
            <Link
              href="https://vietstrix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vietstrix
            </Link>
          </footer>

          <div className="flex flex-col md:flex-row items-center ">
            <span>+84 265 847 483</span>
            <span className="hidden md:inline">|</span>
            <span>unienvn@gmail.com</span>
          </div>

          <div className="flex flex-col md:flex-row items-center ">
            <span>Ho Chi Minh City, VietNam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

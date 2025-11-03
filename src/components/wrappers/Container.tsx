import type { ContainerProps } from '@/types/types.prob';

export function Container({ children, className }: ContainerProps) {
  return (
    <main className={`w-full mx-auto container  py-4  ${className}`}>
      {children}
    </main>
  );
}

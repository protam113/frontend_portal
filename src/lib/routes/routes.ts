import { ENV } from '../env';
import { VIA_SECTIONS } from './via';

function deepFreeze<T>(obj: T): T {
  Object.getOwnPropertyNames(obj).forEach((key) => {
    const prop = (obj as any)[key];
    if (typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

// Định nghĩa kiểu RouteMap tùy chỉnh cho ROUTES
type RouteMap = {
  readonly HOME: string;
  readonly ABOUT: string;
  readonly VIA_ART_FAIR: {
    readonly ROOT: string;
    readonly DETAIL: (slug: string) => string;
    readonly ID: string;
  };
};

export const ROUTES: Readonly<RouteMap> = deepFreeze({} as const);

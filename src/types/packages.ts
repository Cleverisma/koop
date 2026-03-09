export type PackageCategory =
  | 'playa-y-aventura'
  | 'europa'
  | 'nacionales'
  | 'bus'
  | 'miniturismo';

export interface TourPackage {
    id: string;
    title: string;
    category: PackageCategory;
    price: number;
    currency: 'ARS' | 'USD';
    duration: string;
    image_url: string;
    includes: string[];
}

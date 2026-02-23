export interface TourPackage {
    id: string;
    title: string;
    destination: string;
    price: number;
    currency: 'ARS' | 'USD';
    duration: { days: number; nights: number };
    imageUrl: string;
    rating: number;
    includes: string[]; // ej: ['Vuelo', 'Hotel', 'Traslados', 'Asistencia']
    featured: boolean;
}

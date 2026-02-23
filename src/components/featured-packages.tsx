import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuMapPin, LuCalendar, LuStar } from '@qwikest/icons/lucide';
import type { TourPackage } from '../types/packages';

interface FeaturedPackagesProps {
    packages: TourPackage[];
}

export const FeaturedPackages = component$<FeaturedPackagesProps>(({ packages }) => {
    return (
        <section class="py-20 md:py-28 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div class="max-w-2xl">
                        <h2 class="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">
                            Destinos Destacados
                        </h2>
                        <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Explora nuestras opciones más populares y elegidas por nuestros viajeros.
                            Garantía de calidad y excelentes precios.
                        </p>
                    </div>
                    <button class="hidden md:inline-flex items-center justify-center text-blue-600 font-bold hover:text-blue-800 transition-colors group text-lg">
                        Ver todos los paquetes
                        <svg class="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {packages.length > 0 ? (
                        packages.map((pkg) => (
                            <div key={pkg.id} class="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col group border border-gray-100">
                                {/* Image Container */}
                                <div class="relative h-72 overflow-hidden bg-gray-200">
                                    <img
                                        src={pkg.imageUrl}
                                        alt={pkg.title}
                                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    {/* Overlay Gradient for readability */}
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Badges */}
                                    <div class="absolute top-4 right-4 flex flex-col gap-2">
                                        <div class="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-blue-900 shadow-sm flex items-center gap-1.5 border border-white/20">
                                            <LuCalendar class="w-4 h-4 text-orange-500" />
                                            {pkg.duration.days} Días / {pkg.duration.nights} Noches
                                        </div>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div class="p-6 md:p-8 flex flex-col flex-1 relative bg-white">
                                    <div class="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                                        <LuMapPin class="w-4 h-4 text-gray-400 shrink-0" />
                                        <span class="truncate">{pkg.destination}</span>
                                        <span class="mx-1 shrink-0">•</span>
                                        <div class="flex items-center gap-1 text-yellow-500 shrink-0">
                                            <LuStar class="w-4 h-4 fill-current" />
                                            <span class="text-gray-700 font-bold">{pkg.rating}</span>
                                        </div>
                                    </div>

                                    <h3 class="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {pkg.title}
                                    </h3>

                                    <div class="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Desde</span>
                                            <span class="text-3xl font-black text-blue-600">
                                                {pkg.currency === 'USD' ? 'US$' : '$'}{pkg.price.toLocaleString('es-AR')}
                                            </span>
                                        </div>
                                        <Link
                                            href={`/paquete/${pkg.id}`}
                                            class="bg-orange-500 text-white hover:bg-orange-600 font-bold py-3.5 px-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(249,115,22,0.3)] w-full sm:w-auto text-center shrink-0 flex items-center justify-center"
                                        >
                                            Ver Detalles
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div class="col-span-full py-16 text-center">
                            <p class="text-xl md:text-2xl font-bold text-gray-600">No se encontraron paquetes para esta búsqueda</p>
                            <p class="text-gray-500 mt-2">Intenta buscar con otro destino o elimina los filtros para ver todos los paquetes.</p>
                        </div>
                    )}
                </div>

                <button class="mt-12 w-full md:hidden flex flex-row items-center justify-center text-blue-600 font-bold bg-blue-50 hover:bg-blue-100 transition-colors py-4 rounded-2xl text-lg">
                    Ver todos los paquetes
                    <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
            </div>
        </section>
    );
});

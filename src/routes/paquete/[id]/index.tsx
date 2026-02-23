import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead, Link } from '@builder.io/qwik-city';
import { tursoClient } from '~/utils/turso';
import type { TourPackage } from '~/types/packages';
import { LuMapPin, LuCalendar, LuStar, LuCheckCircle2, LuMessageCircle, LuArrowLeft } from '@qwikest/icons/lucide';

// Constante para el número de WhatsApp - debe tener formato internacional
const WHATSAPP_NUMBER = '5491100000000';

export const usePackageDetails = routeLoader$<TourPackage | null>(async (requestEvent) => {
    try {
        const db = tursoClient(requestEvent);
        const id = requestEvent.params.id;

        const result = await db.execute({
            sql: "SELECT * FROM packages WHERE id = ?",
            args: [id]
        });

        if (!result.rows || result.rows.length === 0) {
            requestEvent.status(404);
            return null;
        }

        const row = result.rows[0];

        return {
            id: row.id as string,
            title: row.title as string,
            destination: row.destination as string,
            price: Number(row.price),
            currency: (row.currency as 'ARS' | 'USD') || 'ARS',
            duration: {
                days: Number(row.duration_days),
                nights: Number(row.duration_nights)
            },
            imageUrl: row.image_url as string,
            rating: Number(row.rating),
            includes: row.includes ? JSON.parse(row.includes as string) : [],
            featured: Boolean(row.featured)
        };
    } catch (e) {
        console.error("Error fetching package details:", e);
        requestEvent.status(500);
        return null;
    }
});

export default component$(() => {
    const packageSignal = usePackageDetails();
    const pkg = packageSignal.value;

    if (!pkg) {
        return (
            <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
                <h1 class="text-4xl font-extrabold text-blue-900 mb-4">Paquete no encontrado</h1>
                <p class="text-gray-600 mb-8 max-w-md">Lo sentimos, no pudimos encontrar el paquete que estás buscando o un error ocurrió en el servidor.</p>
                <Link href="/landing" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
                    <LuArrowLeft class="w-5 h-5" />
                    Volver a los destinos
                </Link>
            </div>
        );
    }

    // Mensaje para enviar al WhatsApp
    const whatsappMessage = `Hola Koop Viajes, me interesa el paquete "${pkg.title}" (${pkg.id}) con destino a ${pkg.destination}. ¿Me podrían dar más información?`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div class="min-h-screen bg-gray-50 font-sans pb-24">

            {/* Hero Section */}
            <section class="relative h-[40vh] md:h-[50vh] min-h-[300px] w-full bg-blue-900 flex items-center justify-center">
                <div
                    class="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${pkg.imageUrl}")` }}
                ></div>
                <div class="absolute inset-0 bg-black/50 z-10"></div>

                <div class="relative z-20 text-center px-4 pt-16 mt-8 max-w-4xl mx-auto">
                    <Link href="/landing" class="absolute top-0 left-4 text-white hover:text-orange-400 flex items-center gap-2 font-medium transition-colors bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <LuArrowLeft class="w-5 h-5" />
                        Atrás
                    </Link>
                    <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg mb-4">
                        {pkg.title}
                    </h1>
                </div>
            </section>

            {/* Content Container */}
            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column - Details */}
                    <div class="lg:col-span-2 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col gap-8">

                        {/* Highlights Grid */}
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 pb-8 border-b border-gray-100">
                            <div class="flex flex-col gap-2">
                                <span class="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5"><LuMapPin class="w-4 h-4 text-blue-500" /> Destino</span>
                                <span class="text-lg font-bold text-gray-900">{pkg.destination}</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <span class="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5"><LuCalendar class="w-4 h-4 text-orange-500" /> Duración</span>
                                <span class="text-lg font-bold text-gray-900">{pkg.duration.days} Días / {pkg.duration.nights} Noches</span>
                            </div>
                            <div class="flex flex-col gap-2 col-span-2 md:col-span-1">
                                <span class="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5"><LuStar class="w-4 h-4 text-yellow-500 fill-yellow-500" /> Rating</span>
                                <span class="text-lg font-bold text-gray-900 flex items-center gap-1">
                                    {pkg.rating} <span class="text-sm font-medium text-gray-500"> / 5.0 Excelente</span>
                                </span>
                            </div>
                        </div>

                        {/* Description / Overview placeholder */}
                        <div>
                            <h2 class="text-2xl font-bold text-blue-900 mb-4">Resumen de tu Viaje</h2>
                            <p class="text-lg text-gray-600 leading-relaxed">
                                Prepárate para vivir una experiencia inolvidable en {pkg.destination}. Este paquete ha sido cuidadosamente diseñado
                                para asegurar que cada momento de tu viaje sea perfecto, ofreciéndote lo mejor en comodidad, emocionantes actividades
                                y atención al cliente de primer nivel.
                            </p>
                        </div>

                        {/* Includes Section */}
                        {pkg.includes && pkg.includes.length > 0 && (
                            <div class="bg-blue-50 rounded-2xl p-6 md:p-8">
                                <h3 class="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                    <LuCheckCircle2 class="w-6 h-6 text-blue-600" />
                                    ¿Qué incluye el paquete?
                                </h3>
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                    {pkg.includes.map((item, index) => (
                                        <li key={index} class="flex items-start gap-3 text-gray-700 font-medium text-lg">
                                            <div class="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>

                    {/* Right Column - Booking Card (Sticky) */}
                    <div class="lg:col-span-1 sticky top-6">
                        <div class="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 text-center flex flex-col gap-6">

                            <div class="flex flex-col border-b border-gray-100 pb-6">
                                <span class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Precio por pasajero titular</span>
                                <div class="flex items-baseline justify-center gap-1">
                                    <span class="text-xl font-bold text-gray-900">{pkg.currency === 'USD' ? 'US$' : '$'}</span>
                                    <span class="text-5xl font-black text-blue-600 tracking-tighter">{pkg.price.toLocaleString('es-AR')}</span>
                                </div>
                                <span class="text-sm text-gray-400 mt-2 font-medium">Impuestos incluídos</span>
                            </div>

                            <p class="text-gray-600 mb-2">
                                Completa el último paso. Escríbenos por WhatsApp asegurando tu cupo con un asesor hoy mismo.
                            </p>

                            {/* Main CTA */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-lg py-5 px-6 rounded-2xl shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_12px_25px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-3 group"
                            >
                                <LuMessageCircle class="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                                Cotizar por WhatsApp
                            </a>

                            {/* Trust badges */}
                            <div class="mt-2 flex flex-col gap-2 text-sm text-gray-500">
                                <span class="flex items-center justify-center gap-2">✓ Atención 100% personalizada</span>
                                <span class="flex items-center justify-center gap-2">✓ Asesoramiento experto gratuito</span>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
});

export const head: DocumentHead = ({ resolveValue }) => {
    const pkg = resolveValue(usePackageDetails);

    return {
        title: pkg ? `${pkg.title} - Koop Viajes` : 'Paquete no encontrado - Koop Viajes',
        meta: [
            {
                name: 'description',
                content: pkg
                    ? `Descubre los detalles increíbles de la escapada a ${pkg.destination} por solo ${pkg.price}.`
                    : 'Detalles del paquete seleccionado en Koop Viajes',
            },
        ],
    };
};

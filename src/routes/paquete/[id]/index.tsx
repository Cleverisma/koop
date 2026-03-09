import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead, Link } from '@builder.io/qwik-city';
import { LuMapPin, LuCalendar, LuCheckCircle2, LuMessageCircle, LuArrowLeft } from '@qwikest/icons/lucide';
import { mockPackages } from '../../../mocks/packages.mock';
import type { TourPackage } from '../../../types/packages';

const WHATSAPP_NUMBER = '5491152604447';

export const usePackageDetails = routeLoader$<TourPackage | undefined>((requestEvent) => {
    const id = requestEvent.params.id;
    const pkg = mockPackages.find((p) => p.id === id);
    if (!pkg) {
        requestEvent.status(404);
    }
    return pkg;
});

export default component$(() => {
    const packageSignal = usePackageDetails();
    const pkg = packageSignal.value;

    if (!pkg) {
        return (
            <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
                <h1 class="text-4xl font-extrabold text-blue-900 mb-4">Paquete no encontrado</h1>
                <p class="text-gray-600 mb-8 max-w-md">Lo sentimos, no pudimos encontrar el paquete que estás buscando.</p>
                <Link href="/landing" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
                    <LuArrowLeft class="w-5 h-5" />
                    Volver a los destinos
                </Link>
            </div>
        );
    }

    const whatsappMessage = `¡Hola Koop Viajes! Me interesa el paquete "${pkg.title}" (${pkg.id}). ¿Me podrían dar más información?`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div class="min-h-screen bg-gray-50 font-sans pb-24">
            <section class="relative h-[40vh] md:h-[50vh] min-h-[300px] w-full bg-blue-900 flex items-center justify-center">
                <div
                    class="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${pkg.image_url}")` }}
                ></div>
                <div class="absolute inset-0 bg-black/50 z-10"></div>

                <div class="relative z-20 text-center px-4 pt-16 mt-8 max-w-4xl mx-auto">
                    <Link href="/landing" class="absolute top-0 left-4 text-white hover:text-orange-400 flex items-center gap-2 font-medium transition-colors bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <LuArrowLeft class="w-5 h-5" />
                        Atrás
                    </Link>
                    <div class="flex items-center justify-center gap-2 text-blue-200 mb-4 font-semibold uppercase tracking-widest text-sm bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-max mx-auto border border-white/20">
                        <LuMapPin class="w-4 h-4" />
                        <span class="capitalize">{pkg.category.replace(/-/g, ' ')}</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg mb-4">
                        {pkg.title}
                    </h1>
                </div>
            </section>

            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div class="lg:col-span-2 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col gap-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-gray-100">
                            <div class="flex flex-col gap-2">
                                <span class="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5"><LuCalendar class="w-5 h-5 text-orange-500" /> Duración</span>
                                <span class="text-2xl font-bold text-gray-900">{pkg.duration}</span>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-2xl font-bold text-blue-900 mb-4">Resumen de tu Viaje</h2>
                            <p class="text-lg text-gray-600 leading-relaxed">
                                Prepárate para vivir una experiencia inolvidable. Este paquete ha sido cuidadosamente diseñado
                                para asegurar que cada momento de tu viaje sea perfecto, ofreciéndote lo mejor en comodidad, emocionantes actividades
                                y atención al cliente de primer nivel.
                            </p>
                        </div>

                        {pkg.includes && pkg.includes.length > 0 && (
                            <div class="bg-blue-50 rounded-2xl p-6 md:p-8">
                                <h3 class="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                    <LuCheckCircle2 class="w-6 h-6 text-blue-600" />
                                    ¿Qué incluye el paquete?
                                </h3>
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                    {pkg.includes.map((item, index) => (
                                        <li key={index} class="flex items-start gap-3 text-gray-700 font-medium text-lg">
                                            <div class="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

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

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-lg py-5 px-6 rounded-2xl shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_12px_25px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-3 group"
                            >
                                <LuMessageCircle class="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                                Cotizar por WhatsApp
                            </a>

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

    if (!pkg) {
        return {
            title: 'Paquete no encontrado - Koop Viajes',
        }
    }

    return {
        title: `${pkg.title} - Koop Viajes`,
        meta: [
            {
                name: 'description',
                content: `Descubre los detalles increíbles de este paquete por solo ${pkg.currency === 'USD' ? 'US$' : '$'}${pkg.price.toLocaleString('es-AR')}.`,
            },
        ],
    };
};

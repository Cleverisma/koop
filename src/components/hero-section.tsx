import { component$ } from '@builder.io/qwik';
import { LuSearch, LuMapPin, LuCalendar, LuUsers } from '@qwikest/icons/lucide';

export const HeroSection = component$(() => {
    return (
        <section class="relative bg-blue-600 text-white py-20 md:py-32 xl:py-40 overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop")' }}
            ></div>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-transparent z-10"></div>

            <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left">

                <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-md">
                    El viaje de tus sueños <br class="hidden lg:block" />
                    <span class="text-blue-200">empieza hoy</span>
                </h1>

                <p class="text-lg md:text-xl md:leading-relaxed text-blue-50 max-w-2xl mb-12 drop-shadow">
                    Explora los destinos más increíbles con la confianza y seguridad que solo Koop te puede ofrecer. Paquetes diseñados a tu medida.
                </p>

                {/* Simplified Search Widget */}
                <form method="get" action="/landing" class="w-full max-w-5xl bg-white rounded-3xl p-3 sm:p-4 shadow-2xl flex flex-col md:flex-row gap-3 items-center">

                    {/* Destination */}
                    <div class="flex-1 w-full relative">
                        <div class="flex items-center gap-3 bg-gray-50 border border-transparent rounded-2xl px-5 py-4 hover:bg-gray-100 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                            <LuMapPin class="w-6 h-6 text-blue-600 shrink-0" />
                            <div class="flex flex-col w-full">
                                <span class="text-xs font-bold text-gray-500 uppercase tracking-wider text-left">Destino</span>
                                <input
                                    type="text"
                                    name="destino"
                                    placeholder="¿A dónde quieres ir?"
                                    class="w-full bg-transparent text-gray-900 font-medium placeholder-gray-400 outline-none text-base sm:text-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="hidden md:block w-px h-12 bg-gray-200"></div>

                    {/* Dates */}
                    <div class="flex-1 w-full relative">
                        <div class="flex items-center gap-3 bg-gray-50 border border-transparent rounded-2xl px-5 py-4 hover:bg-gray-100 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                            <LuCalendar class="w-6 h-6 text-blue-600 shrink-0" />
                            <div class="flex flex-col w-full cursor-text">
                                <span class="text-xs font-bold text-gray-500 uppercase tracking-wider text-left">Fechas</span>
                                <input
                                    type="text"
                                    placeholder="Ida y vuelta"
                                    class="w-full bg-transparent text-gray-900 font-medium placeholder-gray-400 outline-none text-base sm:text-lg"
                                    onFocus$={(e: any) => e.target.type = 'date'}
                                    onBlur$={(e: any) => e.target.type = 'text'}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="hidden md:block w-px h-12 bg-gray-200"></div>

                    {/* Passengers */}
                    <div class="flex-1 w-full relative">
                        <div class="flex items-center gap-3 bg-gray-50 border border-transparent rounded-2xl px-5 py-4 hover:bg-gray-100 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                            <LuUsers class="w-6 h-6 text-blue-600 shrink-0" />
                            <div class="flex flex-col w-full relative">
                                <span class="text-xs font-bold text-gray-500 uppercase tracking-wider text-left">Pasajeros</span>
                                <select class="w-full bg-transparent text-gray-900 font-medium outline-none text-base sm:text-lg appearance-none cursor-pointer">
                                    <option value="1">1 Pasajero</option>
                                    <option value="2" selected>2 Pasajeros</option>
                                    <option value="3">3 Pasajeros</option>
                                    <option value="4+">4 o más</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button type="submit" class="w-full md:w-auto h-full min-h-[72px] bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_12px_25px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-2 group flex-shrink-0">
                        <LuSearch class="w-6 h-6 transition-transform group-hover:scale-110" />
                        <span class="text-lg">Buscar</span>
                    </button>
                </form>
            </div>
        </section>
    );
});

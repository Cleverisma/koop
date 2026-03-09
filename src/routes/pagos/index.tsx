import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { LuCreditCard, LuWallet } from '@qwikest/icons/lucide';

export default component$(() => {
    return (
        <div class="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 class="text-4xl md:text-5xl font-black text-blue-900 mb-6 font-sans">Formas de Pago</h1>
            <p class="text-xl text-gray-600 max-w-2xl mb-12">Todas las opciones para financiar tu próximo viaje.</p>
            
            <div class="flex gap-8 justify-center items-center text-gray-400">
                <LuCreditCard class="w-16 h-16" />
                <LuWallet class="w-16 h-16" />
                {/* Mock de logos de tarjetas */}
                <div class="text-2xl font-bold bg-blue-900 text-white px-4 py-2 rounded-lg">VISA</div>
                <div class="text-2xl font-bold bg-orange-500 text-white px-4 py-2 rounded-lg">MasterCard</div>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Koop - Formas de Pago',
};

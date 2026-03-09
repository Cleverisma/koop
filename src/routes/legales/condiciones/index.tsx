import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <div class="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 class="text-4xl md:text-5xl font-black text-blue-900 mb-6 font-sans">Condiciones Generales</h1>
            <p class="text-xl text-gray-600 max-w-2xl">Aquí se detallarán las condiciones de compra y contratación de servicios turísticos.</p>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Koop - Condiciones Generales',
};

import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { tursoClient } from '~/utils/turso';
import type { TourPackage } from '~/types/packages';
import { HeroSection } from '~/components/hero-section';
import { FeaturedPackages } from '~/components/featured-packages';

export const usePackagesLoader = routeLoader$<TourPackage[]>(async (requestEvent) => {
    try {
        const db = tursoClient(requestEvent);
        const destino = requestEvent.query.get('destino');
        let result;

        if (destino) {
            const searchParam = `% ${destino}% `;
            result = await db.execute({
                sql: "SELECT * FROM packages WHERE destination LIKE ? OR title LIKE ?",
                args: [searchParam, searchParam]
            });
        } else {
            result = await db.execute("SELECT * FROM packages WHERE featured = 1");
        }

        return result.rows.map((row: any) => ({
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
        }));
    } catch (e) {
        console.error("Error fetching packages from Turso:", e);
        return [];
    }
});

export default component$(() => {
    const packagesSignal = usePackagesLoader();
    return (
        <div class="min-h-screen bg-white font-sans">
            <HeroSection />
            <FeaturedPackages packages={packagesSignal.value} />
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Koop Viajes - Tu próxima aventura empieza aquí',
    meta: [
        {
            name: 'description',
            content: 'Descubre los mejores destinos, paquetes exclusivos y vive experiencias inolvidables con Koop Viajes.',
        },
    ],
};

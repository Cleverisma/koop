import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { mockPackages } from '../../../mocks/packages.mock';
import type { TourPackage, PackageCategory } from '../../../types/packages';
import { FeaturedPackages } from '../../../components/featured-packages';

export const useCategoryPackages = routeLoader$<TourPackage[]>((requestEvent) => {
    const category = requestEvent.params.category as PackageCategory;
    return mockPackages.filter(pkg => pkg.category === category);
});

export default component$(() => {
    const packagesSignal = useCategoryPackages();
    
    return (
        <div class="pt-24 pb-12 bg-white min-h-screen w-full">
            <FeaturedPackages packages={packagesSignal.value} />
        </div>
    );
});

export const head: DocumentHead = ({ params }) => {
    const categoryName = params.category.replace(/-/g, ' ').toUpperCase();
    return {
        title: `Koop - ${categoryName}`,
        meta: [
            {
                name: 'description',
                content: `Descubre los mejores paquetes para ${categoryName}`,
            },
        ],
    };
};

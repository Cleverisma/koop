import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import type { TourPackage } from '../../types/packages';
import { mockPackages } from '../../mocks/packages.mock';
import { HeroSection } from '../../components/hero-section';
import { FeaturedPackages } from '../../components/featured-packages';

export const usePackagesLoader = routeLoader$<TourPackage[]>(() => {
    // Simulamos un fetch a una API o base de datos retornando los mocks
    // En el futuro, reemplazamos este retorno directo con la query real.
    return mockPackages;
});

export default component$(() => {
    const packagesSignal = usePackagesLoader();
    
    // Definimos las categorías que queremos mostrar y en qué orden
    const categories = [
        { id: 'playa-y-aventura', title: 'Playa y Aventura', subtitle: 'Relajate en el Caribe, Brasil y más destinos paradisíacos.' },
        { id: 'nacionales', title: 'Destinos Nacionales', subtitle: 'Recorré los paisajes más increíbles de Argentina con guía y asistencia.' },
        { id: 'europa', title: 'Europa Clásica', subtitle: 'Descubrí el encanto, la cultura y la historia del viejo continente.' },
        { id: 'bus', title: 'Escapadas en Bus', subtitle: 'Viajá cómodo, disfrutá del recorrido y ahorrá en tu próximo destino.' },
    ];
    
    return (
        <div class="bg-white font-sans w-full">
            <HeroSection />
            
            {categories.map((cat) => {
                const catPackages = packagesSignal.value.filter((p) => p.category === cat.id);
                
                // Solo renderizamos la sección si hay paquetes disponibles en la categoría
                if (catPackages.length === 0) return null;
                
                return (
                    <FeaturedPackages 
                        key={cat.id}
                        packages={catPackages} 
                        title={cat.title}
                        subtitle={cat.subtitle}
                    />
                );
            })}
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

import { component$, useSignal, useOnWindow, $, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuMenu, LuX } from '@qwikest/icons/lucide';

export const Header = component$(() => {
  const isScrolled = useSignal(false);
  const isMobileMenuOpen = useSignal(false);

  // Reaccionar al scroll global
  useOnWindow(
    'scroll',
    $(() => {
      isScrolled.value = window.scrollY > 20;
    })
  );

  return (
    <header
      class={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled.value
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/landing" class="flex-shrink-0 flex items-center gap-2 group">
            <span class={`text-3xl font-black tracking-tighter transition-colors ${isScrolled.value ? 'text-blue-900' : 'text-white drop-shadow-md'}`}>
               KOOP.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div class="hidden md:flex items-center space-x-8">
            <Link href="/paquetes/playa-y-aventura" class={`font-bold hover:text-orange-500 transition-colors ${isScrolled.value ? 'text-blue-900' : 'text-white drop-shadow-md'}`}>Playa</Link>
            <Link href="/paquetes/europa" class={`font-bold hover:text-orange-500 transition-colors ${isScrolled.value ? 'text-blue-900' : 'text-white drop-shadow-md'}`}>Europa</Link>
            <Link href="/paquetes/nacionales" class={`font-bold hover:text-orange-500 transition-colors ${isScrolled.value ? 'text-blue-900' : 'text-white drop-shadow-md'}`}>Argentina</Link>
            <Link href="/nosotros" class={`font-bold hover:text-orange-500 transition-colors ${isScrolled.value ? 'text-blue-900' : 'text-white drop-shadow-md'}`}>Nosotros</Link>
          </div>

          <div class="hidden md:flex items-center space-x-4">
            <Link 
              href="/contacto" 
              class={`px-6 py-2.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                isScrolled.value 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-white text-blue-900 hover:bg-blue-50'
              }`}
            >
              Contactanos
            </Link>
          </div>

          {/* Mobile menu button */}
          <div class="md:hidden flex items-center">
            <button
              onClick$={() => (isMobileMenuOpen.value = !isMobileMenuOpen.value)}
              class={`p-2 rounded-xl transition-colors ${isScrolled.value ? 'text-blue-900 hover:bg-blue-50' : 'text-white hover:bg-white/20'}`}
              aria-label="Menu"
            >
              {isMobileMenuOpen.value ? <LuX class="w-7 h-7" /> : <LuMenu class="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        class={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 md:hidden pt-20 ${
          isMobileMenuOpen.value ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div class="flex flex-col px-6 py-8 space-y-6 text-xl">
          <Link href="/paquetes/playa-y-aventura" class="font-bold text-blue-900 border-b border-gray-100 pb-4">Playa y Aventura</Link>
          <Link href="/paquetes/europa" class="font-bold text-blue-900 border-b border-gray-100 pb-4">Europa</Link>
          <Link href="/paquetes/nacionales" class="font-bold text-blue-900 border-b border-gray-100 pb-4">Destinos Nacionales</Link>
          <Link href="/nosotros" class="font-bold text-blue-900 border-b border-gray-100 pb-4">Sobre Nosotros</Link>
          <Link href="/contacto" class="bg-orange-500 text-white font-bold py-4 rounded-xl text-center shadow-md">
            Contactanos
          </Link>
        </div>
      </div>
    </header>
  );
});

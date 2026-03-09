import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuInstagram, LuFacebook } from '@qwikest/icons/lucide';
import { WhatsAppButton } from '../../whatsapp-button';

export const Footer = component$(() => {
  return (
    <footer class="bg-blue-950 text-white pt-16 pb-8 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Navegación a Categorías */}
          <div>
            <h3 class="text-xl font-bold mb-6 text-blue-100">Destinos</h3>
            <ul class="space-y-4">
              <li><Link href="/paquetes/playa-y-aventura" class="text-blue-200 hover:text-white transition-colors">Playa y Aventura</Link></li>
              <li><Link href="/paquetes/europa" class="text-blue-200 hover:text-white transition-colors">Europa</Link></li>
              <li><Link href="/paquetes/nacionales" class="text-blue-200 hover:text-white transition-colors">Nacionales (Argentina)</Link></li>
              <li><Link href="/paquetes/bus" class="text-blue-200 hover:text-white transition-colors">Paquetes en Bus</Link></li>
              <li><Link href="/paquetes/miniturismo" class="text-blue-200 hover:text-white transition-colors">Miniturismo</Link></li>
            </ul>
          </div>

          {/* Atención al Cliente */}
          <div>
            <h3 class="text-xl font-bold mb-6 text-blue-100">Atención al Cliente</h3>
            <ul class="space-y-4">
              <li><Link href="/contacto" class="text-blue-200 hover:text-white transition-colors">Contacto</Link></li>
              <li><Link href="/asistencia-al-viajero" class="text-blue-200 hover:text-white transition-colors">Asistencia al Viajero</Link></li>
              <li><Link href="/nosotros" class="text-blue-200 hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/tips-y-sugerencias" class="text-blue-200 hover:text-white transition-colors">Tips y Sugerencias</Link></li>
            </ul>
          </div>

          {/* Legal y Transparencia */}
          <div>
            <h3 class="text-xl font-bold mb-6 text-blue-100">Legales</h3>
            <ul class="space-y-4">
              <li><Link href="/legales/privacidad" class="text-blue-200 hover:text-white transition-colors">Políticas de Privacidad</Link></li>
              <li><Link href="/legales/condiciones" class="text-blue-200 hover:text-white transition-colors">Condiciones Generales</Link></li>
              <li><Link href="/pagos" class="text-blue-200 hover:text-white transition-colors">Formas de Pago</Link></li>
              <li>
                <a 
                  href="https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-del-consumidor"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-block mt-2 text-sm text-blue-300 hover:text-white border border-blue-800 rounded px-3 py-1 transition-colors"
                >
                  Defensa al Consumidor
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa y Redes */}
          <div>
            <h3 class="text-2xl font-black mb-6 text-white tracking-tighter">KOOP.</h3>
            <p class="text-blue-200 mb-6 text-sm leading-relaxed">
              Descubrí el mundo con nosotros. Las mejores experiencias, paquetes a medida y atención personalizada.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-100 hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                <LuInstagram class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-100 hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                <LuFacebook class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-100 hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                {/* TikTok SVG */}
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div class="border-t border-blue-900 pt-8 mt-8 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Koop Travel Agency. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* Botón Flotante de WhatsApp */}
      <WhatsAppButton />
    </footer>
  );
});

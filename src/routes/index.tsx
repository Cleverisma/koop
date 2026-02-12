import { component$, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead, routeAction$, Form, z, zod$ } from "@builder.io/qwik-city";
import { LuInstagram, LuFacebook, LuTwitter, LuPlane, LuMap, LuCompass, LuGlobe } from "@qwikest/icons/lucide";
import Logo from "~/media/logo2.png?jsx";

import { tursoClient } from "~/utils/turso";

export const useNewsletterAction = routeAction$(
  async (data, requestEvent) => {
    try {
      const db = tursoClient(requestEvent);

      await db.execute({
        sql: "INSERT INTO newsletter_subscribers (email) VALUES (?)",
        args: [data.email],
      });

      return {
        success: true,
        message: "¡Gracias por suscribirte! Te avisaremos cuando estemos listos.",
      };
    } catch (e: any) {
      console.error("Newsletter subscription error:", e);

      // Handle duplicate email error
      if (
        e.message?.includes("UNIQUE constraint failed") ||
        e.message?.includes("newsletter_subscribers.email")
      ) {
        return {
          success: true, // We pretend success to avoid leaking user existence, or we can be explicit
          message: "¡Ya estás en nuestra lista! Gracias por tu interés.",
        };
      }

      return {
        success: false,
        message: "Ocurrió un error. Por favor intenta nuevamente más tarde.",
      };
    }
  },
  zod$({
    email: z.string().email("Por favor, introduce un correo electrónico válido."),
  })
);

export default component$(() => {
  useStyles$(`
    .glass-panel {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .text-shadow {
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }

    .brand-text-shadow {
        text-shadow: 0 2px 10px rgba(0,0,0,0.8);
    }
  `);

  const action = useNewsletterAction();

  return (
    <div class="relative min-h-screen w-full overflow-hidden font-sans text-white">
      {/* Background Image */}
      <div
        class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop")',
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay - Increased opacity for readability */}
      <div class="absolute inset-0 z-10 bg-black/60" />

      {/* Content Container */}
      <div class="relative z-20 flex min-h-screen flex-col items-center justify-between px-4 py-8 sm:px-6 lg:px-8">

        {/* Header / Logo Area */}
        <header class="w-full max-w-7xl pt-8">
          <div class="flex items-center gap-2">
            <div class="glass-panel rounded-xl p-4 transition-transform hover:scale-105">
              <Logo class="h-24 w-auto drop-shadow-lg" />
            </div>
          </div>
        </header>

        {/* Main Hero Section */}
        <main class="flex w-full max-w-3xl flex-col items-center text-center mt-8 sm:mt-0">

          <div class="mb-4 flex gap-3 text-cyan-300 opacity-90 bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
            <LuCompass class="h-6 w-6 animate-pulse" />
            <span class="text-sm font-semibold uppercase tracking-widest">Próximamente</span>
          </div>

          <h1 class="text-shadow mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Tu próxima aventura <span class="text-cyan-400">comienza aquí</span>
          </h1>

          <p class="text-shadow mb-12 max-w-2xl text-lg text-gray-100 sm:text-xl md:text-2xl font-medium">
            Estamos creando experiencias de viaje inolvidables. Únete a nuestra lista de espera y sé el primero en descubrir destinos exclusivos.
          </p>

          {/* Newsletter Form */}
          <div class="glass-panel w-full max-w-md rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:bg-white/15 sm:p-8">
            {action.value?.success ? (
              <div class="animate-in fade-in zoom-in duration-500 flex flex-col items-center gap-4 py-4 text-center">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <LuMap class="h-8 w-8" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">¡Estás en la lista!</h3>
                  <p class="mt-2 text-sm text-gray-200">{action.value.message}</p>
                </div>
              </div>
            ) : (
              <>
                <h3 class="mb-4 text-lg font-semibold text-white text-shadow">Notifícame cuando lancen</h3>
                <Form action={action} class="flex flex-col gap-4">
                  <div class="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      class="w-full rounded-lg border border-white/20 bg-white/20 px-4 py-3 text-white placeholder-gray-300 outline-none transition-all focus:border-cyan-400 focus:bg-white/30 focus:ring-2 focus:ring-cyan-400/20 shadow-inner"
                      disabled={action.isRunning}
                    />
                    {action.value?.fieldErrors?.email && (
                      <p class="absolute -bottom-6 left-0 text-xs text-red-400 bg-black/50 px-2 py-1 rounded">
                        {action.value.fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    class="group relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] disabled:cursor-not-allowed disabled:opacity-70 shadow-lg"
                    disabled={action.isRunning}
                  >
                    <span class={`flex items-center gap-2 ${action.isRunning ? "invisible" : ""}`}>
                      Notificarme
                      <LuPlane class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>

                    {action.isRunning && (
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      </div>
                    )}
                  </button>
                </Form>
              </>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer class="w-full max-w-7xl pb-8">
          <div class="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-10 sm:flex-row px-6 sm:px-0">
            <p class="text-sm text-gray-300 text-shadow text-center sm:text-left">
              © {new Date().getFullYear()} Koop Viajes. Todos los derechos reservados.
            </p>

            <div class="flex gap-6">
              <a href="#" aria-label="Instagram" class="text-white/80 transition-colors hover:text-cyan-400 hover:scale-110 transform duration-200">
                <LuInstagram class="h-6 w-6" />
              </a>
              <a href="#" aria-label="Facebook" class="text-white/80 transition-colors hover:text-cyan-400 hover:scale-110 transform duration-200">
                <LuFacebook class="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" class="text-white/80 transition-colors hover:text-cyan-400 hover:scale-110 transform duration-200">
                <LuTwitter class="h-6 w-6" />
              </a>
            </div>
          </div>
        </footer>
      </div >
    </div >
  );
});

export const head: DocumentHead = {
  title: "Koop Viajes - Próximamente",
  meta: [
    {
      name: "description",
      content: "Tu próxima aventura comienza aquí. Únete a la lista de espera de Koop Viajes.",
    },
  ],
};

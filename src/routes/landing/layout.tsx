import { component$, Slot } from '@builder.io/qwik';
import { Header } from '../../components/layout/header/header';
import { Footer } from '../../components/layout/footer/footer';

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-1">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});

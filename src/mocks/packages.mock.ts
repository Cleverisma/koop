import type { TourPackage } from '../types/packages';

export const mockPackages: TourPackage[] = [
  // PLAYA Y AVENTURA
  {
    id: 'playa-1',
    title: 'Caribe Todo Incluido: Punta Cana',
    category: 'playa-y-aventura',
    price: 1540,
    currency: 'USD',
    duration: '7 noches',
    image_url: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelo', 'Hotel All Inclusive', 'Traslados', 'Asistencia al viajero']
  },
  {
    id: 'playa-2',
    title: 'Buzios: Paraíso Brasilero',
    category: 'playa-y-aventura',
    price: 890,
    currency: 'USD',
    duration: '7 noches',
    image_url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelo', 'Posada c/ Desayuno', 'Traslados in/out']
  },
  {
    id: 'playa-3',
    title: 'San Andrés Todo Incluido',
    category: 'playa-y-aventura',
    price: 1150,
    currency: 'USD',
    duration: '6 noches',
    image_url: 'https://images.unsplash.com/photo-1589394590494-06927a4eabdd?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelos desde BUE', 'All Inclusive', 'Excursión Acuario']
  },
  {
    id: 'playa-4',
    title: 'Riviera Maya y Cancún',
    category: 'playa-y-aventura',
    price: 1680,
    currency: 'USD',
    duration: '8 noches',
    image_url: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelo', 'Hotel 5 estrellas All Inclusive', 'Asistencia']
  },

  // NACIONALES
  {
    id: 'nacionales-1',
    title: 'Maravillas del Sur: El Calafate y Ushuaia',
    category: 'nacionales',
    price: 850000,
    currency: 'ARS',
    duration: '6 noches',
    image_url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelo desde Buenos Aires', 'Hoteles 4 Estrellas', 'Excursión Glaciar Perito Moreno']
  },
  {
    id: 'nacionales-2',
    title: 'Cataratas del Iguazú',
    category: 'nacionales',
    price: 490000,
    currency: 'ARS',
    duration: '4 noches',
    image_url: 'https://images.unsplash.com/photo-1610488059082-cd8952b21703?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelos directos', 'Hotel 4 Estrellas c/ Desayuno', 'Excursiones lado Arg y Bra']
  },
  {
    id: 'nacionales-3',
    title: 'Noroeste Argentino (Salta y Jujuy)',
    category: 'nacionales',
    price: 645000,
    currency: 'ARS',
    duration: '5 noches',
    image_url: 'https://images.unsplash.com/photo-1628173491959-58b8d415f5c9?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelos', 'Hoteles Históricos', 'Excursión Salinas Grandes', 'Purmamarca']
  },
  {
    id: 'nacionales-4',
    title: 'Bariloche Clásico',
    category: 'nacionales',
    price: 520000,
    currency: 'ARS',
    duration: '4 noches',
    image_url: 'https://images.unsplash.com/photo-1534005850438-eeca98c5ce98?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelo BUE-BRC', 'Hotel c/ Desayuno', 'Circuito Chico', 'Cerro Catedral']
  },

  // EUROPA
  {
    id: 'europa-1',
    title: 'Aventura Europea: Londres, París y Roma',
    category: 'europa',
    price: 3200,
    currency: 'USD',
    duration: '14 noches',
    image_url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelo Internacional', 'Vuelos Internos', 'Hoteles c/ Desayuno', 'Guía en Español']
  },
  {
    id: 'europa-2',
    title: 'La bella Italia Meridional',
    category: 'europa',
    price: 2850,
    currency: 'USD',
    duration: '11 noches',
    image_url: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelos', 'Hoteles Exclusivos', 'Roma, Nápoles y Costa Amalfitana']
  },
  {
    id: 'europa-3',
    title: 'España y Portugal a tu manera',
    category: 'europa',
    price: 2600,
    currency: 'USD',
    duration: '12 noches',
    image_url: 'https://images.unsplash.com/photo-1539037116277-4db202056ea2?q=80&w=2070&auto=format&fit=crop',
    includes: ['Vuelos directos IBERIA', 'Hoteles Centricos', 'Madrid, BCN y Lisboa']
  },

  // BUS
  {
    id: 'bus-1',
    title: 'Cataratas del Iguazú en Bus',
    category: 'bus',
    price: 350000,
    currency: 'ARS',
    duration: '4 noches',
    image_url: 'https://images.unsplash.com/photo-1582239420448-69cb9142f36f?q=80&w=2070&auto=format&fit=crop',
    includes: ['Bus Cama', 'Hotel c/ Media Pensión', 'Excursiones lado Arg y Bra', 'Coordinador']
  },
  {
    id: 'bus-2',
    title: 'Valle de Punilla (Córdoba)',
    category: 'bus',
    price: 260000,
    currency: 'ARS',
    duration: '5 noches',
    image_url: 'https://images.unsplash.com/photo-1621257973070-bbbd117ae86d?q=80&w=2070&auto=format&fit=crop',
    includes: ['Bus Semi Cama desde BUE', 'Hotel Media Pensión', 'Villa Carlos Paz']
  },
  {
    id: 'bus-3',
    title: 'Mendoza: Ruta del Vino en Bus',
    category: 'bus',
    price: 380000,
    currency: 'ARS',
    duration: '4 noches',
    image_url: 'https://images.unsplash.com/photo-1616423985794-6b2cba72faac?q=80&w=2070&auto=format&fit=crop',
    includes: ['Bus Cama', 'Hotel c/ Desayuno', 'Excursión Bodegas', 'Asistencia']
  },

  // MINITURISMO
  {
    id: 'mini-1',
    title: 'Escapada Termal: Federación',
    category: 'miniturismo',
    price: 180000,
    currency: 'ARS',
    duration: '2 noches',
    image_url: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2070&auto=format&fit=crop',
    includes: ['Bus Semi Cama', 'Hotel 3 Estrellas', 'Entradas al predio termal']
  },
  {
    id: 'mini-2',
    title: 'Día de Campo: San Antonio de Areco',
    category: 'miniturismo',
    price: 85000,
    currency: 'ARS',
    duration: 'Full Day',
    image_url: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?q=80&w=2070&auto=format&fit=crop',
    includes: ['Traslados', 'Asado Libre', 'Paseo a Caballo', 'Show Folklórico']
  },
  {
    id: 'mini-3',
    title: 'Tandil Escapada',
    category: 'miniturismo',
    price: 210000,
    currency: 'ARS',
    duration: '3 noches',
    image_url: 'https://images.unsplash.com/photo-1542459957-55df9b3433ed?q=80&w=2070&auto=format&fit=crop',
    includes: ['Bus Ejecutivo', 'Cabañas', 'Excursión Piedra Movediza', 'Picada Tandilera']
  }
];

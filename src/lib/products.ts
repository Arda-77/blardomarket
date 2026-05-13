export const categories = [
  { id: 1, name: "Bilardo", slug: "bilardo", count: 24, image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=800", description: "Profesyonel bilardo topları, ıstakalar ve aksesuarlar." },
  { id: 2, name: "Dart", slug: "dart", count: 142, image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800", description: "Profesyonel dart okları, tahtalar ve aksesuarlar." },
  { id: 3, name: "Oyun Kartları", slug: "oyun-kartlari", count: 451, image: "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=800", description: "Bicycle, Theory11 ve USPCC koleksiyon kartları." },
  { id: 4, name: "Toptan", slug: "toptan", count: 15, image: "https://images.unsplash.com/photo-1611095773760-41c50b863d6e?q=80&w=800", description: "Toptan bilardo malzemeleri ve kurumsal çözümler." }
];

export const products = [
  { id: "1", name: "Aramith Premier Amerikan Top Seti", brand: "ARAMİTH", price: 7589.75, category: "bilardo", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800", description: "Dünya standartlarında profesyonel Amerikan bilardo top seti." },
  { id: "2", name: "Tournament Billiard Balls Set", brand: "TOURNAMENT", price: 3041.97, category: "bilardo", image: "https://images.unsplash.com/photo-1609143925508-b362e92c0389?q=80&w=800", description: "Turnuva standartlarında kaliteli bilardo topları." },
  { id: "3", name: "Winmau Blade 6 Dart Tahtası", brand: "WİNMAU", price: 5085.13, category: "dart", image: "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=800", description: "Dünyanın en iyi dart tahtası, Blade 6 teknolojisi." },
  { id: "4", name: "Bicycle Stars & Stripes", brand: "BİCYCLE", price: 726.59, category: "oyun-kartlari", image: "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=800", description: "Özel tasarım Bicycle koleksiyon kartları." }
];

export const formatPrice = (price: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(price);

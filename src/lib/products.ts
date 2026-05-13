export const categories = [
  { id: 1, name: "Bilardo", slug: "bilardo", count: 24, image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=800", description: "Profesyonel bilardo topları, ıstakalar ve aksesuarlar." },
  { id: 2, name: "Dart", slug: "dart", count: 142, image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800", description: "Profesyonel dart okları, tahtalar ve aksesuarlar." },
  { id: 3, name: "Oyun Kartları", slug: "oyun-kartlari", count: 451, image: "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=800", description: "Bicycle, Theory11 ve USPCC koleksiyon kartları." },
  { id: 4, name: "Toptan", slug: "toptan", count: 15, image: "https://images.unsplash.com/photo-1611095773760-41c50b863d6e?q=80&w=800", description: "Toptan bilardo malzemeleri ve kurumsal çözümler." }
];

export const products = [
  { id: "1", name: "Aramith Premier Amerikan Top Seti", brand: "ARAMİTH", subcategory: "Profesyonel", price: 7589.75, category: "bilardo", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800", description: "Dünya standartlarında profesyonel Amerikan bilardo top seti.", inStock: true, features: ["Fenolik reçine", "Yüksek dayanıklılık", "Mükemmel yuvarlaklık"] },
  { id: "2", name: "Tournament Billiard Balls Set", brand: "TOURNAMENT", subcategory: "Turnuva", price: 3041.97, category: "bilardo", image: "https://images.unsplash.com/photo-1609143925508-b362e92c0389?q=80&w=800", description: "Turnuva standartlarında kaliteli bilardo topları.", inStock: true, features: ["Yüksek kalite", "Dengeli ağırlık"] },
  { id: "3", name: "Aramith Premier Pool Set 50.8mm", brand: "ARAMİTH", subcategory: "Bestseller", price: 6890.00, category: "bilardo", image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=800", description: "Küçük çaplı masalar için ideal profesyonel top seti.", inStock: true, features: ["50.8mm çap", "Aramith kalitesi"] },
  { id: "4", name: "Harrows Control 80% Tungsten Dart", brand: "HARROWS", subcategory: "Çok Satan", price: 2027.98, category: "dart", image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800", description: "Profesyonel dart oyuncuları için %80 Tungsten oklar.", inStock: true, features: ["%80 Tungsten", "Hassas denge"] },
  { id: "5", name: "NX90 Bomb 90% Tungsten Dart 21gr", brand: "NX90", subcategory: "Yeni", price: 2332.08, category: "dart", image: "https://images.unsplash.com/photo-1611095773760-41c50b863d6e?q=80&w=800", description: "Yüksek hassasiyetli 21 gram profesyonel dart okları.", inStock: true, features: ["%90 Tungsten", "21 gram"] },
  { id: "6", name: "Winmau Blade 6 Dart Tahtası", brand: "WİNMAU", subcategory: "Profesyonel", price: 5085.13, category: "dart", image: "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=800", description: "Dünyanın en iyi dart tahtası, Blade 6 teknolojisi.", inStock: true, features: ["Blade 6 teknolojisi", "Sıfır sekme"] },
  { id: "7", name: "Bicycle Stars & Stripes", brand: "BİCYCLE", subcategory: "Ücretsiz Kargo", price: 726.59, category: "oyun-kartlari", image: "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=800", description: "Özel tasarım Bicycle koleksiyon kartları.", inStock: true, features: ["Air-Cushion finish", "Koleksiyonluk"] },
  { id: "8", name: "Bicycle Spy x Family", brand: "BİCYCLE", subcategory: "Ücretsiz Kargo", price: 726.59, category: "oyun-kartlari", image: "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=800", description: "Spy x Family özel edisyon oyun kartları.", inStock: true, features: ["Lisanslı ürün", "Özel tasarım"] }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getFeaturedProducts = () => products.slice(0, 8);
export const formatPrice = (price: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(price);

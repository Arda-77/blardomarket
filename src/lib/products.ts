export const categories = [
  { id: 1, name: "Bilardo", slug: "bilardo", count: 120, image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=800", description: "Profesyonel masalar, ıstakalar ve aksesuarlar." },
  { id: 2, name: "Dart", slug: "dart", count: 85, image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800", description: "Elektronik ve klasik dart setleri." },
  { id: 3, name: "Oyun Kartları", slug: "oyun-kartlari", count: 45, image: "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=800", description: "Koleksiyonluk ve profesyonel oyun kartları." },
  { id: 4, name: "Aksesuarlar", slug: "aksesuarlar", count: 200, image: "https://images.unsplash.com/photo-1611095773760-41c50b863d6e?q=80&w=800", description: "Oyun odanız için her şey." }
];

export const products = [
  { id: "1", name: "Longoni Karambol Istakası", brand: "Longoni", subcategory: "Profesyonel", price: 12500, category: "bilardo", image: "https://images.unsplash.com/photo-1609143925508-b362e92c0389?q=80&w=800", description: "Profesyonel oyuncular için tasarlanmış yüksek hassasiyetli ıstaka.", inStock: true, features: ["Akçaağaç şaft", "Kamui uç", "Dengeli ağırlık"] },
  { id: "2", name: "Aramith Pro Cup Top Seti", brand: "Aramith", subcategory: "Aksesuar", price: 4200, category: "bilardo", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800", description: "Dünya turnuvalarının resmi top seti.", inStock: true, features: ["Fenolik reçine", "Yüksek dayanıklılık", "Mükemmel yuvarlaklık"] }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getFeaturedProducts = () => products.slice(0, 4);
export const formatPrice = (price: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(price);

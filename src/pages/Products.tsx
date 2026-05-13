import { useRoute } from "wouter";
import { products, categories, formatPrice } from "../lib/products";
import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { ShoppingCart, Heart, Filter, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function Products() {
  const [, params] = useRoute("/urunler/:category");
  const categorySlug = params?.category;
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const category = categories.find(c => c.slug === categorySlug);
  const filteredProducts = products.filter(p => p.category === categorySlug);

  if (!category) return <div className="py-20 text-center font-bold">Kategori bulunamadı.</div>;

  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-[#1C1410] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-[#B8860B] text-xs font-bold mb-4">
            <span>ANA SAYFA</span> <ChevronRight size={12} /> <span>{category.name.toUpperCase()}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{category.name}</h1>
          <p className="text-gray-400 max-w-2xl">{category.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filtreler */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl border border-[#e8e0d0] sticky top-24">
              <div className="flex items-center gap-2 font-bold mb-6 border-b border-[#e8e0d0] pb-4">
                <Filter size={18} /> FİLTRELE
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-sm mb-4">Markalar</h3>
                  <div className="space-y-2">
                    {Array.from(new Set(filteredProducts.map(p => p.brand))).map(brand => (
                      <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#B8860B]">
                        <input type="checkbox" className="rounded border-[#e8e0d0] text-[#2D6A4F] focus:ring-[#2D6A4F]" />
                        {brand}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ürün Izgarası */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl border border-[#e8e0d0]">
              <span className="text-sm text-gray-500 font-medium">{filteredProducts.length} ürün bulundu</span>
              <select className="text-sm border-none bg-transparent font-bold focus:ring-0 cursor-pointer">
                <option>Sıralama: Önerilen</option>
                <option>Fiyat: Düşükten Yükseğe</option>
                <option>Fiyat: Yüksekten Düşüğe</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl border border-[#e8e0d0] overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors ${isFavorite(product.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-400 hover:text-red-500'}`}
                    >
                      <Heart size={18} fill={isFavorite(product.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold text-[#B8860B] tracking-widest uppercase">{product.brand}</span>
                    <h3 className="font-bold text-[#1C1410] mt-1 mb-3 line-clamp-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-[#1C1410]">{formatPrice(product.price)}</span>
                      <button 
                        onClick={() => {
                          addToCart(product);
                          toast.success("Ürün sepete eklendi");
                        }}
                        className="bg-[#2D6A4F] text-white p-2 rounded-lg hover:bg-[#1b4332] transition-colors"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

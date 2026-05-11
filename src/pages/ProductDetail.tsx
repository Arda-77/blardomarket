import { useParams, Link } from "wouter";
import { ShoppingCart, ArrowLeft, Check, Truck, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { getProductById, formatPrice, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAFAF7]">
        <Navbar />
        <div className="container py-20 text-center mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1C1410]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Ürün bulunamadı</h2>
          <Link href="/"><button className="mt-6 flex items-center gap-2 mx-auto text-[#2D6A4F]"><ArrowLeft size={16} /> Ana Sayfaya Dön</button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navbar />
      <div className="container py-8 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#F5F0E8] rounded-2xl overflow-hidden aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-wider mb-2">{product.brand} · {product.subcategory}</div>
            <h1 className="text-[#1C1410] text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{product.name}</h1>
            <div className="mb-6 pb-6 border-b border-[#e8e0d0]">
              <span className="text-[#1C1410] text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{formatPrice(product.price)}</span>
            </div>
            <p className="text-[#6b5a4e] leading-relaxed mb-6">{product.description}</p>
            <div className="flex gap-3 mb-8">
              <button onClick={() => toast.success(`${product.name} sepete eklendi!`)} className="flex-1 flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold py-4 rounded-xl transition-colors">
                <ShoppingCart size={18} /> Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <AIAssistant />
    </div>
  );
}

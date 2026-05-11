import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Truck, Shield, HeadphonesIcon, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AIAssistant from "@/components/AIAssistant";
import { categories, getFeaturedProducts } from "@/lib/products";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const featuredProducts = getFeaturedProducts();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navbar />
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663447809882/2ZppDREEPoxQqZLEAW8cCM/bilardo-masa-CQB9hzzAx7VeCgNvmv4pxo.webp"
            alt="Bilardo Masası"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1410]/90 via-[#1C1410]/60 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl">
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-12 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-semibold tracking-widest uppercase">Profesyonel Ekipmanlar</span>
              </div>
              <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Oyununu<br /><span className="text-[#B8860B] italic">Bir Üst Seviyeye</span><br />Taşı
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                Bilardo, dart ve oyun kartı ürünlerinde Türkiye'nin en güvenilir adresi. Profesyonel kalite, uygun fiyat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/urunler/bilardo">
                  <button className="flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                    Ürünleri Keşfet <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#1C1410] text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Öne Çıkan Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <AIAssistant />
    </div>
  );
}

import { Link } from "wouter";
import { ShoppingCart, Heart } from "lucide-react";
import { formatPrice } from "@/lib/products";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-[#e8e0d0] hover:shadow-xl transition-all duration-300">
      <Link href={`/urun/${product.id}`}>
        <div className="relative aspect-square overflow-hidden cursor-pointer">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"><Heart size={18} className="text-[#1C1410]" /></button>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#1C1410] mb-1 truncate" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{product.name}</h3>
        <p className="text-[#B8860B] font-bold text-xl">{formatPrice(product.price)}</p>
        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-[#2D6A4F] text-white py-2 rounded-lg hover:bg-[#1B4332] transition-colors">
          <ShoppingCart size={16} /> Sepete Ekle
        </button>
      </div>
    </div>
  );
}

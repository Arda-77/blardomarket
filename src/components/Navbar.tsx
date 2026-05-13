import { Link } from "wouter";
import { ShoppingCart, Heart, Search, Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#e8e0d0] sticky top-0 z-50">
      <div className="bg-[#1C1410] text-white text-[10px] py-1 px-4 flex justify-between items-center">
        <span>0850 XXX XX XX | 7/24 Müşteri Desteği</span>
        <span>Ücretsiz Kargo — 500 TL Üzeri</span>
      </div>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-[#2D6A4F] rounded-full flex items-center justify-center text-white font-bold text-xl">D</div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1C1410] leading-tight">Derya Bilardo</span>
              <span className="text-[10px] text-[#B8860B] tracking-[0.2em] uppercase">BilardoMarket.com</span>
            </div>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/"><span className="text-xs font-bold hover:text-[#B8860B] cursor-pointer">ANA SAYFA</span></Link>
          <Link href="/urunler/bilardo"><span className="text-xs font-bold hover:text-[#B8860B] cursor-pointer">BİLARDO</span></Link>
          <Link href="/urunler/dart"><span className="text-xs font-bold hover:text-[#B8860B] cursor-pointer">DART</span></Link>
          <Link href="/urunler/oyun-kartlari"><span className="text-xs font-bold hover:text-[#B8860B] cursor-pointer">OYUN KARTLARI</span></Link>
          <Link href="/oda-hesaplayici"><span className="text-xs font-bold hover:text-[#B8860B] cursor-pointer">ODA HESAPLAYICI</span></Link>
        </div>
        <div className="flex items-center gap-4">
          <Search size={18} className="cursor-pointer hover:text-[#B8860B]" />
          <Link href="/favoriler"><Heart size={18} className="cursor-pointer hover:text-[#B8860B]" /></Link>
          <Link href="/sepet"><ShoppingCart size={18} className="cursor-pointer hover:text-[#B8860B]" /></Link>
          <User size={18} className="cursor-pointer hover:text-[#B8860B]" />
          <Menu size={18} className="lg:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
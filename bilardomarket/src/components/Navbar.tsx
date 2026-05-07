import { Link } from "wouter";
import { ShoppingCart, Heart, Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#e8e0d0] sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-[#1C1410] cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            BİLARDO<span className="text-[#B8860B]">MARKET</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/urunler/bilardo"><span className="text-sm font-semibold hover:text-[#B8860B] cursor-pointer">BİLARDO</span></Link>
          <Link href="/urunler/dart"><span className="text-sm font-semibold hover:text-[#B8860B] cursor-pointer">DART</span></Link>
          <Link href="/urunler/oyun-secici"><span className="text-sm font-semibold hover:text-[#B8860B] cursor-pointer">OYUN SEÇİCİ</span></Link>
        </div>
        <div className="flex items-center gap-5">
          <Search size={20} className="cursor-pointer hover:text-[#B8860B]" />
          <Link href="/favoriler"><Heart size={20} className="cursor-pointer hover:text-[#B8860B]" /></Link>
          <Link href="/sepet"><ShoppingCart size={20} className="cursor-pointer hover:text-[#B8860B]" /></Link>
          <Menu size={20} className="md:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

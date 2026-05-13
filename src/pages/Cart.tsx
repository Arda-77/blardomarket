import { useCart } from "../contexts/CartContext";
import { formatPrice } from "../lib/products";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "wouter";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag size={64} className="mx-auto text-[#e8e0d0] mb-4" />
        <h2 className="text-2xl font-bold mb-2">Sepetiniz Boş</h2>
        <p className="text-gray-500 mb-8">Henüz sepetinize bir ürün eklemediniz.</p>
        <Link href="/"><button className="bg-[#2D6A4F] text-white px-8 py-3 rounded-full hover:bg-[#1b4332]">Alışverişe Başla</button></Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-10">Sepetim</h1>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#e8e0d0]">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-[#B8860B] font-bold">{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center gap-3 bg-[#fdfbf7] rounded-full px-3 py-1 border border-[#e8e0d0]">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-[#B8860B]"><Minus size={16} /></button>
                <span className="font-bold w-4 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-[#B8860B]"><Plus size={16} /></button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-full"><Trash2 size={20} /></button>
            </div>
          ))}
        </div>
        <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e8e0d0] h-fit">
          <h2 className="text-xl font-bold mb-6">Sipariş Özeti</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-600"><span>Ara Toplam</span><span>{formatPrice(total)}</span></div>
            <div className="flex justify-between text-gray-600"><span>Kargo</span><span className="text-green-600 font-bold">Ücretsiz</span></div>
            <div className="border-t border-[#e8e0d0] pt-4 flex justify-between text-xl font-bold"><span>Toplam</span><span>{formatPrice(total)}</span></div>
          </div>
          <button className="w-full bg-[#2D6A4F] text-white py-4 rounded-full font-bold hover:bg-[#1b4332] transition-colors">ÖDEMEYE GEÇ</button>
        </div>
      </div>
    </div>
  );
}

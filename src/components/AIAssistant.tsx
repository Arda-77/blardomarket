import { MessageSquare } from "lucide-react";
import { useState } from "react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl mb-4 border border-[#e8e0d0] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-[#2D6A4F] p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm">7/24 AI Destek</h3>
              <p className="text-[10px] opacity-80">Size nasıl yardımcı olabilirim?</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70">✕</button>
          </div>
          <div className="flex-1 p-4 bg-[#fdfbf7] overflow-y-auto">
            <div className="bg-white p-3 rounded-lg shadow-sm text-xs text-[#1C1410] mb-2 border border-[#e8e0d0]">
              Merhaba! Ben BilardoMarket AI asistanı. Ürünler, teslimat veya oda hesaplayıcı hakkında sorularınızı sorabilirsiniz.
            </div>
          </div>
          <div className="p-3 bg-white border-t border-[#e8e0d0] flex gap-2">
            <input 
              type="text" 
              placeholder="Mesajınızı yazın..." 
              className="flex-1 text-xs border border-[#e8e0d0] rounded-full px-4 py-2 focus:outline-none focus:border-[#2D6A4F]"
            />
            <button className="bg-[#2D6A4F] text-white p-2 rounded-full hover:bg-[#1b4332] transition-colors">
              <MessageSquare size={16} />
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}

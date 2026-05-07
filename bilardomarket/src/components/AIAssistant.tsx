import { MessageSquare } from "lucide-react";
export default function AIAssistant() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="w-14 h-14 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <MessageSquare size={24} />
      </button>
    </div>
  );
}

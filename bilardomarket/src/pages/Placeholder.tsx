import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navbar />
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-[#1C1410]">{title}</h1>
        <p className="mt-4 text-[#6b5a4e]">Bu sayfa yakında aktif olacak.</p>
      </div>
      <Footer />
    </div>
  );
}

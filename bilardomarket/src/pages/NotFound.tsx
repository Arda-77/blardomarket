import { Link } from "wouter";
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF7]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#1C1410]">404</h1>
        <p className="text-xl text-[#6b5a4e] mt-4">Sayfa bulunamadı.</p>
        <Link href="/"><button className="mt-8 text-[#2D6A4F] font-semibold underline">Ana Sayfaya Dön</button></Link>
      </div>
    </div>
  );
}

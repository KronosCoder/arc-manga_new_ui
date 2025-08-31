import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import HeroSection from "@/components/ui/home/hero-section/HeroSection";
import LatestUpdate from "@/components/ui/home/latest-update/LatestUpdate";
import { ArrowRight } from "lucide-react";
import '../themes/home.css';

export default function page() {
  return (
    <div className="h-full w-screen">
      <main className="w-full h-full flex">
        <Sidebar />
        <section className="right__side flex flex-col flex-grow w-full h-full">
          <DesktopNavbar />
          <HeroSection />

          <div className="page__container py-10">
            <header className="flex justify-between items-center">
              <h2 className="font-medium text-xl md:text-2xl">Latest Updates</h2>
              <button 
                className="p-2 rounded-full text-1xl transition-all duration-200 ease-in-out hover:bg-gray-200" 
                aria-label="View more updates"
              >
                <ArrowRight />
              </button>
            </header>

            {/* Latest Updates */}
            <LatestUpdate />
          </div>
        </section>
      </main>
    </div>
  )
}

import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import HeroSection from "@/components/ui/hero-section/HeroSection";
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
              <div className="flex justify-betweeen">
                <h1 className="font-medium text-2xl">Latest Updates</h1>
                <div className="p-2 rounded-full transition-all duration-200 ease-in-out hover:">
                  <ArrowRight />
                </div>
              </div>
            </div>
        </section>
      </main>
    </div>
  )
}

import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import HeroSection from "@/components/ui/hero-section/HeroSection";
import '../../themes/home.css';

export default function page() {
  return (
    <div className="h-full w-screen">
      <main className="w-full h-full flex">
        <Sidebar />
        <section className="right__side flex flex-col flex-grow w-full h-full">
            <h1>Updates</h1>
        </section>
      </main>
    </div>
  )
}

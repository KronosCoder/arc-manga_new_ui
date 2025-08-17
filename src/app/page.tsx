import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import HomeSwiper from "@/components/ui/home-swiper/HomeSwiper";
import '../themes/home.css';

export default function page() {
  return (
    <div className="h-full w-screen">
      <main className="w-full h-full flex">
        <Sidebar />
        <section className="right__side flex flex-col flex-grow w-full h-full transition-all duration-500 ease-in-out">
          <DesktopNavbar />
          <div className="w-full h-full relative">
            <div className="absolute left-20 top-14"> 
             <p className='font-normal text-2xl mb-4'>Popular New Titles</p>
            </div>
            <HomeSwiper />
          </div>
        </section>
      </main>
    </div>
  )
}

import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import HomeSwiper from "@/components/ui/home-swiper/HomeSwiper";
import '../themes/home.css';

export default function page() {
  return (
    <div className="h-full w-screen">
      <main className="w-full h-full flex">
        <Sidebar />
        <section className="right__side flex flex-col flex-grow w-full h-full">
          <DesktopNavbar />
          <div className="relative">
            <div className="absolute w-full top-14">
              <div className="page__container">
                <p className='font-normal text-2xl mb-4'>Popular New Titles</p>
              </div>
            </div>
            <HomeSwiper />
          </div>
        </section>
      </main>
    </div>
  )
}

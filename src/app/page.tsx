import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import Image from "next/image";
import '../themes/home.css';

export default function page() {
  return (
    <div className="h-full w-screen">
      <DesktopNavbar />
      <main className="w-full h-full flex">
        <Sidebar />
        <section className="right__side flex flex-col flex-grow w-full h-full transition-all duration-500 ease-in-out">
          <div className="banner__section">
            <div className="fixed top-14 left-10">
              <h1 className="font-semibold text-3xl">Popular New Titles</h1>
            </div>
            <div className="absolute top-28 left-10 z-10">
              <div className="content__pic">
                <img src="/mock/mock_2.jpg" alt="" />
              </div>
              <div className="details"></div>
            </div>
            <img src="/mock/mock_1.jpg" className="banner__image" alt="" />
          </div>
          <div className="page__container py-24">

          </div>
        </section>
      </main>
    </div>
  )
}

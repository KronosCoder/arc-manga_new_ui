import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import HeroSection from "@/components/ui/home/hero-section/HeroSection";
import LatestUpdate from "@/components/ui/home/latest-update/LatestUpdate";
import HeaderText from "@/components/ui/header-text/HeaderText";
import '../themes/home.css';
import RootLayout from "./layout";

export default function page() {
  const title = "Home";
  const description = "This website about manga, manhawa, webtoon etc.";
  const slug = "http://127.0.0.1:3000/";

  return (
    <RootLayout title={title} description={description} slug={slug} >
      <div className="h-full w-full">
        <main className="w-full h-full flex">
          <Sidebar />
          <section className="right__side flex flex-col flex-grow w-full h-full">
            <DesktopNavbar />
            <HeroSection />
      
            <div className="page__container py-10">
              <div className="flex flex-col gap-8">
                <div className="">
                  {/* Latest Updates */}
                  <HeaderText title={'Latest Updates'} />
                  <LatestUpdate />
                  {/*  */}
                </div>

                <div className="">
                  {/* Staff Recommended */}
                  <HeaderText title={'Staff Recommended'} />

                  {/*  */}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </RootLayout>
  )
}

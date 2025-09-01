import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import HeroSection from "@/components/features/Home/HomeSection/HeroSection"
import LatestUpdate from "@/components/features/Home/LastestUpdate/LatestUpdate";
import HeaderText from "@/components/ui/HeaderText/HeaderText";
import '../themes/home.css';
import RootLayout from "./layout";
import RecommendSwiper from "@/components/features/Home/RecommendSwiper/RecommendSwiper";

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
                  <RecommendSwiper />
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

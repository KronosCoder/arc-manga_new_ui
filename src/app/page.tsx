import HeroSection from "@/components/features/Home/HomeSection/HeroSection";
import LatestUpdate from "@/components/features/Home/LastestUpdate/LatestUpdate";
import HeaderText from "@/components/ui/HeaderText/HeaderText";
import RecommendSwiper from "@/components/features/Home/RecommendSwiper/RecommendSwiper";
import SelfPublishSwiper from "@/components/features/Home/SelfPublishSwiper/SelfPublishSwiper";
import RecentlyUpSwiper from "@/components/features/Home/RecentlyUpSwiper/RecentlyUpSwiper";
import '../themes/home.css';

export const metadata = {
  title: "Home | ArcManga",
  description: "This website about manga, manhwa, webtoon etc.",
};

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="page__container py-10">
        <div className="flex flex-col gap-3 md:gap-8">
          <div>
            <HeaderText title={'Latest Updates'} />
            <LatestUpdate />
          </div>
          <div>
            <HeaderText title={'Staff Recommended'} />
            <RecommendSwiper />
          </div>
          <div>
            <HeaderText title={'Self Publish'} />
            <SelfPublishSwiper />
          </div>
          <div>
            <HeaderText title={'Recently Uploads'} />
            <RecentlyUpSwiper />
          </div>
        </div>
      </div>
    </>
  );
}

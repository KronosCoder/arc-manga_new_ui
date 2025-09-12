import Sidebar from "@/components/layouts/sidebar/Sidebar";
import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import PrevSection from "@/components/features/PrevSection/PrevSection";

interface GeneralLayoutProps {
    children: React.ReactNode;
    title: string;
}

export default function GeneralLayout({ children, title }: GeneralLayoutProps) {
  return (
    <div className="h-full w-screen">
      <main className="w-full h-full flex">
        <Sidebar />
        <section className="right__side flex flex-col flex-grow w-full h-full">
          <DesktopNavbar />
          <div className="page__container pt-20">
            <PrevSection headerTitle={title} />
            { children }
          </div>
        </section>
      </main>
    </div>
  )
}

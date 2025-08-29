'use client';

import Sidebar from "@/components/layouts/sidebar/Sidebar";
import DesktopNavbar from "@/components/layouts/navbar/desktop/DesktopNavbar";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
    children: React.ReactNode;
    title: string;
}

export default function GeneralLayout({ children, title }: Props) {
  const router = useRouter();
  const redirectPreviousPage = () => {
    router.back()
  };

  return (
    <div className="h-full w-screen">
      <main className="w-full h-full flex">
        <Sidebar />
        <section className="right__side flex flex-col flex-grow w-full h-full">
          <DesktopNavbar />
          <div className="page__container pt-20">
            <div className="prev__section">
              <div 
                className="flex items-center justify-center p-2 transition-all duration-200 ease-in-out cursor-pointer hover:bg-gray-300 rounded-full "
                onMouseDown={redirectPreviousPage}
              >
                <ArrowLeft />
              </div>
              <h1>{title}</h1>
            </div>
            { children }
          </div>
        </section>
      </main>
    </div>
  )
}

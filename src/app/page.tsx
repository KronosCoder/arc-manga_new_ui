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
            <div className="relative flex flex-col">
              <div className="absolute top-14 left-0 w-full">
                <div className="max-w-[1440px] px-10">
                  <h2 className="font-semibold text-2xl z-[4]">Popular New Titles</h2>
                </div>  
                <div className="relative h-full flex gap-4 z-[4] px-10 mt-2">

                  {/* img */}
                  <div className="group flex items-start relative mb-auto select-none w-[200px] h-full !h-[10rem] md:!h-full aspect-[7/10] object-top object-cover rounded sm:shadow-lg bg-transparent">
                    <img src="/mock/mock_2.jpg" className="rounded shadow-md w-full h-full" alt="" />
                  </div>

                  {/* Banner content details */}
                  <article className="mt-auto grid gap-6">
                    <h2 className="font-bold text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis totam, distinctio nemo</h2>
                    <div className="flex flex-wrap gap-1">
                      {/* Genres */}
                      <div className="inline-flex items-center uppercase text-[0.625rem] px-[0.325rem] rounded leading-[1.25rem] bg-gray-100 font-bold">
                        action
                      </div>
                      <div className="inline-flex items-center uppercase text-[0.625rem] px-[0.325rem] rounded leading-[1.25rem] bg-gray-100 font-bold">
                        adventure
                      </div>
                      <div className="inline-flex items-center uppercase text-[0.625rem] px-[0.325rem] rounded leading-[1.25rem] bg-gray-100 font-bold">
                        fantasy
                      </div>
                    </div>
                  </article>
                  {/*  */}

                </div>
              </div>
            </div>
            <div className="banner">
              <img src="/mock/mock_1.jpg" className="banner__image" alt="" />
            </div>
          </div>
          <div className="page__container py-24"></div>
        </section>

      </main>
    </div>
  )
}

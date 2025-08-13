import Link from "next/link"
import Sidebar from "../components/layouts/sidebar/Sidebar";
import Navbar from "@/components/layouts/navbar/desktop/Navbar";

export default function page() {
  return (
    <div className="h-full w-screen">
        <Navbar />
      <main className="w-full h-full flex">
          <Sidebar />
        <section className="right__side flex flex-grow w-full h-full transition-all duration-500 ease-in-out">

          <div className="page__container py-24">
            <h1>Hello World</h1>
          </div>
        </section>
      </main>
    </div>
  )
}

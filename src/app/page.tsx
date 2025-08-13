import Link from "next/link"
import DesktopNavbar from "../components/layouts/navbar/desktop-navbar/DesktopNavbar";
import Sidebar from "../components/layouts/sidebar/Sidebar";

export default function page() {
  return (
    <div className="h-full w-screen">
      <DesktopNavbar />
      <main className="w-full h-full flex">
        <Sidebar />
        <div className="right__side flex flex-grow w-full h-full py-24 px-20 transition-all duration-500 ease-in-out">
          <h1>Right Side</h1>
        </div>
      </main>
    </div>
  )
}

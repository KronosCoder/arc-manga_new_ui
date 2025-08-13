import Link from "next/link"
import DesktopNavbar from "../components/layouts/navbar/desktop-navbar/DesktopNavbar";
import Sidebar from "../components/layouts/sidebar/Sidebar";

export default function page() {
  return (
    <div className="h-full w-screen">
      <DesktopNavbar />
      <Sidebar />
    </div>
  )
}

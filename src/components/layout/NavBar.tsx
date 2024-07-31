"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome2Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import SignOutBtn from "../buttons/SignOutBtn";
import { IconType } from "react-icons";


const NavBar: React.FunctionComponent = () => {
  const currentPath = usePathname();

  return (
    <nav className="w-full bg-white fixed top-0 z-50 shadow h-[70px]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="px-2 mr-2 text-xl" aria-label="Next Buddy Home">
          <h2 className="flex text-xl text-nowrap border rounded-md overflow-hidden">
            <span className="ps-2 pe-1 bg-c-primary py-2">Next</span>
            <span className="bg-c-secondary pe-2 ps-1 py-2 !text-[#004696] font-extrabold">Buddy</span></h2>
        </Link>

        <div className="flex gap-x-4 text-gray-600">
          <NavLink href="/" currentPath={currentPath} label="Home" icon={<RiHome2Line />} />
          <NavLink href="/people" currentPath={currentPath} label="People" icon={<GoPeople />} />
          <NavLink href="/friends" currentPath={currentPath} label="Friends" icon={<GoPeople />} />
          <NavLink href="/notification" currentPath={currentPath} label="Notification" icon={<IoIosNotificationsOutline />} />
          <NavLink href="/chat" currentPath={currentPath} label="Chat" icon={<IoChatboxEllipsesOutline />} />
        </div>

        <div className="flex items-center gap-4">
          
          <SignOutBtn />
        </div>
      </div>
    </nav>
  );
};

interface NavLinkType {
  href: string
  currentPath: string
  label: string
  icon?: IconType | any
}
const NavLink = ({ href, currentPath, label, icon }:NavLinkType) => (
  <Link href={href} className={`nav-item ${currentPath === href ? "active" : ""}`}  aria-label={label}>
    <span className="mr-1 text-md">{icon}</span>
    <span className="hidden md:inline-block">{label}</span>
  </Link>
);

export default NavBar;

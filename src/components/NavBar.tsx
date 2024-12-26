"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { ClipboardList, Search, ListVideo, Tags } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const hideNavbarOnRoutes = ["/", "/register"];

  if (hideNavbarOnRoutes.includes(pathname)) {
    return null;
  }


  const menuItems = [
    { name: "Dashboard", route: "/dashboard", icon: ListVideo },
    { name: "Tasks", route: "/tasks", icon: Tags },
    { name: "Projects", route: "/projects", icon: ClipboardList },
    { name: "Search", route: "/search", icon: Search },
  ];

  const handleProfileClick = () => {
    router.push("/profile");
  };

  const handleNavigation = (route: string) => {
    router.push(route);
  };



  return (
    <nav className="w-full bg-zinc-950 text-zinc-300 p-6 flex items-center justify-between">
      <div className="flex gap-2">
        <Image alt="logo" src={logo} />
        <div className="px-2 bg-emerald-950 rounded-full text-xs text-green-300">
          User
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex items-center space-x-6 justify-center">
        {menuItems.map((item) => (  
          <button
            key={item.name}
            onClick={() => handleNavigation(item.route)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out 
            ${pathname === item.route
                ? "bg-zinc-800 text-white"
                : "hover:bg-zinc-700 hover:text-white"}`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="bg-green-300 p-2 text-xl text-emerald-950 rounded-full hover:cursor-pointer hover:bg-green-400" onClick={handleProfileClick}>
        IM
      </div>
    </nav>
  );
}

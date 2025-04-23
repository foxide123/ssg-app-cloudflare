import NavbarData from "@/data/en/NavbarData.json";
import Link from "next/link";

export function NavbarComponent(){
    const links = NavbarData.Navbar.Links;
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-[150px] bg-black text-white flex justify-around items-center text-2xl">
         {links.map((link:any, index) => (
                <Link key={index} href={link.href}>{link.name}</Link>
            ))} 
        </div>
    )
}
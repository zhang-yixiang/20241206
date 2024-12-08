import Link from "next/link";
import {navRoutes} from "@/app/config/nav-routes";


export default function NavMenuDesktop() {
  return (
    <div className="desktop-menu-wrapper">
      {
        navRoutes.map((route) => (
          <Link key={route.name} className='hover:underline' href={route.path}>
            {route.name}
          </Link>))
      }
    </div>
  )
}
import {navRoutes} from "@/app/config/nav-routes";
import Link from "next/link";

export default function NavMenuMobile() {
  return (
    <div className="mobile-menu-wrapper">
      {
        navRoutes.map((route) => (
          <Link key={route.name} href={route.path}>
            {route.name}
          </Link>
        ))
      }
    </div>
  )
}
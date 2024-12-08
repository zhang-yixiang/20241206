import {navRoutes} from "@/app/config/nav-routes";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: block;
  padding: 10px;
  a {
    display: block;
    padding: 10px;
    font-weight: 500;
    font-size: 15px;
  }
`
export default function NavMenuMobile() {
  return (
    <Wrapper>
      {
        navRoutes.map((route) => (
          <Link key={route.name} href={route.path}>
            {route.name}
          </Link>
        ))
      }
    </Wrapper>
  )
}
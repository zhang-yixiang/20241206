import Link from "next/link";
import {navRoutes} from "@/app/config/nav-routes";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-content: flex-end;
  a {
    padding: 10px;
    font-weight: 500;
    font-size: 15px;
  }
`

export default function NavMenuDesktop() {
  return (
    <Wrapper>
      {
        navRoutes.map((route) => (
          <Link key={route.name} className='hover:underline' href={route.path}>
            {route.name}
          </Link>))
      }
    </Wrapper>
  )
}
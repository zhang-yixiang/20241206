import Link from "next/link";
import LogoIcon from "@/app/icons/logo.svg";
import styled from "styled-components";

// styled wrapper for the logo
const Wrapper = styled.div`
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
  a {
    color: inherit;
    text-decoration: none;
  }
`
const IconWrapper = styled(LogoIcon)`
  fill: none;
  height: 18px;
  width: auto;
  path {
      fill: black
  } 
`

export default function Logo() {
  return (
    <Wrapper className="font-serif">
      <Link href={"https://pdf.ai/"}>
        <IconWrapper/>
        PDF.ai
      </Link>
    </Wrapper>
  )
}
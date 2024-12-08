import Link from "next/link";
import LogoIcon from "@/app/icons/logo.svg";

export default function Logo() {
  return (
    <div className="font-serif logo-name-wrapper">
      <Link href={"https://pdf.ai/"}>
        <LogoIcon/>
        PDF.ai
      </Link>
    </div>
  )
}
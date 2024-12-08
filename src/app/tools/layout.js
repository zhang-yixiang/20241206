import NavBar from '@/app/components/nav-bar/common-nav-bar'
import Footer from "@/app/components/footer/footer";

export default function ToolsLayout({children}) {
  return (
    <div>
      <NavBar/>
        {children}
      <Footer/>
    </div>
  )
}
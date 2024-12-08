import NavBar from '@/app/components/nav-bar/common-nav-bar'
import Footer from "@/app/components/footer/footer";

/**
 * tools路由下的通用布局
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function ToolsLayout({children}) {
  return (
    <div>
      <NavBar/>
        {children}
      <Footer/>
    </div>
  )
}
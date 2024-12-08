import SiteMap from "@/app/components/footer/site-map";
import SiteInfo from "@/app/components/footer/site-info";

export default function FooterContent() {
  return (
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <SiteInfo/>
      <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
        <SiteMap/>
      </div>
    </div>
  )
}
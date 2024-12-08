import {LINKS} from "@/app/config/links";
import SiteMapCol from "@/app/components/footer/site-map-col";

/**
 * use LINKS to generate a site map
 */
export default function SiteMap() {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-8">
      {
        LINKS.map((linkCol, index) => (
          <SiteMapCol
            key={linkCol.title}
            item={linkCol}
            firstCol={index === 0}
          />
        ))
      }
    </div>
  )
}
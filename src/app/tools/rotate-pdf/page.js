import {TOOLS_META} from "@/app/config/page-meta";
import RotatePDF from "@/app/tools/rotate-pdf/page-content";

const PAGE_META = TOOLS_META['rotate-pdf']

export const metadata = {
  ...PAGE_META.meta,
}

export default function RotatePDFWrapper() {
  return (
    <main className="bg-[#f7f5ee] text-black">
      <RotatePDF/>
    </main>
  )
}
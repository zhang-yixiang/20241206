import {TOOLS_META} from "@/app/config/page-meta";
import RotatePDF from "@/app/tools/rotate-pdf/page-content";

const PAGE_META = TOOLS_META['rotate-pdf']

export const metadata = {
  ...PAGE_META.meta,
}
/**
 * 因为RotatePDF组件无法在服务端渲染，所以需要在这里包装一层，以配置页面元数据
 * @returns {JSX.Element}
 */
export default function RotatePDFWrapper() {
  return (
    <main className="bg-[#f7f5ee] text-black">
      <RotatePDF/>
    </main>
  )
}
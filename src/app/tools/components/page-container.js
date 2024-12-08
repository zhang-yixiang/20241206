import {useState, useRef, useEffect} from "react";
import RotateIcon from '@/app/icons/rotate.svg';
import PageAndNameWrapper from "@/app/tools/components/page-and-name-wrapper";

/**
 * PageContainer component wraps the page wrapper and the
 * rotate icon in the top right corner of the page.
 * @param props {{index: number, canvas: HTMLCanvasElement, name: string, rotation: number, onRotate: function}}
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageContainer(props) {
  const {
    index: pageIndex,
    canvas,
    name,
    rotation,
    onRotate,
  } = props;
  const wrapperRef = useRef(null);
  const [canvasStyled, changeCanvasStyledState] = useState(null);
  useEffect(() => {
    if (wrapperRef.current) {
      if (!canvasStyled) {
        canvas.style.transitionProperty = "transform";
        canvas.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
        canvas.style.transitionDuration = "150ms";
        changeCanvasStyledState(true);
      }
      canvas.style.transform = "rotate(".concat(String(rotation), "deg)");
    }
  }, [wrapperRef, canvas, rotation])

  return (
    <div
      className="relative cursor-pointer pdf-page"
      data-page-num={pageIndex}
      onClick={() => onRotate(rotation + 90)}
    >
      <div
        className="absolute z-10 top-1 right-1 rounded-full p-1 hover:scale-105 hover:fill-white bg-[#ff612f] fill-white"
      >
        <RotateIcon className="w-3"/>
      </div>
      <div
        ref={wrapperRef}
        className="overflow-hidden transition-transform"
        >
          <PageAndNameWrapper canvas={canvas} name={name}/>
      </div>
    </div>
  )
}
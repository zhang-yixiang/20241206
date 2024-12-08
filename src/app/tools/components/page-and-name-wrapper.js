import {useEffect, useRef} from "react";


/**
 * PageAndNameWrapper 组件是 canvas 元素和页面名称的包装器。
 * canvas 准备好后会被添加到 DOM 中
 *
 * @param canvas - canvas element with rendered page
 * @param name - page name(number)
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageAndNameWrapper({ canvas, name }) {
  const canvasWrapperRef = useRef(null);
  useEffect(() => {
      if (canvasWrapperRef.current && canvas) {
        canvasWrapperRef.current.appendChild(canvas);
      }
      return () => {
        if (canvas != null) {
          canvas.remove();
        }
      };
    },
    [canvasWrapperRef.current, canvas])
  return (
    <div
      className="relative h-full w-full flex flex-col justify-between items-center shadow-md p-3 bg-white hover:bg-gray-50"
    >
      <div
        ref={canvasWrapperRef}
        className="pointer-events-none w-full shrink"
      >
      </div>
      <div
        className="w-[90%] text-center shrink-0 text-xs italic overflow-hidden text-ellipsis whitespace-nowrap"
      >{name}</div>
    </div>
  );
}
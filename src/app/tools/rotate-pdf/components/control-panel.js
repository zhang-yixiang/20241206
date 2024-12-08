import styled from "styled-components";
import ZoomInIcon from "@/app/icons/zoom-in.svg";
import ZoomOutIcon from "@/app/icons/zoom-out.svg";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  position: relative;
  cursor: pointer;
  text-align: center;
  line-height: normal;
  white-space: nowrap;
  margin: 0;
  padding: 10px 12px;
  width: 100%;
  color: rgb(255, 255, 255);
  background: rgb(255, 97, 47);
  //font-family: var(--sans);
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  border-radius: 4px;
  border: none;
`
/**
 *
 * @param onRemove {function}
 * @param onRotateAll {function}
 * @param onZoomIn {function}
 * @param onZoomOut {function}
 * @param disabledZoomIn {boolean}
 * @param disabledZoomOut {boolean}
 * @returns {JSX.Element}
 * @constructor
 */
export default function ControlPanel({
                                       onRemove,
                                       onRotateAll,
                                       onZoomIn,
                                       onZoomOut,
                                       disabledZoomIn,
                                       disabledZoomOut
}) {
  return (
    <div className="flex justify-center items-center space-x-3 selecto-ignore font-sans">
      <Button
        className="!w-auto"
        onClick={onRotateAll}
      >Rotate all</Button>
      <Button
        className="!w-auto !bg-gray-800"
        aria-label="Remove this PDF and select a new one"
        data-microtip-position="top"
        role="tooltip"
        onClick={onRemove}
      >
        Remove PDF
      </Button>
      <button
        className="bg-[#ff612f] shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
        aria-label="Zoom in"
        data-microtip-position="top"
        role="tooltip"
        disabled={disabledZoomIn}
        onClick={onZoomIn}
      >
        <ZoomInIcon className="w-5 h-5"/>
      </button>
      <button
        className="bg-[#ff612f] shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
        aria-label="Zoom out"
        data-microtip-position="top"
        role="tooltip"
        disabled={disabledZoomOut}
        onClick={onZoomOut}
      >
        <ZoomOutIcon className="w-5 h-5"/>
      </button>
    </div>
  )
}
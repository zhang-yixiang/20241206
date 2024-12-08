import styled from "styled-components";

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
    margin: 0px;
    padding: 10px 12px;
    width: 100%;
    color: rgb(255, 255, 255);
    background: rgb(255, 97, 47);
    //font-family: var(--sans);
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    border-radius: 4px;
    border: none;`

/**
 * 上传文件后的下载栏
 * @param onDownload {function}
 * @param disabled {boolean}
 * @returns {JSX.Element}
 * @constructor
 */
export default function DownloadBar({onDownload, disabled}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 selecto-ignore">
      <Button
        className="!w-auto shadow font-sans"
        aria-label="Split and download PDF"
        data-microtip-position="top"
        role="tooltip"
        disabled={disabled}
        onClick={onDownload}
      >
        Download
      </Button>
    </div>
  )
}
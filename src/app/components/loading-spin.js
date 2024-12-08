import styled from "styled-components";

const SpinWrapper = styled.div`
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    animation-name: spinner;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    border: 3px solid;
    transition: 0.2s;
`

/**
 * 一个加载中的旋转动画
 * @param color - color of the spinner
 * @returns {JSX.Element}
 * @constructor
 */
export default function LoadingSpin ({color}) {
  return (
    <SpinWrapper
      className={`!border-black/30 !border-t-black`}
    />
  )
}
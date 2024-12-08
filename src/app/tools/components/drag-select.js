import Selecto from "react-selecto";

/**
 *
 * @param props {{indexAttrProp: string, ignoreClass: string, container: HTMLElement, selectableTargets: string[], onChange: function}}
 * @returns {JSX.Element}
 * @constructor
 */
export default function DragSelect(props) {
  const {
    indexAttrProp,
    ignoreClass,
    container,
    selectableTargets,
    onChange
  } = props;

  const onSelect = e => {
    if (e.inputEvent.type === "mousedown" && e.inputEvent.target.closest(ignoreClass)) {
      return;
    }
    e.removed.forEach(e => {
      let index = e.getAttribute(indexAttrProp);
      if (index) {
        onChange(Number(index), "remove");
      }
    });
    e.added.forEach(e => {
      let index = e.getAttribute(indexAttrProp);
      if (index) {
        onChange(Number(index), "add");
      }
    });
  };

  return (
    <Selecto
      container={container}
      dragContainer={container}
      boundContainer={container}
      selectableTargets={selectableTargets}
      selectByClick={false}
      selectFromInside={true}
      continueSelect={false}
      toggleContinueSelect="shift"
      hitRate={50}
      onSelect={onSelect}
    />
  );
}
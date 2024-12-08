import MenuIcon from '@/app/icons/menu.svg'
import CloseIcon from '@/app/icons/close.svg'
import styled from 'styled-components'

const Button = styled.button`
  display: block;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 10px;
  pointer-events: all;
  svg {
    display: block;
    pointer-events: none;
    width: 20px;
    height: auto;
  }
`

export default function MenuButton({ menuState, setMenuState,className }) {
  return (
    <Button
      onClick={() => setMenuState(!menuState)}
      aria-label="Menu"
      className={className}
    >
      {menuState ? (
        <CloseIcon className="menu-button-icon" />
      ) : (
        <MenuIcon className="menu-button-icon" />
      )}
    </Button>
  )
}
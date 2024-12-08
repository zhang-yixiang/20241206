import MenuIcon from '@/app/icons/menu.svg'
import CloseIcon from '@/app/icons/close.svg'

export default function MenuButton({ menuState, setMenuState,className }) {
  return (
    <button
      onClick={() => setMenuState(!menuState)}
      aria-label="Menu"
      className={className + " nav-button-wrapper"}
    >
      {menuState ? (
        <CloseIcon className="menu-button-icon" />
      ) : (
        <MenuIcon className="menu-button-icon" />
      )}
    </button>
  )
}
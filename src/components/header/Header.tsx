import HeaderButton from "./HeaderButton"


const Header = () => {
  return (
    <header
      className="header fixed top-0 left-0 w-screen h-[10%] flex items-center justify-center gap-12 shadow-xl"
    >
      <HeaderButton buttonName="Stack" />
      <HeaderButton buttonName="Queue" />
      <HeaderButton buttonName="Linked List" />
    </header>
  )
}

export default Header
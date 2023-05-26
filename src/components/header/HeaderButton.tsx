import { useHeaderButton } from "../../hooks/useHeaderButton"

interface HeaderButtonType {
    buttonName: string
}

const HeaderButton = ({ buttonName }: HeaderButtonType) => {
    const {handleClick, name} = useHeaderButton({buttonName})

  return (
      <button className="flex items-center gap-4">
          {name === buttonName && (<span className="relative bottom-1  bg-emerald-400 rounded-full p-1"></span>)}
          {name !== buttonName && (<span className="relative bottom-1  rounded-full p-1"></span>)}
        <p
          onClick={() => handleClick()}
          className="text-xl text-emerald-400 cursor-pointer"
        >
          {buttonName}
      </p>
      </button>
  )
}

export default HeaderButton

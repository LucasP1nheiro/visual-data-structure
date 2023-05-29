import { useContext } from "react"
import { DataStructureContext } from "../../context/DataStructureContext"

interface useHeaderButton {
    buttonName: string
}

export const useHeaderButton = ({ buttonName }: useHeaderButton) => {
    const {setName, name} = useContext(DataStructureContext)

    const handleClick = () => {
        setName(buttonName)
    }



    return {
        handleClick,
        name
    }
}
import { Info, X } from "phosphor-react"
import * as Popover from '@radix-ui/react-popover';
  
interface DefinitionProps {
    title: string,
    definition: string
}


const Definition = ({title, definition}: DefinitionProps) => {
  return (
    <Popover.Root>
        <Popover.Trigger >
            <Info size={32} color={"#34d399"} />
        </Popover.Trigger>
    
        <Popover.Portal>
            <Popover.Content className="w-80 h-72 backdrop-blur-sm shadow-2xl p-4 rounded-xl  bg-black/5 flex flex-col gap-4">
                <div
                    className="w-full flex items-center justify-between"
                >
                <h1 className="text-xl text-emerald-400 ">{title}</h1>      

                    <Popover.Close  aria-label="Close">
                        <X size={24} color={"#34d399"}/>
                    </Popover.Close>

                    
                </div>
                <p className="text-md text-white">{definition}</p>
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
  )
}

export default Definition
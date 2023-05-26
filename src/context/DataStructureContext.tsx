import { createContext, useState } from 'react';

interface DataStructureContextProps {
    name: string,
    setName: (name: string) => void
}

interface DataStructureContextProviderProps {
    children: React.ReactNode
}

export const DataStructureContext = createContext<DataStructureContextProps>({
    name: 'Pile',
    setName: () => {},
});



export default function DataStructureContextProvider({ children }: DataStructureContextProviderProps) {
    const [name, setName] = useState('Pile')

    return (
        <DataStructureContext.Provider value={{name, setName}}>
            {children}
        </DataStructureContext.Provider>
    )
}
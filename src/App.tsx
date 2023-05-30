
import Header from "./components/header/Header"
import Stack from "./components/stack/Stack"
import Queue from "./components/queue/Queue"
import { useContext } from "react"
import {DataStructureContext} from "./context/DataStructureContext"



function App() {
  const dataStructure = [
    {
      name: "Stack",
      render: <Stack />
    },
    {
      name: "Queue",
      render: <Queue />
    }
  ]

  const {name} = useContext(DataStructureContext)

  return (
    <div className="min-h-screen w-screen flex items-center justify-center overflow-x-hidden">
      <Header />
      {dataStructure.map((ds) => 
        ds.name === name && (ds.render)
      )}
    </div>
  )
}

export default App

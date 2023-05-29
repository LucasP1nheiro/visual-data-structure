import { useContext } from "react"
import { DataStructureContext } from "../../context/DataStructureContext"
import empty from '../../assets/empty.svg'


const Empty = () => {
    const {name} = useContext(DataStructureContext)

  return (
      <main className=" flex flex-col items-center justify-center gap-8">
          <img src={empty} alt={`Empty ${name}`} />
          <h1 className="text-3xl font-bold text-white">Whooops...</h1>
          <p
              className="text-lg text-white inline"
          >
              Looks like your
              <span className="text-lg text-emerald-500 inline"> {name} </span>
              is empty! Try adding something in it.
          </p>
    </main>
  )
}

export default Empty
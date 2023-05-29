import Empty from "../components/empty/Empty"
import { usePile } from "../hooks/pile/usePile"
import {ArrowLeft, ArrowRight, Minus, Plus, Trash} from 'phosphor-react'


const Pile = () => {
    const {array, handlePile, number, setNumber, handleClear, handlePop} = usePile()

  return (
    <main className="min-h-screen w-screen flex flex-col justify-center items-center gap-4 py-24 overflow-x-hidden">
        {array.length === 0 && (<Empty />)}

        {array.length > 0 && (
            <div className="flex flex-col">
                {array.map((_, index) => (
                    <div
                        key={index}
                        className={index % 2 == 0 ? "p-12 rounded-md border-[1px] border-emerald-400 bg-emerald-400/20" : "p-12 rounded-md border-[1px] border-emerald-400 bg-emerald-400/30"}
                    >
                        <p
                            className="text-3xl text-white font-bold"
                        >{array[array.length - 1 - index]}</p> 
                    </div>
                ))}
            </div>
        )}

        <form
            onSubmit={handlePile}
            className="header w-screen h-[10%] flex gap-8 justify-center items-center fixed bottom-0 left-0 shadow-2xl"
          >
              <p className="text-white">
                  Length: <span className="text-emerald-400">{array.length}</span>
              </p>
              <div className="flex items-center gap-2">
                  <button
                      onClick={() => setNumber(number - 1)}
                      type="button"
                  >
                      <ArrowLeft size={18} color={'#34d399'} />
                  </button>
                  <p className="text-white">{number}</p>
                  <button
                      onClick={() => setNumber(number + 1)}
                      type="button"
                  >
                      <ArrowRight size={18} color={'#34d399'} />
                  </button>
            </div>
            <button
                type="submit"
                className="p-2 text-emerald-400 border-emerald-400 border-[1px] rounded-md flex gap-2 items-center "
            >
                <Plus size={18} color={'#34d399'} />
                <p>Push</p>
            </button>
            <button
                className="p-2 text-emerald-400 border-emerald-400 border-[1px] rounded-md flex gap-2 items-center "
                  onClick={() => handlePop()}
                  type="button"
            >
                <Minus size={18} color={'#34d399'} />
                <p>Pop</p>
              </button>
              <button
                className="p-2 text-emerald-400 border-emerald-400 border-[1px] rounded-md flex gap-2 items-center "
                  onClick={() => handleClear()}
                  type="button"
            >
                <Trash size={18} color={'#34d399'} />
                <p>Clear</p>
            </button>
        </form>
    </main>
  )
}

export default Pile
import { ArrowLeft, ArrowRight, Minus, Plus, Trash } from "phosphor-react"
import useQueue from "../../hooks/queue/useQueue"
import Empty from "../empty/Empty"
import QueueNode from "./QueueNode"
import Definition from "../definition/Definition"


const Queue = () => {
    const {
      queue,
      number,
      handleEnqueue,
      handleDequeue,
      handleClear,
      incrementNumber,
      decrementNumber,
      definition
    } = useQueue()

  
  

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center gap-4 py-24 overflow-x-hidden">
          {queue.length === 0 && (<Empty />)}
          
          {queue.length > 0 && (
            <main
              className="flex items-start gap-4"
            >
              {queue.map((_, index) => (
                <>
                  <QueueNode index={index} queue={queue}/>
                </>
                
                
                ))}
            </main>
          )}

          <footer className="fixed bottom-0 h-[10%] left-0 w-screen flex justify-center items-center gap-8">
            <p className="text-white">
                Length: <span className="text-emerald-400">{queue.length}</span>
            </p>
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={() => decrementNumber()}
                >
                    <ArrowLeft size={18} color={'#34d399'} />
                </button>
          <p className="text-white">{number}</p>
                <button
                  type="button"
                  onClick={() => incrementNumber()}
                  className="p-1"
                >
                    <ArrowRight size={18} color={'#34d399'} />
                </button>
              </div>
              
              <button
                type="button"
                  className="p-2 text-emerald-400 border-emerald-400 border-[1px] rounded-md flex gap-2 items-center "
                  onClick={() => handleEnqueue()}
            >
                <Plus size={18} color={'#34d399'} />
                <p>Enqueue</p>
            </button>
            <button
                className="p-2 text-emerald-400 border-emerald-400 border-[1px] rounded-md flex gap-2 items-center "
                  type="button"
                  onClick={() => handleDequeue()}
            >
                <Minus size={18} color={'#34d399'} />
                <p>Dequeue</p>
              </button>
              <button
                className="p-2 text-emerald-400 border-emerald-400 border-[1px] rounded-md flex gap-2 items-center "
                  type="button"
                  onClick={() => handleClear()}
            >
                <Trash size={18} color={'#34d399'} />
                <p>Clear</p>
            </button>
        <Definition title="Queue" definition={definition} />
          </footer>
    </div>
  )
}

export default Queue
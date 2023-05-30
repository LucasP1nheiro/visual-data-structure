

interface QueueNodeProps {
    index: number,
    queue: number[]
}

const QueueNode = ({index, queue} : QueueNodeProps) => {
  return (
      <>
        <div
            className="flex flex-col gap-2 items-center"
        >   
            <div
                key={index}
                className={index % 2 == 0 ? "p-12 rounded-md border-[1px] border-emerald-400 bg-emerald-400/20" : "p-12 rounded-md border-[1px] border-emerald-400 bg-emerald-400/30"}
            >
                <p
                    className="text-3xl text-white font-bold"
                >
                    {queue[index]}
                </p> 
            </div>
              
              {index === 0 && (<p className="text-white">Start</p>)}
              {index === queue.length - 1 && (<p className="text-white">End</p>)}
              
        </div>
    
        
      </>
  )
}

export default QueueNode
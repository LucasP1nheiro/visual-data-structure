import { useState } from "react";

export default function useQueue() {
    const [queue, setQueue] = useState<number[]>([])
    const [number, setNumber] = useState(0)

    const handleEnqueue = () => {

        
        if (queue.length < 10) setQueue((prev) => [...prev, number])
        
        

        setNumber(0)
    }

    const handleDequeue = () => {
        setQueue((number) => number.filter((_, index) => index !== 0))
    }

    const handleClear = () => {
        setQueue([])
    }

    const incrementNumber = () => {
        setNumber(number + 1)
    }

    const decrementNumber = () => {
        setNumber(number - 1)
    }


    return {
        queue,
        setQueue,
        number,
        setNumber,
        handleEnqueue,
        handleDequeue,
        handleClear,
        incrementNumber,
        decrementNumber
    }
}

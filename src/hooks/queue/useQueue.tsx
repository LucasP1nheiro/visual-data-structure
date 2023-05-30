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

    const definition = "A queue is a fundamental data structure in computer science that follows the principle of 'first-in, first-out' (FIFO). It can be visualized as a line of people waiting for a service, where the person who arrives first is the first one to be served."


    return {
        queue,
        setQueue,
        number,
        setNumber,
        handleEnqueue,
        handleDequeue,
        handleClear,
        incrementNumber,
        decrementNumber,
        definition
    }
}

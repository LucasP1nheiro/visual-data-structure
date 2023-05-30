import { useState } from "react"

export const usePile = () => {
    const [array, setArray] = useState<number[]>([])
    const [number, setNumber] = useState(0)

    const handlePush = (e: React.FormEvent) => {
        e.preventDefault()

         setArray((prev) => [...prev, number])

        setNumber(0)
    }

    const handlePop = () => {
        setArray((number) => number.filter((_, index) => index !== array.length - 1))
    }

    const handleClear = () => {
        setArray([])
    }

    const definition = "A stack is a fundamental data structure in computer science that follows the principle of 'last-in, first-out' (LIFO). It can be visualized as a vertical stack of objects, where the last object placed on top is the first one to be removed."
    

    return {
        array,
        handlePush,
        number,
        setNumber,
        handleClear,
        handlePop,
        definition
    }
}
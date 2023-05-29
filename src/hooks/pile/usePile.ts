import { useState } from "react"

export const usePile = () => {
    const [array, setArray] = useState<number[]>([])
    const [number, setNumber] = useState(0)

    const handlePile = (e: React.FormEvent) => {
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
    

    return {
        array,
        handlePile,
        number,
        setNumber,
        handleClear,
        handlePop
    }
}
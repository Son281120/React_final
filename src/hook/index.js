import { useState } from "react"

const useHoverItem = () => {
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    return {isHover: isHover, handleMouseEnter: handleMouseEnter, handleMouseLeave: handleMouseLeave}
}

export default useHoverItem
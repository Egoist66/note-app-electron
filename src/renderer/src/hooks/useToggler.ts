import { useState } from "react"

export const useToggler = (mode?: boolean) => {
    const [isToggled, setIsToggled] = useState(mode || false)
    const toggle = () => setIsToggled(!isToggled)
    const setToggled = (value: boolean) => setIsToggled(value)

    return {
        isToggled,
        toggle,
        setToggled
    }
}
import { useEffect, useState } from "react"


type TogglerTypes = {
    mode: boolean,
    options?: {
        toggleByKey?: boolean,
        CtrlKeyEnabled?: boolean
        keyShortcut?: string,
        callback?: (fn: () => void) => void
    }
}

/**
 * A custom React hook for managing toggle state and keyboard shortcuts.
 *
 * @param {TogglerTypes} params - An object containing the initial mode and optional keyboard shortcut settings.
 * @param {boolean} params.mode - The initial toggle state.
 * @param {object} [params.options] - Optional settings for keyboard shortcuts.
 * @param {boolean} [params.options.toggleByKey] - Whether to enable keyboard shortcuts.
 * @param {boolean} [params.options.CtrlKeyEnabled] - Whether to require the Ctrl key for keyboard shortcuts.
 * @param {string} [params.options.keyShortcut] - The key to use for keyboard shortcuts.
 * @param {function} [params.options.callback] - A callback function to call when the toggle state changes.
 * @return {object} An object containing the current toggle state, a function to toggle the state, and a function to set the toggle state.
 */

export const useToggler = ({mode, options}: TogglerTypes) => {
    const [isToggled, setIsToggled] = useState(mode || false)
    const toggle = () => setIsToggled(!isToggled)
    const setToggled = (value: boolean) => setIsToggled(value)


    const toggleByKeys = (e: KeyboardEvent) => {
        
        if(options?.toggleByKey){
            if(options?.keyShortcut && options.CtrlKeyEnabled){
                const key = options.keyShortcut
                if(e.ctrlKey && options.CtrlKeyEnabled && key === e.key){
                    if(options.callback){
                        options?.callback(toggle)

                    }
                }

               
                return
            }
        }

        if(options?.toggleByKey){
          
            if(options?.keyShortcut){
                const key = options.keyShortcut
                if(e.ctrlKey && key === e.key){
                   return
                }
                else if (key === e.key) {
                    if(options.callback){
                        options?.callback(toggle)

                    }
                }
               
                return
            }
        }
    }


    useEffect(() => {

        document.addEventListener('keydown', toggleByKeys)

        return () => {
            document.removeEventListener('keydown', toggleByKeys)
        }
    })


    return {
        isToggled,
        toggle,
        setToggled
    }
}
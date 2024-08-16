import { ComponentProps, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps =  {
    props?: ComponentProps<'button'>,
    children?: ReactNode
}
export const ActionButton: FC<ButtonProps> = ({children, props}): JSX.Element => {

    return (
        
        
        <button {...props} className={twMerge('px-2 py-2 cursor-pointer shadow-md rounded bg-cyan-600 hover:bg-cyan-500 transition-all duration-300', props?.className)} >
            {children}
        </button>
        
    )
}
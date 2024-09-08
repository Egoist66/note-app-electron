import { ComponentProps, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const FloatingNoteTitle: FC<ComponentProps<'div'> & {children?: ReactNode}> = ({className, children, ...props}) => {
    const title = "Note Title";
    return (
        <div className={twMerge('flex justify-center', className)} {...props}>

            <span className="text-gray-400">{children ||title}</span>

        </div>
    )
}
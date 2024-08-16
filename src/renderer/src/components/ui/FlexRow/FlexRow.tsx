import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type FlexRowType = ComponentProps<'div'>

export const FlexRow = ({children, className, ...props}: FlexRowType) => {
    return (
        <div {...props} className={twMerge("w-full flex flex-row", className)}>
            {children}
        </div>
    )
}
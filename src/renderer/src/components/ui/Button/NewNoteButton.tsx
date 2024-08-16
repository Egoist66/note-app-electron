import { FC } from "react"
import { ActionButton, ButtonProps } from "./ActionButton"
import { LuFileSignature } from "react-icons/lu";



export const NewNoteButton: FC<ButtonProps> = ({children, props}) => {
    return <ActionButton props={props}>
        {children ?? <LuFileSignature /> }
    </ActionButton>
}
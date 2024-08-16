import { FC } from "react";
import { ButtonProps, ActionButton } from "./ActionButton";
import {FaRegTrashCan} from 'react-icons/fa6'



export const DeleteNoteButton: FC<ButtonProps> = ({children, props}) => {
    return <ActionButton props={props}>
        {children ?? <FaRegTrashCan/>}
    </ActionButton>
}

import { DraggableTopBar } from "./features/DraggableTopBar";
import { Content } from "./layout/Content";
import { SideBar } from "./layout/SideBar";
import { ActionButton } from "./ui/Button/ActionButton";
import { NewNoteButton } from "./ui/Button/NewNoteButton";
import { FlexRow } from './ui/FlexRow/FlexRow';
import { DeleteNoteButton } from './ui/Button/DeleteNoteButton';
import { lazy } from "react";
import { MarkDownEditor } from './features/MardownEditor';
import { FloatingNoteTitle } from './features/FloatingNoteTitle';

const NotesList = lazy(() => import("./features/NotesList"));

export * from "./layout/RootLayout";
export { 
    Content, 
    SideBar, 
    DraggableTopBar, 
    ActionButton, 
    NewNoteButton,
    DeleteNoteButton,
    MarkDownEditor,
    NotesList,
    FloatingNoteTitle,
    FlexRow 
};

import { MDXEditorMethods } from "@mdxeditor/editor";
import { saveNoteAtom, selectedNoteAtom } from "@renderer/store";
import { NoteContent } from "@shared/models";
import { useAtomValue, useSetAtom } from "jotai";
import { useRef } from "react";
import { debounce } from 'lodash';
import { Bounce, toast } from "react-toastify";

export const useMarkDownEditor = () => {
    const selectedNote = useAtomValue(selectedNoteAtom)
    const saveNote = useSetAtom(saveNoteAtom); 
    const editorRef = useRef<MDXEditorMethods>(null)


    const handleAutoSave = debounce(async (content: NoteContent) => {
        if(!selectedNote) return

        console.info(`Auto saving note ${selectedNote.title}`)

        await saveNote(content)
        toast('📝 Note saved!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem("theme") === "dark" ? "dark" : "light",
            transition: Bounce,
        });
    
    }, 2000, {leading: false, trailing: true})

  
    const handleSaveBlur = async () => {
        if(!selectedNote) return
        handleAutoSave.cancel()

        const content = editorRef.current?.getMarkdown()
        if(content){
            await saveNote(content)
        }
    }

    return {
        handleAutoSave,
        handleSaveBlur,
        selectedNote,
        editorRef
    }
    
}
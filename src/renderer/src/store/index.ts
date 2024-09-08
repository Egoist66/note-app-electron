import { NoteInfo } from "@shared/models";
import { atom } from "jotai";
import { notesMockData } from "./mocks";

export const notesAtom = atom<NoteInfo[]>(notesMockData)
export const selectedNoteIdAtom = atom<string | null>("")

export const selectedNoteAtom = atom((get) => {
    const notes = get(notesAtom)
    const selectedNoteId = get(selectedNoteIdAtom)

    if(!selectedNoteId) return null

    const selectedNote = notes[notes.findIndex((note) => note.id === selectedNoteId)]

    return {
        ...selectedNote,
        content: `Hello from Note ${selectedNoteId}`
    }
})

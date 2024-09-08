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

export const createEmptyNoteAtom = atom(null, (get, set) => {
    const notes = get(notesAtom)
    const title =  `Note ${notes.length + 1}`
    const newNote: NoteInfo = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        title,
        lastEditTime: Date.now(),
    }

    set(notesAtom, [
        newNote, 
        ...notes.filter((note) => note.title !== newNote.title)
    ])
    set(selectedNoteIdAtom, newNote.id)
})

export const deleteNoteAtom = atom(null, (get, set, id: string) => {
    const notes = get(notesAtom)
    set(notesAtom, notes.filter((note) => note.id !== id))
    set(selectedNoteIdAtom, null)
})


import { NoteContent, NoteInfo } from "@shared/models";
import { atom } from "jotai";
import {unwrap} from "jotai/utils";

const loadNotes = async () => {
 const notes = await window.context.getNotes()

 return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

//-------------------------------------------------------

const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

//-------------------------------------------------------

export const notesAtom = unwrap(notesAtomAsync, (prev) => prev)
export const selectedNoteIdAtom = atom<string | null>("")

//-------------------------------------------------------
const selectedNoteAtomAsync = atom(async (get) => {
    const notes = get(notesAtom)
    const selectedNoteId = get(selectedNoteIdAtom)

    if(!selectedNoteId || !notes) return null

    const selectedNote = notes[notes.findIndex((note) => note.id === selectedNoteId)]
    const noteContent = await window.context.readNotes(selectedNote.title)
    
    return {
        ...selectedNote,
        content: noteContent
    }
})

//-------------------------------------------------------

export const selectedNoteAtom = unwrap(selectedNoteAtomAsync, (prev) => prev ?? {
    title: "",
    content: "",
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    lastEditTime: Date.now
})

export const createEmptyNoteAtom = atom(null, async (get, set) => {
    const notes = get(notesAtom)

    if(!notes) return

    const title =  await window.context.createNote()
    
    if(!title) return

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

export const deleteNoteAtom = atom(null, async (get, set) => {
    const notes = get(notesAtom)
    const selectedNote = get(selectedNoteAtom)

    if(!notes || !selectedNote) return

    if(await window.context.deleteNote(selectedNote?.title)){
        set(notesAtom, notes.filter((note) => note.id !== selectedNote.id))
        set(selectedNoteIdAtom, null)
    }
   
})

export const saveNoteAtom = atom(null, async (get, set, content: NoteContent) => {
   const notes = get(notesAtom)
   const selectedNote = get(selectedNoteAtom)

   if(!notes || !selectedNote) return

    await window.context.writeNotes(selectedNote.title, content)
    set(
        notesAtom, 
        notes.map((note) => note.title === selectedNote.title ? {...note, lastEditTime: Date.now()} : note)
    )
       
})

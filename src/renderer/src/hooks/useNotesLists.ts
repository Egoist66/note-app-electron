import { notesAtom, selectedNoteAtom, selectedNoteIdAtom } from "@renderer/store";
import { useAtom, useAtomValue } from "jotai";

export const useNotesList = (onSelect?: () => void) => {
  const [notes, setNotes] = useAtom(notesAtom)
  const [selectedNoteId, setSelectedNoteId] = useAtom(selectedNoteIdAtom)
  const selectedNote = useAtomValue(selectedNoteAtom)
  


  const handleNoteSelect = async (id: string) => {
    setSelectedNoteId(id)

    if(onSelect){
      onSelect()
    }
  }

  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))

    if(selectedNoteId === id){
      setSelectedNoteId(null)
    }
    
  }

  return {
    notes,
    selectedNoteId,
    selectedNote,
    handleNoteSelect,
    handleDeleteNote
  }
};

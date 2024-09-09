import {
  createEmptyNoteAtom,
  deleteNoteAtom,
  notesAtom,
  selectedNoteAtom,
  selectedNoteIdAtom,
} from "@renderer/store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

export const useNotesList = (onSelect?: () => void) => {
  const [notes] = useAtom(notesAtom)
  const [selectedNoteId, setSelectedNoteId] = useAtom(selectedNoteIdAtom)
  const setDeleteNote = useSetAtom(deleteNoteAtom)
  const selectedNote = useAtomValue(selectedNoteAtom)
  const createNote = useSetAtom(createEmptyNoteAtom);



  const handleNoteSelect = async (id: string) => {
    setSelectedNoteId(id)


    if(onSelect){
      onSelect()
    }
  }

  const handleDeleteNote = async () => {
    await setDeleteNote()
    
    
  }

  const handleCreateNote = async () => {
    await createNote()

     
    
  }



  return {
    notes,
    selectedNoteId,
    selectedNote,
    handleNoteSelect,
    handleCreateNote,
    handleDeleteNote,
  }
};

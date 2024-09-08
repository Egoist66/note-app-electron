import { notesAtom, selectedNoteAtom, selectedNoteIdAtom } from "@renderer/store";
import { useAtom, useAtomValue } from "jotai";

export const useNotesList = (onSelect?: () => void) => {
  const notes = useAtomValue(notesAtom)
  const [selectedNoteId, setSelectedNoteId] = useAtom(selectedNoteIdAtom)
  const selectedNote = useAtomValue(selectedNoteAtom)
  


  const handleNoteSelect = async (id: string) => {
    setSelectedNoteId(id)

    if(onSelect){
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteId,
    selectedNote,
    handleNoteSelect
  }
};

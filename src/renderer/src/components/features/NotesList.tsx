import { domRef, mapToElements } from "@renderer/utils";
import { FC } from "react";
import { DeleteNoteButton, FlexRow, NewNoteButton } from "..";
import { NoteListItem } from "./NoteListItem";
import { useNotesList } from "@renderer/hooks/useNotesLists";

const NotesList: FC = (): JSX.Element => {
  const {
   notes,
    handleNoteSelect,
    handleDeleteNote,
    handleCreateNote,
    selectedNoteId,
  } = useNotesList(() => {
    domRef("main")?.scrollTo(0, 0)
  });


  const noteList = mapToElements(notes, (note) => (
    <NoteListItem
      {...note}
      isActive={note.id === selectedNoteId}
      onClick={() => handleNoteSelect(note.id)}
      key={note.id}
    />
  ));

  

  return (
    <>
      <FlexRow className="gap-2 justify-between items-center">
        <NewNoteButton props={{ onClick: () => handleCreateNote() }} />
        <DeleteNoteButton
          props={{
            disabled: !selectedNoteId,
            className: "bg-red-500 hover:bg-red-600",
            onClick: () => handleDeleteNote(selectedNoteId!),
          }}
        />
      </FlexRow>

      <ul className="mt-3 space-y-1">
        {noteList.length ? noteList : "No Notes"}
      </ul>
    </>
  );
};

export default NotesList;

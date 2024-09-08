import { mapToElements } from "@renderer/utils";
import { FC } from "react";
import { DeleteNoteButton, FlexRow, NewNoteButton } from "..";
import { NoteListItem } from "./NoteListItem";
import { useNotesList } from "@renderer/hooks/useNotesLists";

const NotesList: FC = (): JSX.Element => {
  const {
   notes,
    handleNoteSelect,
    selectedNoteId,
  } = useNotesList();

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
        <NewNoteButton props={{ onClick: () => alert("New Note") }} />
        <DeleteNoteButton
          props={{
            className: "bg-red-500 hover:bg-red-600",
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

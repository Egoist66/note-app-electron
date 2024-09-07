import { notesMockData } from "@renderer/store/mocks";
import { mapToElements } from "@renderer/utils";
import { NoteInfo } from "@shared/models";
import { FC, useState } from "react";
import { DeleteNoteButton, FlexRow, NewNoteButton } from "..";
import { NoteListItem } from "./NoteListItem";

export const NotesList: FC = (): JSX.Element => {
  const [notes, setNotes] = useState<NoteInfo[]>(notesMockData);
  const [selectedNote, setSelectedNote] = useState<string>("");

  const deleteNote = (id: string | number) => {
    return () => setNotes(notes.filter((note) => note.id !== id));
  };

  const selectDeletingNote = (id: string) => {
    return () => setSelectedNote(id);
  }

  const noteList = mapToElements(notes, (note) => (
    <NoteListItem
      {...note}
      isActive={note.id === selectedNote}
      onClick={selectDeletingNote(note.id)} 
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
            onClick: deleteNote(selectedNote) 
          }}
        />
      </FlexRow>

      
      <ul className="mt-3 space-y-1">
        {noteList.length ? noteList : "No Notes"}
      </ul>
    </>
  );
};

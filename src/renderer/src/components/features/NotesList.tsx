import { notesMockData } from "@renderer/store/mocks";
import { FC } from "react";

export const NotesList: FC = (): JSX.Element => {
    return (
      <ul className="mt-3 space-y-1">
        {notesMockData.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    )
}
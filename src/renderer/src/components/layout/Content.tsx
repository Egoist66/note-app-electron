import { useAtomValue } from "jotai";
import { MarkDownEditor, FloatingNoteTitle } from "..";
import { selectedNoteAtom } from "@renderer/store";
import { NoteInfo } from "@shared/models";

type ContentProps =
  | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  | undefined;
export function Content({ main }: { main: ContentProps }): JSX.Element {

  const selectedNote = useAtomValue(selectedNoteAtom);


  return (
    <main id="main-content" {...main}>
      
      <FloatingNoteTitle className="mb-5">{selectedNote?.title}</FloatingNoteTitle>
      <MarkDownEditor note={selectedNote as NoteInfo} />


    </main>
  );
}

Content.displayName = "ContentBar";

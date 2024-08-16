import { DeleteNoteButton, FlexRow, NewNoteButton, NotesList } from "..";

type SideBarProps =
  | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  | undefined;
export function SideBar({ aside }: { aside: SideBarProps }): JSX.Element {
  return (
    <aside {...aside}>
      <FlexRow className="gap-2 justify-between items-center">
        <NewNoteButton />
        <DeleteNoteButton
          props={{ className: "bg-red-500 hover:bg-red-600" }}
        />
      </FlexRow>

      <NotesList />
    </aside>
  );
}

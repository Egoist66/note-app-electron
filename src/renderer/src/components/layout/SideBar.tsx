import { ReactNode } from "react";
import { NotesList } from "..";

type SideBarProps =
  | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  | undefined;



export function SideBar({ aside, children }: { aside: SideBarProps, children?: ReactNode }): JSX.Element {
  return (
    <aside {...aside}>
    
      <NotesList />

      
      {children && children}
      
    </aside>
  );
}

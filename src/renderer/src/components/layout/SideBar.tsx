type SideBarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | undefined
export function SideBar({aside}: {aside: SideBarProps}): JSX.Element{

    return (


        <aside  {...aside}>
            
        </aside>
       
    )
}
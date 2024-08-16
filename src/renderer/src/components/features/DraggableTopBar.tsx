export function DraggableTopBar({visible}: {visible?: boolean}): JSX.Element {
    return (
        <>
        
        
            {visible && <header id="top-bar" className="absolute inset-0 h-8 bg-transparent z-20"/>}
        
        </>
            
    )
}
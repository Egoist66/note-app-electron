type ContentProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | undefined
export function Content({main}: {main: ContentProps}): JSX.Element{

    return (


        <main id="main-content" {...main}>
            <h1 className="text-2xl ">Hi</h1>
        </main>
       
    )
}

Content.displayName = 'ContentBar'
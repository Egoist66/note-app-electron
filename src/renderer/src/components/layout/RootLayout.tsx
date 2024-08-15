import { ReactNode, type ComponentProps } from "react";

type AsideProps = ComponentProps<'aside'>
type MainProps = ComponentProps<'main'>
type FooterProps = ComponentProps<'footer'>

type LayoutProps  = {
    layoutCss?: string,
    aside?: AsideProps,
    main?: MainProps,
    footer?: FooterProps,
    slots?: {
        aside?: (props: AsideProps) => ReactNode | JSX.Element,
        main?: (props: MainProps) => ReactNode | JSX.Element,
        footer?: (props: FooterProps) => ReactNode | JSX.Element
    }
    
}

/**
 * A reusable layout component that renders a root layout with customizable aside, main, and footer sections.
 *
 * @param {LayoutProps} props - The layout properties, including aside, main, footer, and slots.
 * @return {JSX.Element} The rendered root layout element.
 */

export function RootLayout({aside, layoutCss, main, footer, slots }: LayoutProps): JSX.Element {


    return (
        <div className={layoutCss}>

            {slots?.aside && slots?.aside(aside as AsideProps)}

            {slots?.main && slots?.main(main as MainProps)}

            {slots?.footer && slots?.footer(footer as FooterProps)}


        </div>
    )
}
import { twMerge } from "tailwind-merge"
import { Content, RootLayout, SideBar } from "@/components"
import { useTheme } from "./hooks/useTheme"
import { cn } from "./utils"

function App(): JSX.Element {

  const [theme] = useTheme('dark')
  const cssClasses = cn(theme === 'dark' ? 'app-dark-layout' : 'app-light-layout')

  return (

    <RootLayout

      layoutCss={cssClasses}
      aside={{ className: twMerge('w-[250px] p-2 border-2 border-red-500 h-[100vh] overflow-auto')} }
      main={{ className: twMerge('h-screen flex-1 p-5 overflow-auto') }}
      slots={{ 
        aside: (aside) => <SideBar aside={aside} />,
        main: (main) => <Content main={main} />,
        
      }}
      
      
    />

   
    
  )
}

export default App

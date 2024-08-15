import { useState } from "react"
import { cn } from "./utils"

function App(): JSX.Element {

  const [theme, setTheme] = useState('light')


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  
  const cssClasses = cn(theme === 'dark' ? 'app' : 'bg-slate-100', 'flex h-full justify-center items-center')
  return (

    <div className={cssClasses}>
      <h1 className="text-blue-500 text-3xl">Hello</h1>


      <button onClick={() => toggleTheme()}>Toggle theme</button>
    </div>
  )
}

export default App

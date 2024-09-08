import { twMerge } from "tailwind-merge";
import {
  ActionButton,
  Content,
  DraggableTopBar,
  RootLayout,
  SideBar,
} from "@/components";
import { useTheme } from "./hooks/useTheme";
import { cn } from "./utils";
import { FaSun, FaMoon } from "react-icons/fa6";

function App(): JSX.Element {
  const [theme, setTheme] = useTheme(localStorage.getItem("theme") || "dark");
  const cssClasses = cn(
    theme === "dark" ? "app-dark-layout" : "app-light-layout",
  );

  return (
    <>
      <DraggableTopBar />

      <RootLayout
        layoutCss={cssClasses}
        aside={{ className: twMerge("w-[250px] p-2 h-[100vh] overflow-auto") }}
        main={{
          className: twMerge(
            "h-screen border-l border-l-white/20  flex-1 p-5 overflow-auto",
            theme === "dark" ? "dark-main" : "light-main",
          ),
        }}
        slots={{
          aside: (aside) => (
            <SideBar aside={aside}>
              <ActionButton
                props={{
                  onClick: setTheme,
                  className: "absolute z-20 bottom-2 left-2 shadow-md",
                }}
              >
                {theme === "dark" ? (
                  <FaSun color="white" />
                ) : (
                  <FaMoon color="black" />
                )}
              </ActionButton>
            </SideBar>
          ),
          main: (main) => <Content main={main} />,
        }}
      />
    </>
  );
}

export default App;

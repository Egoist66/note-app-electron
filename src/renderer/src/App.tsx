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
import { FaSun, FaMoon, FaToggleOn, FaToggleOff } from "react-icons/fa6";
import { useToggler } from "./hooks/useToggler";

function App(): JSX.Element {
  const [theme, setTheme] = useTheme(localStorage.getItem("theme") || "dark");
  const cssClasses = cn(
    theme === "dark" ? "app-dark-layout" : "app-light-layout",
  );

  const { isToggled, toggle } = useToggler(false);

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
            <SideBar
              aside={{
                ...aside,
                className: twMerge(
                  isToggled && "isToggledSidebar",
                  aside.className,
                ),
              }}
            >
              <ActionButton
                props={{
                  title: "change theme",
                  onClick: setTheme,
                  className: "absolute z-20 bottom-2 left-2 shadow-md",
                }}
              >
                {theme === "dark" ? (
                  <FaSun fontSize={20} color="white" />
                ) : (
                  <FaMoon fontSize={20} color="black" />
                )}
              </ActionButton>
              <ActionButton
                props={{
                  title: "toggle sidebar",
                  onClick: toggle,
                  className: "absolute z-20 bottom-2 left-14 shadow-md",
                }}
              >
                {isToggled ? (
                  <FaToggleOn
                    color={theme === "light" ? "white" : "black"}
                    fontSize={20}
                  />
                ) : (
                  <FaToggleOff
                    color={theme === "light" ? "white" : "black"}
                    fontSize={20}
                  />
                )}
              </ActionButton>
            </SideBar>
          ),
          main: (main) => (
            <Content
              main={{
                ...main,
                className: twMerge(isToggled && "border-none", main.className),
              }}
            />
          ),
        }}
      />
    </>
  );
}

export default App;

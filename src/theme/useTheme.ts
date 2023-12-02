import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";
import {useContext} from "react";

interface ITheme {
    theme: Theme,
    switchTheme: () => void
}

export function useTheme(): ITheme {
    const { theme, setTheme }: ThemeContextProps = useContext(ThemeContext);

    const switchTheme = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, switchTheme };
}
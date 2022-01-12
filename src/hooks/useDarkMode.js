import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (initMode) => {
    const [darkMode, setDarkMode] = useLocalStorage('mode',initMode);
   
    return [darkMode, setDarkMode];
}

export default useDarkMode;
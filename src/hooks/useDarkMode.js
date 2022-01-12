import { useState } from "react";

export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useState(initialValue);
    const handleChange = updatedValue => {
        setDarkMode(updatedValue);
    };
    return [darkMode, setDarkMode, handleChange];
};
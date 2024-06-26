import { useState, useEffect } from "react";

function getStorageValue(key, dafaultValue) {

    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || dafaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

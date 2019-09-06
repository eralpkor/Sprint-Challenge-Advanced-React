import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = initialValue => {
  const [someValue, setSomeValue] = useLocalStorage("dark-mode", initialValue);

  useEffect(() => {
    if (someValue) {
      document.body.classList.add("App-header");
    } else {
      document.body.classList.remove("App-header");
    }
  }, [someValue]);

  return [someValue, setSomeValue];
};

export default useDarkMode;

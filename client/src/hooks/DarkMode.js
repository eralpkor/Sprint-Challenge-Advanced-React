import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = initialValue => {
  const [someValue, setSomeValue] = useLocalStorage("dark-mode", initialValue);

  useEffect(() => {
    var header = document.getElementById("header");
    if (someValue) {
      header.classList.add("App-header");
      header.classList.remove("header");
    } else {
      header.classList.remove("App-header");
      header.classList.add("header");
    }
  }, [someValue]);

  return [someValue, setSomeValue];
};

export default useDarkMode;

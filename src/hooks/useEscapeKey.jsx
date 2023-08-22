import { useEffect } from "react";

export function useEscapeKey(callbackFunction) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        callbackFunction([]);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [callbackFunction]);
}

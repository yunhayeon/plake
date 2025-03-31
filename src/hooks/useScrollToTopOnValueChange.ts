import { useEffect } from "react";

export const useScrollToTopOnValueChange = (value?: unknown) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [value]);
};

"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query, intialValue = null) {
  // debugger;
  const [matches, setMatches] = useState(intialValue);

  useEffect(() => {
    // debugger;
    const mediaQueryList = window.matchMedia(query);

    const handleMatchChange = (e) => {
      setMatches(e.matches);
    };
    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handleMatchChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMatchChange);
    };
  }, [query]);
  return matches;
}

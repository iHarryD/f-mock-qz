import { useEffect, useState } from "react";

export default function useInMobileView() {
  const [inMobileView, setInMobileView] = useState(
    window.matchMedia("(max-width: 650px)").matches
  );

  useEffect(
    () =>
      window
        .matchMedia("(max-width: 650px)")
        .addEventListener("change", (e) => setInMobileView(e.matches)),
    []
  );

  return { inMobileView };
}

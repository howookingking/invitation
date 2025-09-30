import { useEffect, useState } from "react";

export default function useIsMac() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsMac(/Mac|iPhone|iPad|iPod/i.test(userAgent));
  }, []);

  return isMac;
}

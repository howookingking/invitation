import { getOrCreateVisitorId } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function useVisitorId() {
  const [localVisitorId, setLocalVisitorId] = useState<string | null>(null);

  useEffect(() => {
    setLocalVisitorId(getOrCreateVisitorId());
  }, []);

  return localVisitorId;
}

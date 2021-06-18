import { useState } from "react";

export function useOpenFlower() {
  const [openFlower, setOpenFlower] = useState();
  return {
    openFlower,
    setOpenFlower
  };
}

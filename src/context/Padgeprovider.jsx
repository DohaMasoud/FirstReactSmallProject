import { useState } from "react";
import { PadgeContext } from "./PadgeContext";

export function PadgeProvider(props) {

  const [Count, setCount] = useState(0);
  const CountHandler = () => {
    setCount(Count + 1);
  };
  let myValues = {
    Count,
    CountHandler,
  };
  return (
    <PadgeContext.Provider value={myValues}>
      {props.children}
    </PadgeContext.Provider>
  );
}


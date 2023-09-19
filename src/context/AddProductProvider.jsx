import { useState } from "react";
import { AddProductContext} from "./AddProductContext";

export function AddProductProvider(props) {
  let [id, setid] = useState([]);
  const IdHandler = (id1) => {
    setid((b) => [...id, id1]);
  };
  let myValues = {
    id,
    IdHandler,
  };
  return (
    <AddProductContext.Provider value={myValues}>
      {props.children}
    </AddProductContext.Provider>
  );
}


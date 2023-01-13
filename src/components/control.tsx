import React from "react";
import { observer } from "mobx-react";
import { controlStore } from "../store/ControlStore";

const Control = observer(() => {
  return (
    <div style={{ margin: "5px 10px"}}>
      <span style={{ margin: "0 10px", border: "1px solid black" }}>{controlStore.text}</span>

      <input style={{ margin: "0 10px" }} type="button" value="Reset" onClick={controlStore.reset} />

      <input style={{ margin: "0 10px" }} type="button" value="Hello" onClick={controlStore.printHello} />
    </div>
  );
});

export default Control;
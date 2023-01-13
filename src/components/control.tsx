import React from "react";
import { observer } from "mobx-react";
import { controlStore } from "../store/ControlStore";

const Control = observer(() => {
  return (
    <div className="p-3 border bg-light">
      <span className="p-2 border bg-light">{controlStore.text}</span>

      <input className="btn btn-dark m-2" type="button" value="Reset" onClick={controlStore.reset} />

      <input className="btn btn-dark m-2" type="button" value="Hello" onClick={controlStore.printHello} />
    </div>
  );
});

export default Control;
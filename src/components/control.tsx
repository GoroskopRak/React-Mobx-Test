import React from "react";
import { observer } from "mobx-react";
import { controlStore } from "../store/ControlStore";

const Control = observer(() => {
  return (
    <div className="p-3 border bg-light">
      <input type="text" value={controlStore.text} onChange={e =>controlStore.change(e)} className="p-2 border"/>

      <input className="btn btn-dark m-2" type="button" value="Reset" onClick={controlStore.reset} />

      <input className="btn btn-dark m-2" type="button" value="Hello" onClick={controlStore.printHello} />
    </div>
  );
});

export default Control;
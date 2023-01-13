import React from "react";
import { observer } from "mobx-react";
import { controlStore } from "../store/ControlStore2";

const Control2 = observer(() => {
  return (
    <div className="p-3 border bg-light">

      <input className="btn btn-dark m-2"  type="button" value="Alert if number" onClick={controlStore.alertIfNumber} />
      
      <span className="p-2 border bg-light">{controlStore.text}</span>

      <input className="btn btn-dark m-2" type="button" value="Alert" onClick={controlStore.alert} />

    </div>
  );
});

export default Control2;
import React from "react";
import { observer } from "mobx-react";
import { controlStore } from "../store/ControlStore2";

const Control2 = observer(() => {
  return (
    <div style={{ margin: "5px 10px"}}>

      <input style={{ margin: "0 10px" }} type="button" value="Alert if number" onClick={controlStore.alertIfNumber} />
      
      <span style={{ margin: "0 10px", border: "1px solid black" }}>{controlStore.text}</span>

      <input style={{ margin: "0 10px" }} type="button" value="Alert" onClick={controlStore.alert} />

    </div>
  );
});

export default Control2;
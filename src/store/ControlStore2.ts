import { observable, action } from "mobx";

const controlStore = observable({
  text: 'Initial4 text2',
  alertIfNumber: action(() => {
    const firstNumber = controlStore.text.search(/\d/);
    if ( firstNumber !== -1 ) {
        alert(controlStore.text[firstNumber]);
    }
  }),
  alert: action(() => {
    alert(controlStore.text);
  })
});

export { controlStore };
import { observable, action } from "mobx";

// configure({ enforceActions: true });

const controlStore = observable({
  text: 'Initial text',
  printHello: action(() => {
    controlStore.text='Hello World!';
  }),
  reset: action(() => {
    controlStore.text='';
  })
});

export { controlStore };
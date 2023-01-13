import { observable, action } from "mobx";

// configure({ enforceActions: true });

const controlStore = observable({
  text: 'Initial text',
  printHello: action(() => {
    controlStore.text='Hello World!';
  }),
  change: action((e: {target: {value: string}}) => {
    controlStore.text = e.target.value;
  }),
  reset: action(() => {
    controlStore.text='';
  })
});

export { controlStore };
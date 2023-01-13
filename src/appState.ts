import { observable, action} from "mobx";


class ApplicationState {

  @observable
  currentItem = 'Test Component 1';

  @action
  printHelloWorld() {
    appState.currentItem= 'Hello world';
    this.currentItem = 'Hello world';
  }

  @action
   reset() {
    this.currentItem = '';
  }

  @action
  changeValue(e: any) {
    this.currentItem = e.target.value;
  }
}

export const appState = new ApplicationState();
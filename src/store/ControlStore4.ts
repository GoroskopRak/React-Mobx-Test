import { observable, action } from "mobx";
import { getCountryByName} from "../api/apiService";
import { Types } from "./ControlStore3";

const controlStore4: Types = observable({
  text: '',
  suggestions: [],
  change: action((e: any) => {
    controlStore4.text = e.target.value;
    getCountryByName(controlStore4.text).then(result => controlStore4.suggestions = result);
  }),
});

export { controlStore4 };

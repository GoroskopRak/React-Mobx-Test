import { observable, action } from "mobx";
import { getCountryByName, CountryInfo } from "../api/apiService";

interface Types {
    text: string,
    suggestions: CountryInfo[],
    change: Function,
}

const controlStore3: Types = observable({
  text: '',
  suggestions: [],
  change: action((e: {target: {value: string}}) => {
    controlStore3.text = e.target.value;
    getCountryByName(controlStore3.text).then(result => controlStore3.suggestions = result);
  }),
});

export { controlStore3 };
export type { Types };

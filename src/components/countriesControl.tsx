import React from "react";
import { observer } from "mobx-react";
import { Types } from "../store/ControlStore3";


const CountriesControl = observer((props: { maxSuggestions: number ; controlStore: Types}) => {
    const {maxSuggestions, controlStore} = props;

    return (
    <div style={{ margin: "5px 10px"}}>
            <input type="text" className="search-suggestion p-2 border" value={controlStore.text} onChange={e =>controlStore.change(e)}/>
            
            <div>
                <ul className='ul-suggestion border bg-light'>
                    {controlStore.suggestions.slice(0,maxSuggestions).map(suggestion => (
                        <li className='ul-suggestion-li border bg-light'
                        onClick={() => controlStore.text = `${suggestion.name}, ${suggestion.fullName}`}
                        key={suggestion.fullName}
                        >
                        <div>
                            {suggestion.name}, &nbsp;
                            {suggestion.fullName}, &nbsp;
                            <img src={suggestion.flag} alt='flag' className="ul-suggestion-li-img"/>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>

    </div>
  );
});

export default CountriesControl;
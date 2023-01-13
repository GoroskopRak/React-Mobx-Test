import React from "react";
import { observer } from "mobx-react";
import { Types } from "../store/ControlStore3";


const Control3 = observer((props: { maxSuggestions: number | undefined; controlStore: Types}) => {
    const {maxSuggestions, controlStore} = props;

    return (
    <div style={{ margin: "5px 10px"}}>
            <input type="text" className="search-suggestion" value={controlStore.text} onChange={e =>controlStore.change(e)}/>
            
            <div>
                <ul className='ul-suggestion'>
                    {controlStore.suggestions.slice(0,maxSuggestions).map(suggestion => (
                        <li className='ul-suggestion-li'
                        onClick={() => controlStore.text = `${suggestion.name}, ${suggestion.fullName}`}
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

export default Control3;
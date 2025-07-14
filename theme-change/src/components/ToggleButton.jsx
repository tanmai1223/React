import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import translation from '../utilities/translation';
import { LangContext } from '../context/LangContext';

function ToggleButton() {
    const themeContext=useContext(ThemeContext);
    const langContext=useContext(LangContext)
    const checkContext=()=>{
        return themeContext.theme=='light'? false :true;
    }
  return (
    <div>
      <label >{translation[langContext.lang]['toggleBtn']}    </label>
      <input type='checkBox' onChange={()=>themeContext.toggleTheme()} checked={checkContext()}></input>
    </div>
  )
}

export default ToggleButton

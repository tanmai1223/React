import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ToggleButton from './ToggleButton';
import { LangContext } from '../context/LangContext';
import translation from '../utilities/translation';

function Level2() {
    const {theme,toggleTheme}=useContext(ThemeContext);
    const langContext=useContext(LangContext)
  return (
    <div>
      {translation[langContext.lang]['hello']}
    </div>
  )
}

export default Level2

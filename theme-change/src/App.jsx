import React, { useContext } from 'react'
import Level1 from './components/Level1'
import { ThemeContext } from './context/ThemeContext'
import ToggleButton from './components/ToggleButton';
import './App.css'
import DropDown from './components/DropDown';
import { LangContext } from './context/LangContext';
function App() {
  const themeContext = useContext(ThemeContext);
  const langContext =useContext(LangContext)
 
  return (
    <div className={themeContext.theme=='dark' ? "dark-mode body":'body'}>
      <div>
        <DropDown />
      </div>
      <div>
        <ToggleButton />
        <Level1 />
      </div>
    </div>

  )
}

export default App

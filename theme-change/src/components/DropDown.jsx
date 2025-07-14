import React, { useContext } from 'react'
import { LangContext, LangEnums, LangProvider } from '../context/LangContext'

function DropDown() {
    const langContext=useContext(LangContext)
  return (
    <div style={{position:'absolute',top:'2rem',right:'2rem'}}>
      <select onChange={(e)=>langContext.langChange(e.target.value)}>
        {Object.keys(LangEnums).map((Language)=>(
            <option key={Language} value={LangEnums[Language]}>{Language}</option>
))}
      </select>
    </div>
  )
}

export default DropDown

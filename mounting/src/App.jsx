import React, { useState } from 'react';
import NewComponent from './NewComponent';

function App() {
  const [switchs, setSwitchs] = useState(false);

  
  return (
    <div>
      <button onClick={()=>setSwitchs(!switchs)}>Switch</button>
      {!switchs ? <NewComponent /> :<></>}
    </div>
  );
}

export default App;

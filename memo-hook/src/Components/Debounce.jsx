import React, { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

function Debounce() {
  const [text, setText] = useState('');

  // Create debounced function only once
  const debouncer = useMemo(() =>
    debounce((value) => {
      console.log("Hello");
    }, 1000), []
  );

  const handleChange = (e) => {
    setText(e.target.value);
    debouncer(e.target.value); // This is now properly debounced
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder='Type something' />
    </div>
  );
}

export default Debounce;

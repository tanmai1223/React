import React from 'react';

const CallbackChild = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment from Child</button>;
});

export default CallbackChild;

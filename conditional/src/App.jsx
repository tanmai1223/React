import React, { useState } from "react";
import LoggedIn from "./Components/LoggedIn";
import NotLoggedIn from "./Components/NotLoggedIn";

function App() {
  const [loggedInfo, setLoggedInfo] = useState(false);
  return (
    <div>
      {loggedInfo ? (
        <LoggedIn loggedInfo={loggedInfo} setLoggedInfo={setLoggedInfo} />
      ) : (
        <NotLoggedIn loggedInfo={loggedInfo} setLoggedInfo={setLoggedInfo} />
      )}
    </div>
  );
}

export default App;

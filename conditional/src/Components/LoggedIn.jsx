import React from "react";

function LoggedIn({ loggedInfo, setLoggedInfo }) {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <button
        onClick={() => {
          setLoggedInfo(!loggedInfo);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LoggedIn;

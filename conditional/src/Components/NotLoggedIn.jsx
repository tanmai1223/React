import React from "react";

function NotLoggedIn({ loggedInfo, setLoggedInfo }) {
  return (
    <div>
      <h1>Login Please</h1>
      <button
        onClick={() => {
          setLoggedInfo(!loggedInfo);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default NotLoggedIn;

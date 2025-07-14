import React from 'react'
import UserList from './UserList';

function UserCard({users}) {
  return (

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)"
    }}>
      {
        users.map((user) => {
          return <UserList key={user.profileImageUrl} user={user} />;
        }
        )
      }

    </div>
  )
}

export default UserCard

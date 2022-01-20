import React from 'react'
import UserSingle from './UserSingle'
import {IUser} from './Types'

interface UserListProps{
  users: IUser[]
}

function UserList({users}: UserListProps) {
  return (
    <div>
      <p className="h3">User list:</p>
      <div className="p-3">
        {users.map((item) => <UserSingle key={item.id} user={item}/>)}
      </div>
    </div>
  )

}

export default UserList
